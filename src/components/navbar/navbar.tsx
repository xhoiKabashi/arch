"use client";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    // Close sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white fixed w-full z-50">
            <div className="flex  justify-between md:justify-around px-5 py-5 md:py-10">
                {/* Logo */}
                <div className="">
                    <a href="/" aria-label="Home">
                        <img src="./logo.svg" alt="Logo" className="h-10" />
                    </a>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-10 items-center font-semibold text-[18px] tracking-wider">
                    <Link href="/" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
                        Home
                    </Link>
                    <Link href="about-us" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
                        About
                    </Link>
                    <a href="#contact" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
                        Contact
                    </a>
                    <Link href="portfolio" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
                        Portfolio
                    </Link>
                </div>

                {/* Hamburger Menu Icon with Animation */}
                <motion.div
                    className="cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    initial={false}
                    animate={isMobileMenuOpen ? "open" : "closed"}
                >
                    <Menu size={32} className="text-gray-700" />

                </motion.div>
            </div>

            {/* Mobile Navigation Links with Framer Motion */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        ref={sidebarRef}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-[450px] bg-white shadow-md z-40 overflow-y-auto"
                    >
                        <div className="p-4 ">
                            {/* Close Button (X) inside the sidebar */}
                            <div className="flex justify-end mb-8 pt-5  pr-10">
                                <motion.div
                                    className="cursor-pointer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <X size={32} className="text-gray-700" />
                                </motion.div>
                            </div>
                            <div className="px-14 flex flex-col gap-6 ">
                                <h1 className="font-semibold tracking-widest text-xl uppercase mb-4">Arki.</h1>
                                <p className="  font-light text-[18px] text-slate-600 tracking-wider leading-relaxed text-balance">Arki Architecture is a New-York-based studio practice focused on modern design, interiors and landscapes. From our inception in 2007, we have delivered exceptional public. As a full-service firm.</p>
                                <div className="grid grid-cols-2 gap-3 overflow-hidden pr-14 py-5 w-[300px]">
                                    <img
                                        src="./1.jpg"
                                        alt=""
                                        className="w-[103px] h-[103px] object-center" />
                                    <img
                                        src="./2.jpg"
                                        alt=""
                                        className="w-[103px] h-[103px] object-center" />
                                    <img
                                        src="./3.jpg"
                                        alt=""
                                        className="w-[103px] h-[103px] object-center" />
                                    <img
                                        src="./4.jpg"
                                        alt=""
                                        className="w-[103px] h-[103px] object-center" />
                                    <img
                                        src="./.jpg"
                                        alt=""
                                        className="w-[103px] h-[103px] object-center"
                                    />
                                    <img
                                        src="./6.jpg"
                                        alt=""
                                        className="w-[103px] h-[103px] object-center"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 font-semibold text-slate-400"><p>1222 Peterson Street</p>
                                    <p>Kingston UK London</p>
                                </div>
                                <div className="font-semibold text-slate-400">
                                    T. +44 20 1234 5678
                                </div>
                                <div className="font-semibold text-slate-400">
                                    E. arki@arkicorp.co
                                </div>
        
                                    <div className="flex space-x-4 text-slate-400">
                                        <a href="#" className=" text-sm hover:text-black transition-colors"><FaInstagram size={24} /></a>
                                        <a href="#" className=" text-sm hover:text-black transition-colors"><FaFacebook size={24} /></a>
                                        <a href="#" className=" text-sm hover:text-black transition-colors"><FaTiktok size={24} /></a>
                                        <a href="#" className=" text-sm hover:text-black transition-colors"><FaLinkedin size={24} /></a>
                                    </div>
                   
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;