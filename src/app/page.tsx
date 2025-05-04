import React from 'react'
// import Footer from './components/footer'
// import Header from './components/header'
import { metadata } from './layout';
// import { type SanityDocument } from "next-sanity";
// import { client } from "@/sanity/client";
// import Link from 'next/link';
// import BrokinlaIntroduction from './components/intro';
import { Wrench } from "lucide-react";

// const POST_QUERY = `*[_type == "dogs"]`;
// const options = { next: { revalidate: 30 } };

export default async function Home() {
  metadata.title = 'Brokinla'
  // const dogs = await client.fetch<SanityDocument>(POST_QUERY, [], options);
  return (

    <div className="min-h-screen bg-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <div className="flex flex-col items-center text-center">
          <div className="bg-purple-100 p-4 rounded-full mb-6">
            <Wrench className="h-12 w-12 text-purple-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            We&apos;re Under Construction
          </h1>
          
          <div className="h-1 w-24 bg-purple-400 mb-6"></div>
          
          <p className="text-gray-600 mb-8">
            Our website is currently undergoing scheduled maintenance. 
            We&apos;re working hard to improve your experience and will be back online shortly.
          </p>
          
          <div className="mt-8 pt-6 border-t border-gray-200 w-full text-center">
            <p className="text-gray-500 text-sm text-center">
              &copy; {new Date().getFullYear()} Brokinla
            </p>
          </div>
        </div>
      </div>
    </div>

    // <div className="min-h-screen flex flex-col">
    //   <Header/>

    //   {/* Hero Section */}
    //   <main className="flex-grow">

    //     <BrokinlaIntroduction />

    //     {/* Services Overview */}
    //     <section className="py-16 bg-purple-100">
    //       <div className="max-w-6xl mx-auto px-4">
    //         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
    //           Our Dogs
    //         </h2>
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
    //           {dogs.map((dog: {name: string, slug: string, body: Array<object>}, index: number) => (
    //             <Link href={`/dogs/${dog.slug}`} key={index} >
    //               <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
    //                 <div className="p-8 flex flex-col items-center">
    //                   <div className="w-24 h-24 mb-4">
    //                     <img src={`/images/${dog.name.toLowerCase()}.png`} alt={dog.name} className="w-full h-full object-contain" />
    //                   </div>
    //                   <h3 className="text-2xl font-bold text-gray-800">{dog.name}</h3>
    //                   <p className="mt-4 text-purple-600 hover:underline">View Profile</p>
    //                 </div>
    //               </div>
    //             </Link>
    //           ))}
    //         </div>
    //       </div>
    //     </section>

    //     <div className="bg-purple-50 text-gray-600 body-font">
    //         <div className="container px-5 py-24 mx-auto">
    //           <div className="flex flex-col text-center w-full mb-20">
    //             <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
    //             <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably heard of them man bun deep jianbing selfies heirloom.</p>
    //           </div>
    //           <div className="flex flex-wrap -m-4">
    //             <div className="lg:w-1/3 sm:w-1/2 p-4">
    //               <div className="flex relative">
    //                 <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360"/>
    //                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //                   <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
    //                   <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
    //                   <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="lg:w-1/3 sm:w-1/2 p-4">
    //               <div className="flex relative">
    //                 <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361"/>
    //                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //                   <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
    //                   <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
    //                   <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="lg:w-1/3 sm:w-1/2 p-4">
    //               <div className="flex relative">
    //                 <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363"/>
    //                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //                   <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
    //                   <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
    //                   <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="lg:w-1/3 sm:w-1/2 p-4">
    //               <div className="flex relative">
    //                 <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362" />
    //                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //                   <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
    //                   <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
    //                   <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="lg:w-1/3 sm:w-1/2 p-4">
    //               <div className="flex relative">
    //                 <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365"/>
    //                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //                   <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
    //                   <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
    //                   <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="lg:w-1/3 sm:w-1/2 p-4">
    //               <div className="flex relative">
    //                 <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366" />
    //                 <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
    //                   <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
    //                   <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
    //                   <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //   </main>

    //   <Footer/>
    // </div>
  )
}