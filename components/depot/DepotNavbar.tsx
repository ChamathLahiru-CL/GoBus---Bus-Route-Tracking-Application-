'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Bus, Route, Calendar, Users, Menu, X, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DepotNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Implement actual logout logic (clear tokens, etc.)
    router.push('/');
  };

  const navItems = [
    { href: '/depot', label: 'Dashboard', icon: Bus },
    { href: '/depot/bus-management', label: 'Bus Management', icon: Bus },
    { href: '/depot/route-management', label: 'Route Management', icon: Route },
    { href: '/depot/timetable', label: 'Timetable', icon: Calendar },
    { href: '/depot/bookings', label: 'Bookings', icon: Users },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-lg shadow-lg border-b border-white/50 sticky top-0 z-50">
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

              <Link href="/depot" className="flex items-center gap-3">
                <Image
                  src="/logo/logo.png"
                  alt="GoBus Logo"
                  width={60}
                  height={60}
                  className="rounded-full flex-shrink-0"
                />
                <span className="text-xl font-semibold text-gray-900">GoBus</span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive(item.href)
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white/70 hover:shadow-md'
                      }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                <span>Welcome, Admin</span>
              </div>

              {/* Desktop Dropdown Menu */}
              <div className="hidden md:block relative group">
                <button className="flex items-center gap-2 bg-white/70 hover:bg-white/90 px-4 py-2 rounded-xl transition shadow-md">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">A</span>
                  </div>
                  <span className="text-gray-700 font-medium">Admin</span>
                </button>

                {/* Dropdown Content */}
                <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-lg rounded-xl shadow-xl border border-white/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="/depot/account" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-lg mx-2">
                      <Settings className="w-4 h-4" />
                      My Account
                    </Link>
                    <Link href="/depot#settings" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition rounded-lg mx-2">
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                    <hr className="my-2 border-gray-200" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 hover:text-red-700 transition w-full text-left rounded-lg mx-2"
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
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-80 bg-white/95 backdrop-blur-lg shadow-2xl border-r border-white/50">
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo/logo.png"
                    alt="GoBus Logo"
                    width={60}
                    height={60}
                    className="rounded-full flex-shrink-0"
                  />
                  <span className="text-xl font-semibold text-gray-900">GoBus</span>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Sidebar Navigation */}
              <div className="flex-1 px-6 py-8">
                <nav className="space-y-2">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive(item.href)
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-white/70 hover:shadow-md'
                          }`}
                      >
                        <Icon size={20} />
                        {item.label}
                      </Link>
                    );
                  })}
                  <Link
                    href="/depot/account"
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive('/depot/account')
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white/70 hover:shadow-md'
                      }`}
                  >
                    <Settings size={20} />
                    My Account
                  </Link>
                </nav>
              </div>

              {/* Sidebar Footer */}
              <div className="border-t border-gray-200 p-6">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 hover:text-red-700 transition w-full text-left rounded-lg"
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}