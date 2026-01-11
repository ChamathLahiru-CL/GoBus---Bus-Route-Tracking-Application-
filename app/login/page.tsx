'use client';

import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedRole, setSelectedRole] = useState('passenger');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement login logic with role
        console.log('Login with role:', selectedRole);

        // Redirect based on selected role
        if (selectedRole === 'passenger') {
            router.push('/passenger');
        } else if (selectedRole === 'admin') {
            router.push('/admin');
        } else if (selectedRole === 'depo') {
            router.push('/depo');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-teal-300 flex items-center justify-center p-4">
            {/* Main Card Container */}
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* LEFT SECTION - BRAND VISUAL PANEL */}
                    <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-blue-600 via-teal-500 to-blue-800 p-12 relative overflow-hidden">
                        {/* Decorative Background Pattern */}
                        <div className="absolute inset-0 opacity-70">
                            {/* Decorative Background Image */}
                            <Image
                                src="/login/sign/Gemini_Generated_Image_1mifoi1mifoi1mif (1).png"
                                alt="Background"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="relative z-10" />

                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold text-white mb-3">GoBus Badulla</h2>
                            <p className="text-lg text-blue-100 font-semibold mb-2">
                                Digital Transport Management for Badulla District
                            </p>
                            <p className="text-blue-50 text-sm leading-relaxed">
                                Real-time schedules, fare estimates, and reliable routing
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SECTION - LOGIN FORM */}
                    <div className="flex flex-col justify-center p-8 md:p-12">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-bold text-lg">G</span>
                            </div>
                            <span className="text-xl font-semibold text-gray-900">GoBus</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to GoBus</h1>
                        <p className="text-gray-600 text-sm mb-8">
                            Access your Passenger, Depot, or Admin account
                        </p>

                        {/* Form */}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            {/* Password Input */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition pr-12"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Account Type Selection */}
                            <div>
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                                    Account Type
                                </label>
                                <select
                                    id="role"
                                    value={selectedRole}
                                    onChange={(e) => setSelectedRole(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                >
                                    <option value="passenger">Passenger</option>
                                    <option value="depo">Depot Staff</option>
                                    <option value="admin">Administrator</option>
                                </select>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium mt-6"
                            >
                                Log In
                            </button>
                        </form>

                        {/* Links */}
                        <div className="flex justify-between items-center mt-4 text-sm">
                            <a href="#" className="text-blue-600 hover:underline font-medium">
                                Forgot password?
                            </a>
                            <a href="#" className="text-blue-600 hover:underline font-medium">
                                New Passenger? Create an Account
                            </a>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center gap-4 my-6">
                            <div className="flex-1 border-t border-gray-300" />
                            <span className="text-gray-500 text-sm font-medium">OR</span>
                            <div className="flex-1 border-t border-gray-300" />
                        </div>

                        {/* Google Sign In */}
                        <button
                            type="button"
                            className="w-full border border-gray-300 bg-white py-3 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-3 font-medium text-gray-700"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}