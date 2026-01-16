'use client';
import { MapPin, Calendar, Search } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const sriLankaLocations = [
    'Colombo',
    'Kandy',
    'Galle',
    'Jaffna',
    'Negombo',
    'Trincomalee',
    'Batticaloa',
    'Matara',
    'Anuradhapura',
    'Polonnaruwa',
    'Badulla',
    'Nuwara Eliya',
    'Ella',
    'Ratnapura',
    'Kurunegala',
    'Gampaha',
    'Kalutara',
    'Hambantota',
    'Vavuniya',
    'Mannar',
    'Matale',
    'Ampara',
    'Puttalam',
    'Kegalle',
    'Monaragala',
];

export default function SearchBar() {
    const router = useRouter();
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');

    const handleSearch = () => {
        if (!from || !to || !date) {
            alert('Please select all fields');
            return;
        }
        
        // Navigate to results page with query parameters
        router.push(`/passenger/routes?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}`);
    };

    return (
        <div className="relative -mt-32 pb-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* FROM Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                FROM:
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none z-10" />
                                <select
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white cursor-pointer"
                                >
                                    <option value="">Select Start Location</option>
                                    {sriLankaLocations.map((location) => (
                                        <option key={`from-${location}`} value={location}>
                                            {location}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* TO Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                TO:
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none z-10" />
                                <select
                                    value={to}
                                    onChange={(e) => setTo(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none bg-white cursor-pointer"
                                >
                                    <option value="">Select End Location</option>
                                    {sriLankaLocations.map((location) => (
                                        <option key={`to-${location}`} value={location}>
                                            {location}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* DATE Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                DATE:
                            </label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                />
                            </div>
                        </div>

                        {/* Search Button */}
                        <div className="flex items-end">
                            <button 
                                onClick={handleSearch}
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 font-medium h-[52px]"
                            >
                                <Search className="w-5 h-5" />
                                SEARCH ROUTES
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}