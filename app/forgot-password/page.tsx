'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Send } from 'lucide-react';
import { sendPasswordResetToken, validatePhoneNumber, formatPhoneNumber } from '../../utils/whatsapp';

export default function ForgotPassword() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        try {
            // Validate phone number
            const formattedPhone = formatPhoneNumber(formData.mobile);
            if (!validatePhoneNumber(formattedPhone)) {
                setMessage('Please enter a valid Sri Lankan mobile number (e.g., +94 XX XXX XXXX or 07XXXXXXXX)');
                setIsLoading(false);
                return;
            }

            // Generate a 6-digit token
            const token = Math.floor(100000 + Math.random() * 900000).toString();

            // Send token via WhatsApp
            const whatsappResponse = await sendPasswordResetToken(
                formattedPhone,
                token,
                formData.name
            );

            if (!whatsappResponse.success) {
                setMessage(whatsappResponse.error || 'Failed to send verification code');
                setIsLoading(false);
                return;
            }

            // Store token and user data securely
            // In production, use secure server-side storage with expiration
            localStorage.setItem('resetToken', token);
            localStorage.setItem('resetEmail', formData.email);
            localStorage.setItem('resetMobile', formattedPhone);
            localStorage.setItem('resetExpiry', (Date.now() + 10 * 60 * 1000).toString()); // 10 minutes

            setMessage(`✅ Verification code sent to WhatsApp: ${formattedPhone}`);

            // Redirect to reset password page after 3 seconds
            setTimeout(() => {
                router.push('/reset-password');
            }, 3000);

        } catch (error) {
            console.error('Password reset error:', error);
            setMessage('An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
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
                            <h2 className="text-4xl font-bold text-white mb-3">Reset Password</h2>
                            <p className="text-lg text-blue-100 font-semibold mb-2">
                                Secure Password Recovery
                            </p>
                            <p className="text-blue-50 text-sm leading-relaxed">
                                We&apos;ll send a verification code to your WhatsApp
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SECTION - FORGOT PASSWORD FORM */}
                    <div className="flex flex-col justify-center p-8 md:p-12">
                        {/* Back to Login */}
                        <button
                            onClick={() => router.push('/login')}
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Login
                        </button>

                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-bold text-lg">G</span>
                            </div>
                            <span className="text-xl font-semibold text-gray-900">GoBus</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password</h1>
                        <p className="text-gray-600 text-sm mb-8">
                            Enter your details to receive a verification code via WhatsApp
                        </p>

                        {/* Form */}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="you@example.com"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            {/* Mobile Input */}
                            <div>
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                                    WhatsApp Mobile Number
                                </label>
                                <input
                                    id="mobile"
                                    name="mobile"
                                    type="tel"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    placeholder="+94 XX XXX XXXX"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium mt-6 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Sending Code...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send Verification Code
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Message */}
                        {message && (
                            <div className={`mt-4 p-3 rounded-lg text-sm ${
                                message.includes('sent') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                            }`}>
                                {message}
                            </div>
                        )}

                        {/* Help Text */}
                        <p className="text-gray-500 text-xs mt-4 text-center">
                            Make sure your WhatsApp number is active and can receive messages
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}