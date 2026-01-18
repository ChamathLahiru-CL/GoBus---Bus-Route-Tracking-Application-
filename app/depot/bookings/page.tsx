'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Users, Bus, MapPin, Filter, Download } from 'lucide-react';
import DepotNavbar from '../../../components/depot/DepotNavbar';
import DepotFooter from '../../../components/depot/DepotFooter';

interface Booking {
    id: number;
    bookingRef: string;
    passengerName: string;
    passengerContact: string;
    route: string;
    busNumber: string;
    departureTime: string;
    date: string;
    seatNumbers: string[];
    totalSeats: number;
    amount: number;
    status: 'confirmed' | 'cancelled' | 'completed';
}

export default function BookingsOverview() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [filterRoute, setFilterRoute] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');

    const [bookings] = useState<Booking[]>([
        {
            id: 1,
            bookingRef: 'BK-2026-001',
            passengerName: 'Nimal Perera',
            passengerContact: '0771234567',
            route: 'Route 15',
            busNumber: 'B-234',
            departureTime: '08:00 AM',
            date: '2026-01-19',
            seatNumbers: ['A12', 'A13'],
            totalSeats: 2,
            amount: 1200,
            status: 'confirmed'
        },
        {
            id: 2,
            bookingRef: 'BK-2026-002',
            passengerName: 'Kamal Silva',
            passengerContact: '0772345678',
            route: 'Route 8',
            busNumber: 'B-112',
            departureTime: '09:00 AM',
            date: '2026-01-19',
            seatNumbers: ['B5'],
            totalSeats: 1,
            amount: 800,
            status: 'confirmed'
        },
        {
            id: 3,
            bookingRef: 'BK-2026-003',
            passengerName: 'Sunil Fernando',
            passengerContact: '0773456789',
            route: 'Route 15',
            busNumber: 'B-234',
            departureTime: '08:00 AM',
            date: '2026-01-19',
            seatNumbers: ['C10', 'C11', 'C12'],
            totalSeats: 3,
            amount: 1800,
            status: 'confirmed'
        },
        {
            id: 4,
            bookingRef: 'BK-2026-004',
            passengerName: 'Priya Jayawardena',
            passengerContact: '0774567890',
            route: 'Route 3',
            busNumber: 'B-456',
            departureTime: '04:00 AM',
            date: '2026-01-19',
            seatNumbers: ['D8'],
            totalSeats: 1,
            amount: 950,
            status: 'completed'
        },
        {
            id: 5,
            bookingRef: 'BK-2026-005',
            passengerName: 'Rajesh Kumar',
            passengerContact: '0775678901',
            route: 'Route 8',
            busNumber: 'B-334',
            departureTime: '09:00 AM',
            date: '2026-01-19',
            seatNumbers: ['A1', 'A2'],
            totalSeats: 2,
            amount: 1600,
            status: 'cancelled'
        }
    ]);

    const filteredBookings = bookings.filter(booking => {
        const matchRoute = filterRoute === 'all' || booking.route === filterRoute;
        const matchStatus = filterStatus === 'all' || booking.status === filterStatus;
        const matchDate = booking.date === selectedDate;
        return matchRoute && matchStatus && matchDate;
    });

    const stats = {
        totalBookings: filteredBookings.length,
        confirmedBookings: filteredBookings.filter(b => b.status === 'confirmed').length,
        totalSeatsBooked: filteredBookings.reduce((sum, b) => sum + b.totalSeats, 0),
        totalRevenue: filteredBookings.reduce((sum, b) => b.status !== 'cancelled' ? sum + b.amount : sum, 0)
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'confirmed':
                return 'bg-green-100 text-green-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            case 'completed':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
            <DepotNavbar />

            <div className="flex-1">
                {/* Header */}
                <header className="bg-white shadow-md sticky top-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Link href="/depot">
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                                        <ArrowLeft size={24} />
                                    </button>
                                </Link>
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900">Seat Bookings</h1>
                                    <p className="text-gray-600 mt-1">Monitor and manage passenger bookings</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2">
                                <Download size={20} />
                                Export Report
                            </button>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Filters */}
                    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Filter size={20} className="text-gray-600" />
                            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                                <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
                                    <Calendar size={20} className="text-gray-600" />
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="outline-none flex-1 text-gray-900 font-medium cursor-pointer"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Route</label>
                                <select
                                    value={filterRoute}
                                    onChange={(e) => setFilterRoute(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900 font-medium cursor-pointer hover:bg-gray-50 transition"
                                >
                                    <option value="all">All Routes</option>
                                    <option value="Route 15">Route 15</option>
                                    <option value="Route 8">Route 8</option>
                                    <option value="Route 3">Route 3</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                <select
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900 font-medium cursor-pointer hover:bg-gray-50 transition"
                                >
                                    <option value="all">All Status</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="completed">Completed</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Total Bookings</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-1">{stats.totalBookings}</p>
                                </div>
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <Calendar className="text-blue-600" size={24} />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Confirmed</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-1">{stats.confirmedBookings}</p>
                                </div>
                                <div className="bg-green-100 p-3 rounded-lg">
                                    <Users className="text-green-600" size={24} />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Seats Booked</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-1">{stats.totalSeatsBooked}</p>
                                </div>
                                <div className="bg-purple-100 p-3 rounded-lg">
                                    <Bus className="text-purple-600" size={24} />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm">Revenue</p>
                                    <p className="text-3xl font-bold text-gray-900 mt-1">Rs. {stats.totalRevenue}</p>
                                </div>
                                <div className="bg-orange-100 p-3 rounded-lg">
                                    <span className="text-orange-600 text-2xl font-bold">₨</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bookings List */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Booking Ref</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Passenger</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Route & Bus</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Time</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Seats</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Amount</th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {filteredBookings.length === 0 ? (
                                        <tr>
                                            <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                                                No bookings found for the selected filters
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredBookings.map((booking) => (
                                            <tr key={booking.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4">
                                                    <span className="font-semibold text-blue-600">{booking.bookingRef}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div>
                                                        <p className="font-semibold text-gray-900">{booking.passengerName}</p>
                                                        <p className="text-sm text-gray-500">{booking.passengerContact}</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div>
                                                        <p className="font-semibold text-gray-900">{booking.route}</p>
                                                        <p className="text-sm text-gray-500">Bus: {booking.busNumber}</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-gray-900">{booking.departureTime}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div>
                                                        <p className="font-semibold text-gray-900">{booking.totalSeats} seat(s)</p>
                                                        <p className="text-sm text-gray-500">{booking.seatNumbers.join(', ')}</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="font-semibold text-gray-900">Rs. {booking.amount}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                                                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>

            <DepotFooter />
        </div>
    );
}
