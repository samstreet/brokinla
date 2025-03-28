import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header';
import { metadata } from '../layout';

export default function Home() {
  metadata.title = "Brokinla | Blog"

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-12">
          Blog
        </div>
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}