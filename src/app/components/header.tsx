import React from "react";

export default function Header() {
    return (
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
    );
}