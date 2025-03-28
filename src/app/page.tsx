import React from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero';
import { metadata } from './layout';


export default function Home() {
  metadata.title = 'Brokinla'

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>

      {/* Hero Section */}
      <main className="flex-grow">
        <Hero />

        {/* Services Overview */}
        <section className="bg-white py-4">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-text">
              Our Dogs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Selsig",
                  description: "Comfortable overnight stays with individual care.",
                  src: "/images/hero-dog.png"
                },
                {
                  title: "Elska",
                  description: "Fun-filled days with supervised playtime.",
                  src: "/images/elska.png"
                },
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="brand-background p-6 rounded-xl items-center text-center shadow-md"
                >
                  <div className='flex'>
                    <img 
                      src={service.src}
                      alt="Happy Dog" 
                      className="mb-4 max-w-24 max-h-24 justify-between m-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}