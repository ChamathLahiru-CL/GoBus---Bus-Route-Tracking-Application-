import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo/logo.png"
                            alt="GoBus Logo"
                            width={60}
                            height={60}
                            className="rounded-full"
                        />
                        <span className="text-xl font-semibold text-gray-900">GoBus</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-blue-600 font-medium">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Find Routes</a>
                        <a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a>
                        <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                        <Link href="/login" className="text-purple-600 hover:text-purple-900 font-medium">
                            Depot
                        </Link>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        <Link href="/login">
                            <button className="px-5 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                                Log In
                            </button>
                        </Link>
                        <Link href="/signup">
                            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}