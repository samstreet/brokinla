import React from 'react'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-brand-primary">
            Brokinla
          </div>
          <div className="space-x-4">
            <a href="/" className="text-brand-text hover:text-brand-primary">Home</a>
            <a href="selsig" className="text-brand-text hover:text-brand-primary">Selsig</a>
            <a href="elska" className="text-brand-text hover:text-brand-primary">Elska</a>
            <a href="blog" className="text-brand-text hover:text-brand-primary">Blog</a>
          </div>
        </div>
      </nav>

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
              <a 
                href="#" 
                className="brand-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Book Now
              </a>
              <a 
                href="#" 
                className="brand-secondary text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Learn More
              </a>
            </div>
          </div>
          <div>
            <img 
              src="/images/hero-dog.jpeg" 
              alt="Happy Dog" 
              className="rounded-xl"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}