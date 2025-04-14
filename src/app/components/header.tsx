import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <nav className="bg-primary shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-brand-primary">
                    <img src="/images/brokinla.png" className="w-24"/>
                </div>
                <div className="space-x-4">
                <Link href="/" className="text-brand-text hover:text-brand-primary">Home</Link>
                <Link href="/dogs/selsig" className="text-brand-text hover:text-brand-primary">Selsig</Link>
                <Link href="/dogs/elska" className="text-brand-text hover:text-brand-primary">Elska</Link>
                <Link href="/blog" className="text-brand-text hover:text-brand-primary">Blog</Link>
                </div>
            </div>
        </nav>
    );
}