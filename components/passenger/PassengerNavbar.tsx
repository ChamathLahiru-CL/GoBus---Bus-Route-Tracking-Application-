'use client';

import Link from 'next/link';
import { User, Settings, History, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PassengerNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Implement actual logout logic (clear tokens, etc.)
    router.push('/');
  };

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Mobile Menu Button & Logo */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              >
                {isSidebarOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>

              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">GoBus</span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/passenger" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Dashboard
              </Link>
              <Link href="/passenger#bookings" className="text-gray-700 hover:text-blue-600 font-medium transition">
                My Bookings
              </Link>
              <Link href="/passenger#profile" className="text-gray-700 hover:text-blue-600 font-medium transition">
                Profile
              </Link>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                <span>Welcome, John</span>
              </div>

              {/* Desktop Dropdown Menu */}
              <div className="hidden md:block relative group">
                <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">Account</span>
                </button>

                {/* Dropdown Content */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="/passenger#profile" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition">
                      <User className="w-4 h-4" />
                      Profile
                    </Link>
                    <Link href="/passenger#bookings" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition">
                      <History className="w-4 h-4" />
                      My Bookings
                    </Link>
                    <Link href="/passenger#settings" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition">
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                    <hr className="my-2 border-gray-200" />
                    <button 
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 hover:text-red-700 transition w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 md:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform">
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">GoBus</span>
              </div>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* User Info */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-600">Passenger</p>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-4 py-6">
              <nav className="space-y-2">
                <Link
                  href="/passenger"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <User className="w-5 h-5" />
                  Dashboard
                </Link>
                <Link
                  href="/passenger#bookings"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <History className="w-5 h-5" />
                  My Bookings
                </Link>
                <Link
                  href="/passenger#profile"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <User className="w-5 h-5" />
                  Profile
                </Link>
                <Link
                  href="/passenger#favorites"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Menu className="w-5 h-5" />
                  Favorite Routes
                </Link>
                <Link
                  href="/passenger#payment"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Settings className="w-5 h-5" />
                  Payment Methods
                </Link>
                <Link
                  href="/passenger#settings"
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Settings className="w-5 h-5" />
                  Settings
                </Link>
              </nav>
            </div>

            {/* Logout Button */}
            <div className="p-4 border-t border-gray-200">
              <button 
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition w-full text-left"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}