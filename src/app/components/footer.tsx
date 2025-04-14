import React from "react";
export default function Footer() {
    return (
        <footer className="bg-purple-200 py-8 border-t">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-gray-600">
                © {new Date().getFullYear()} Brokinla. All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}