import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <nav className="bg-purple-100 shadow-sm border-b font-medium">
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-brand-primary">
                    <img src="/images/brokinla.png" className="w-24"/>
                </div>
                <div className="space-x-4 ">
                <Link href="/" className="hover:text-purple-800 transition-colors">Home</Link>
                <Link href="/dogs/selsig" className="hover:text-purple-800 transition-colors">Selsig</Link>
                <Link href="/dogs/elska" className="hover:text-purple-800 transition-colors">Elska</Link>
                <Link href="/blog" className="hover:text-purple-800 transition-colors">Blog</Link>
                </div>
            </div>
        </nav>
    );
}