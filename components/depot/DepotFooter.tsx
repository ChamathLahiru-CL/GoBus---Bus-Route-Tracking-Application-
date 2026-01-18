import { Facebook, Twitter, Instagram, Bus, Phone, Mail, MapPin } from 'lucide-react';

export default function DepotFooter() {
    return (
        <footer className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-950 text-gray-300 mt-auto">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Column 1: Brand Info */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                <Bus className="text-white" size={24} />
                            </div>
                            <span className="text-2xl font-semibold text-white">GoBus Depot</span>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Advanced depot management system for efficient bus operations and route tracking.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Management</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/depot" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="/depot/bus-management" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Bus Management
                                </a>
                            </li>
                            <li>
                                <a href="/depot/route-management" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Route Management
                                </a>
                            </li>
                            <li>
                                <a href="/depot/timetable" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Timetable
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Operations */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Operations</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/depot/bookings" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Bookings Overview
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Driver Management
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Maintenance Logs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Reports
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-white">Depot Address:</p>
                                    <p className="text-sm text-gray-400">Main Bus Depot, Badulla</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-white">Operations:</p>
                                    <p className="text-sm text-gray-400">+94 55 222 3344</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-white">Email:</p>
                                    <p className="text-sm text-gray-400">depot@gobus.lk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700/50">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500">
                            © 2026 GoBus Depot Management System. All rights reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500">Follow us:</span>
                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
                                >
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
                                >
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-colors duration-200"
                                >
                                    <Instagram className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}