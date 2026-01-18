import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Users, Award, Heart, Shield, Zap } from 'lucide-react';

export default function About() {
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
                        About <span className="text-yellow-300">GoBus</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Revolutionizing transportation in Badulla District with technology,
                        reliability, and a commitment to exceptional service.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Our <span className="text-blue-600">Mission</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                At GoBus, we&apos;re dedicated to transforming the way people travel in Badulla District.
                                Our mission is to provide safe, reliable, and affordable transportation solutions
                                that connect communities and empower journeys.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Through innovative technology and unwavering commitment to excellence,
                                we&apos;re building a transportation network that serves everyone, from daily commuters
                                to weekend adventurers.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8 shadow-lg">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
                                        <p className="text-gray-600">Happy Passengers</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <MapPin className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
                                        <p className="text-gray-600">Routes Served</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Clock className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
                                        <p className="text-gray-600">Service Available</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Award className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">5★</h3>
                                        <p className="text-gray-600">Average Rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-blue-600">Values</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
                            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety First</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Your safety is our top priority. Every journey with GoBus is protected
                                by rigorous safety standards and well-maintained vehicles.
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-lg transition-shadow">
                            <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Heart className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Care</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We treat every passenger like family. Our friendly staff and
                                personalized service make every trip memorable.
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
                            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We&apos;re constantly evolving with technology to provide you with
                                the best booking experience and real-time updates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Our <span className="text-blue-600">Story</span>
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    GoBus was born from a simple idea: transportation in Badulla District
                                    should be as beautiful and reliable as the landscapes we serve.
                                    Founded by local entrepreneurs with deep roots in the community,
                                    we&apos;ve grown from a small operation to a trusted transportation partner.
                                </p>
                                <p>
                                    Every route we serve tells a story of connection - families reuniting,
                                    students reaching their dreams, and travelers discovering the magic
                                    of our district. We&apos;re not just moving people; we&apos;re building bridges
                                    between communities.
                                </p>
                                <p>
                                    Today, GoBus stands as a testament to what happens when technology
                                    meets tradition, when innovation serves community, and when
                                    transportation becomes a force for good.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="relative">
                                <div className="bg-gradient-to-br from-blue-200 to-teal-200 rounded-2xl p-8 shadow-xl">
                                    <div className="bg-white rounded-xl p-6 shadow-lg">
                                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Why Choose GoBus?</h4>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                                <span className="text-gray-700">Modern, well-maintained fleet</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                                <span className="text-gray-700">Real-time tracking & updates</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                                <span className="text-gray-700">Competitive pricing</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                                <span className="text-gray-700">24/7 customer support</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                                <span className="text-gray-700">Easy online booking</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Meet Our <span className="text-blue-600">Team</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The passionate people behind GoBus
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <span className="text-4xl text-white font-bold">👨‍💼</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Chamath Lahiru</h3>
                            <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Visionary leader passionate about transforming transportation
                                in Badulla District through innovative technology.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <span className="text-4xl text-white font-bold">👩‍💻</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Operations Manager</h3>
                            <p className="text-blue-600 font-medium mb-3">Operations Director</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Ensures smooth operations and maintains our high standards
                                of service excellence across all routes.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                <span className="text-4xl text-white font-bold">👨‍🔧</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Team</h3>
                            <p className="text-blue-600 font-medium mb-3">Technology Experts</p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Building and maintaining the technology that powers your
                                seamless travel experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Experience GoBus?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                        Join thousands of satisfied passengers who trust GoBus for their daily commute
                        and special journeys throughout Badulla District.
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
                            Book a Ride
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}