import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero';
import { metadata } from './layout';
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Link from 'next/link';

const POST_QUERY = `*[_type == "dogs"]`;
const options = { next: { revalidate: 30 } };

export default async function Home() {
  metadata.title = 'Brokinla'
  const dogs = await client.fetch<SanityDocument>(POST_QUERY, [], options);
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>

      {/* Hero Section */}
      <main className="flex-grow">
        <Hero />

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-text">
              Our Dogs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {dogs.map((dog: {name: string, slug: string, body: Array<object>}, index: number) => (
                <Link href={`/dogs/${dog.slug}`} key={index} >
                  <div className="brand-background p-6 rounded-xl items-center text-center shadow-md">
                    <div className='flex'>
                      <img 
                        src={`/images/${dog.name.toLowerCase()}.png`}
                        alt="Happy Dog" 
                        className="mb-4 max-w-24 max-h-24 justify-between m-auto"
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-center mb-12">{dog.name}</h3>
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    {dog.body.map((block: any, blockIndex: number) => (
                      <div key={blockIndex} className="mb-4 p-3">
                          {block.children.map((child: {marks: string, text: string}, childIndex: number) => (
                            <div key={childIndex} className="mb-2 p-2">
                              <p>{child.text}</p>
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}