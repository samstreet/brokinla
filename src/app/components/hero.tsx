import React from "react";

export default function Hero() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-4 grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-5xl font-bold mb-6 text-brand-text">
              Brokinla: Championship Show Dogs
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Where Pedigree Meets Perfection
            </p>
          </div>
          <div>
            <img 
              src="/images/brokinla.png" 
              alt="Happy Dog" 
              className="rounded-xl"
            />
          </div>
        </div>
    );
}