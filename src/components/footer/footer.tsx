import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#f5f5f5] py-12 mt-20 px-10">
            <div className="container md:mx-auto md:px-[45px]  flex flex-col md:flex-row justify-center gap-16">
                {/* Site Map */}
                <div className="flex flex-col ">
                    <h3 className="font-bold text-lg mb-4">Site Map</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">About</a></li>
                        <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Portfolio</a></li>
                        <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Blog</a></li>
                        <li><a href="#" className="text-gray-600 text-sm hover:text-black transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Office Address */}
                <div className="flex flex-col ">
                    <h3 className="font-bold text-lg mb-4">Office Address</h3>
                    <p className="text-gray-600 text-sm ">123 East 26th Street,</p>
                    <p className="text-gray-600 text-sm">Fifth Floor,</p>
                    <p className="text-gray-600 text-sm">New York, NY 10011</p>
                    <p className="text-gray-600 text-sm">hello@architecture.com</p>
                    <p className="text-gray-600 text-sm">(212) 563-7765</p>
                </div>

                {/* Opening Hours */}
                <div className="flex flex-col ">
                    <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
                    <p className="text-gray-600 text-sm">Monday — Closed</p>
                    <p className="text-gray-600 text-sm">Tuesday — Friday 10am - 4pm</p>
                    <p className="text-gray-600 text-sm">Saturday — Closed</p>
                    <p className="text-gray-600 text-sm">Sunday — Closed</p>
                </div>

                {/* Social Media */}
                <div className="flex flex-col ">
                    <h3 className="font-bold text-lg mb-4">Social</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 text-sm hover:text-black transition-colors"><FaInstagram size={24} /></a>
                        <a href="#" className="text-gray-600 text-sm hover:text-black transition-colors"><FaFacebook size={24} /></a>
                        <a href="#" className="text-gray-600 text-sm hover:text-black transition-colors"><FaTiktok size={24} /></a>
                        <a href="#" className="text-gray-600 text-sm hover:text-black transition-colors"><FaLinkedin size={24} /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-12 border-t border-gray-200 pt-8">
                <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Architecture. All rights reserved.</p>
            </div>
        </footer>
    );
}