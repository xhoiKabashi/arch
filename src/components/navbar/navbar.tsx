
"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white  fixed w-full z-50">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-24 py-4">
                {/* Logo */}
                <div className="flex-1">
                    <a href="#" aria-label="Home">
                        <img src="./logo.svg" alt="Logo" className="h-10" />
                    </a>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-10 items-center font-semibold">
                    <a
                        href="#"
                        className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                    >
                        Contact
                    </a>
                    <a
                        href="#portfolio"
                        className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                    >
                        Portfolio
                    </a>
                </div>

                {/* Call to Action Button */}
                <div className="hidden md:block">
                    <button className="bg-amber-600 text-white px-3 mx-5 py-2 rounded-lg hover:bg-amber-700 transition duration-300 shadow-lg">
                        Request A Quote
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div
                    className="md:hidden cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X size={32} className="text-gray-700" />
                    ) : (
                        <Menu size={32} className="text-gray-700" />
                    )}
                </div>
            </div>

            {/* Mobile Navigation Links */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-md py-4">
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:text-amber-600 transition-colors duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="block px-4 py-2 text-gray-700 hover:text-amber-600 transition-colors duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="block px-4 py-2 text-gray-700 hover:text-amber-600 transition-colors duration-300"
                    >
                        Contact
                    </a>
                    <a
                        href="#portfolio"
                        className="block px-4 py-2 text-gray-700 hover:text-amber-600 transition-colors duration-300"
                    >
                        Portfolio
                    </a>
                    <button className="mt-4 w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition duration-300 shadow-lg">
                        Request A Quote
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
