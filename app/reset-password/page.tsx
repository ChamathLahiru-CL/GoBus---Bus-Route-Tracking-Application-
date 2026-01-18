'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Eye, EyeOff, CheckCircle } from 'lucide-react';

export default function ResetPassword() {
    const [token, setToken] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check if user came from forgot password page and token hasn't expired
        const storedToken = localStorage.getItem('resetToken');
        const expiryTime = localStorage.getItem('resetExpiry');

        if (!storedToken) {
            router.push('/forgot-password');
            return;
        }

        if (expiryTime && Date.now() > parseInt(expiryTime)) {
            // Token expired
            localStorage.removeItem('resetToken');
            localStorage.removeItem('resetEmail');
            localStorage.removeItem('resetMobile');
            localStorage.removeItem('resetExpiry');
            setMessage('Verification code has expired. Please request a new one.');
            setTimeout(() => {
                router.push('/forgot-password');
            }, 3000);
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        // Validate token format
        if (token.length !== 6 || !/^\d{6}$/.test(token)) {
            setMessage('Please enter a valid 6-digit verification code');
            setIsLoading(false);
            return;
        }

        // Validate passwords match
        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match');
            setIsLoading(false);
            return;
        }

        // Validate password strength
        if (newPassword.length < 8) {
            setMessage('Password must be at least 8 characters long');
            setIsLoading(false);
            return;
        }

        // Check if token has expired
        const expiryTime = localStorage.getItem('resetExpiry');
        if (expiryTime && Date.now() > parseInt(expiryTime)) {
            setMessage('Verification code has expired. Please request a new one.');
            setIsLoading(false);
            return;
        }

        try {
            // Get stored token
            const storedToken = localStorage.getItem('resetToken');

            // Verify token
            if (token !== storedToken) {
                setMessage('Invalid verification code');
                setIsLoading(false);
                return;
            }

            // TODO: Update password in database
            // This should be an API call to your backend
            console.log('Password reset successful for:', localStorage.getItem('resetEmail'));

            // Clear stored data
            localStorage.removeItem('resetToken');
            localStorage.removeItem('resetEmail');
            localStorage.removeItem('resetMobile');
            localStorage.removeItem('resetExpiry');

            setIsSuccess(true);
            setMessage('Password reset successful! Redirecting to login...');

            // Redirect to login after 3 seconds
            setTimeout(() => {
                router.push('/login');
            }, 3000);

        } catch (error) {
            console.error('Password reset error:', error);
            setMessage('Failed to reset password. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-teal-300 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Password Reset Successful!</h2>
                    <p className="text-gray-600 mb-4">{message}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        );
    }

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
                            <h2 className="text-4xl font-bold text-white mb-3">New Password</h2>
                            <p className="text-lg text-blue-100 font-semibold mb-2">
                                Secure Your Account
                            </p>
                            <p className="text-blue-50 text-sm leading-relaxed">
                                Enter your verification code and create a new password
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SECTION - RESET PASSWORD FORM */}
                    <div className="flex flex-col justify-center p-8 md:p-12">
                        {/* Back to Forgot Password */}
                        <button
                            onClick={() => router.push('/forgot-password')}
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </button>

                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-bold text-lg">G</span>
                            </div>
                            <span className="text-xl font-semibold text-gray-900">GoBus</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
                        <p className="text-gray-600 text-sm mb-8">
                            Enter the verification code sent to your WhatsApp and create a new password
                        </p>

                        {/* Form */}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Token Input */}
                            <div>
                                <label htmlFor="token" className="block text-sm font-medium text-gray-700 mb-2">
                                    Verification Code
                                </label>
                                <input
                                    id="token"
                                    type="text"
                                    value={token}
                                    onChange={(e) => setToken(e.target.value)}
                                    placeholder="Enter 6-digit code"
                                    maxLength={6}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-center text-lg font-mono tracking-widest"
                                />
                            </div>

                            {/* New Password Input */}
                            <div>
                                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                    New Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="newPassword"
                                        type={showPassword ? 'text' : 'password'}
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="Enter new password"
                                        required
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

                            {/* Confirm Password Input */}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                    Confirm New Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm new password"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition pr-12"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
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
                                        Resetting Password...
                                    </>
                                ) : (
                                    'Reset Password'
                                )}
                            </button>
                        </form>

                        {/* Message */}
                        {message && (
                            <div className={`mt-4 p-3 rounded-lg text-sm ${
                                message.includes('successful') || message.includes('Redirecting') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                            }`}>
                                {message}
                            </div>
                        )}

                        {/* Password Requirements */}
                        <div className="mt-4 text-xs text-gray-500">
                            <p className="font-medium mb-1">Password requirements:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>At least 8 characters long</li>
                                <li>Both passwords must match</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}