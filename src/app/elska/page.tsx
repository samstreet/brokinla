import React from 'react'
import Header from '../components/header'
import { metadata } from '../layout'

export default function Home() {
  metadata.title = 'Brokinla | Elska'

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-12">
          Elska
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