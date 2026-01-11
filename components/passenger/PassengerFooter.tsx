import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-950 text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Column 1: Brand Info */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                <span className="text-slate-900 font-bold text-2xl">G</span>
                            </div>
                            <span className="text-2xl font-semibold text-white">GoBus</span>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Digital transport management for Badulla District. Your journey, our priority.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Find Routes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Contact Us</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-medium text-white">Address:</p>
                                <p className="text-sm text-gray-400">Main Bus Stand, Badulla</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">Phone:</p>
                                <p className="text-sm text-gray-400">+94 55 222 3344</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-white">Email:</p>
                                <p className="text-sm text-gray-400">info@gobus.lk</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Follow Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Follow Us</h3>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700/50">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center">
                    <p className="text-sm text-gray-500">
                        © 2026 GoBus. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}