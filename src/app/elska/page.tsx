import React from 'react'
import Link from "next/link";
import Header from '../components/header'

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
      </main>

      {/* Footer */}
      <footer className="bg-white py-8 border-t">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Pawsome Kennel. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}