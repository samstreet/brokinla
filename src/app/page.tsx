import React from 'react'
import Link from "next/link";
import Footer from './components/footer'
import Header from './components/header'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-brand-text">
              Exceptional Care for Your Furry Friends
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional dog boarding and daycare that feels like a second home for your beloved pets.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="brand-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Book Now
              </Link>
              <Link 
                href="#" 
                className="brand-secondary text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img 
              src="/images/hero-dog.png" 
              alt="Happy Dog" 
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Services Overview */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-brand-text">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Selsig",
                  description: "Comfortable overnight stays with individual care.",
                  icon: "🐶"
                },
                {
                  title: "Elska",
                  description: "Fun-filled days with supervised playtime.",
                  icon: "🐶"
                },
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="brand-background p-6 rounded-xl items-center text-center shadow-md"
                >
                  <div className='flex'>
                    <img 
                      src="/images/hero-dog.png"
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