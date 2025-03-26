import React from 'react'
import Link from "next/link";
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
            <Link href="/" className="text-brand-text hover:text-brand-primary">Home</Link>
            <Link href="selsig" className="text-brand-text hover:text-brand-primary">Selsig</Link>
            <Link href="elska" className="text-brand-text hover:text-brand-primary">Elska</Link>
            <Link href="blog" className="text-brand-text hover:text-brand-primary">Blog</Link>
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