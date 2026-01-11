import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import SearchBar from '../../components/SearchBar';
import Features from '../../components/Features';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function PassengerDashboard() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <HeroSection />
      <SearchBar />
      <Features />

      {/* Account Access Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Manage Your Account</h2>
          <p className="text-lg text-gray-600 mb-8">
            Access your profile, bookings, and account settings
          </p>
          <Link
            href="/account"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-medium text-lg"
          >
            Go to My Account
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}