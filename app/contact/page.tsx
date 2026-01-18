'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, HeadphonesIcon, CheckCircle } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitted(true);
        setIsSubmitting(false);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
                    <p className="text-gray-600 mb-4">Thank you for contacting GoBus. We&apos;ll get back to you soon!</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 via-teal-500 to-blue-800 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0">
                    <Image
                        src="/login/sign/Gemini_Generated_Image_1mifoi1mifoi1mif (1).png"
                        alt="Background"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Contact <span className="text-yellow-300">GoBus</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        We&apos;re here to help! Reach out to us for any questions,
                        support, or feedback about your GoBus experience.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
                            <p className="text-gray-600 mb-3">Call us for immediate assistance</p>
                            <p className="text-blue-600 font-semibold">+94 55 123 4567</p>
                            <p className="text-sm text-gray-500 mt-1">24/7 Available</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
                            <p className="text-gray-600 mb-3">Send us your queries via email</p>
                            <p className="text-blue-600 font-semibold">support@gobus.lk</p>
                            <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
                            <p className="text-gray-600 mb-3">Located in the heart of Badulla</p>
                            <p className="text-blue-600 font-semibold">Main Street, Badulla</p>
                            <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8AM-6PM</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Send us a <span className="text-blue-600">Message</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Have a question about our services? Need help with booking?
                                Want to provide feedback? We&apos;d love to hear from you!
                            </p>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="booking">Booking Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                                        placeholder="Tell us how we can help you..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Additional Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <HeadphonesIcon className="w-6 h-6 text-blue-600" />
                                    Customer Support
                                </h3>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                                    <p className="text-gray-600 mb-4">
                                        Our dedicated support team is here to help you with any questions
                                        or concerns about your GoBus experience.
                                    </p>
                                    <div className="space-y-2">
                                        <p className="flex items-center gap-2 text-sm">
                                            <Clock className="w-4 h-4 text-blue-600" />
                                            <span>Monday - Friday: 8:00 AM - 6:00 PM</span>
                                        </p>
                                        <p className="flex items-center gap-2 text-sm">
                                            <Clock className="w-4 h-4 text-blue-600" />
                                            <span>Saturday: 9:00 AM - 4:00 PM</span>
                                        </p>
                                        <p className="flex items-center gap-2 text-sm">
                                            <Clock className="w-4 h-4 text-blue-600" />
                                            <span>Sunday: Emergency support only</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <MessageSquare className="w-6 h-6 text-teal-600" />
                                    Quick Responses
                                </h3>
                                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
                                    <p className="text-gray-600 mb-4">
                                        We strive to respond to all inquiries within 24 hours.
                                        For urgent matters, please call our hotline.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-teal-600">2hrs</div>
                                            <div className="text-sm text-gray-600">Average Phone Response</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-teal-600">24hrs</div>
                                            <div className="text-sm text-gray-600">Email Response</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition">
                                        <span className="text-sm font-bold">f</span>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition">
                                        <span className="text-sm font-bold">t</span>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition">
                                        <span className="text-sm font-bold">i</span>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition">
                                        <span className="text-sm font-bold">y</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked <span className="text-blue-600">Questions</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Quick answers to common questions
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                How do I book a ticket?
                            </h3>
                            <p className="text-gray-600">
                                You can book tickets easily through our website or mobile app.
                                Simply select your route, date, and preferred time.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                What if I need to cancel my booking?
                            </h3>
                            <p className="text-gray-600">
                                Cancellations can be made up to 2 hours before departure.
                                Refunds are processed within 3-5 business days.
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Are pets allowed on buses?
                            </h3>
                            <p className="text-gray-600">
                                Small pets in carriers are welcome on most routes.
                                Please contact us in advance for special arrangements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Experience the GoBus difference. Safe, reliable, and comfortable
                        transportation throughout Badulla District.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/signup"
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Create Account
                        </Link>
                        <Link
                            href="/"
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}