'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { MapPin, Clock, Calendar, Bus, Users, ArrowLeft, Star, Wifi, Snowflake, Armchair } from 'lucide-react';
import { Suspense } from 'react';

// Dummy bus data
const generateDummyBuses = (from: string, to: string) => {
    return [
        {
            id: 1,
            busNumber: 'SL-138',
            busName: 'Express Luxury',
            operator: 'SLTB',
            departureTime: '06:00 AM',
            arrivalTime: '10:30 AM',
            duration: '4h 30m',
            price: 'LKR 850',
            seatsAvailable: 23,
            totalSeats: 45,
            rating: 4.5,
            amenities: ['AC', 'WiFi', 'Reclining Seats'],
            type: 'AC Luxury',
        },
        {
            id: 2,
            busNumber: 'SL-245',
            busName: 'Super Express',
            operator: 'Private Line',
            departureTime: '08:15 AM',
            arrivalTime: '12:00 PM',
            duration: '3h 45m',
            price: 'LKR 1200',
            seatsAvailable: 12,
            totalSeats: 40,
            rating: 4.8,
            amenities: ['AC', 'WiFi', 'Reclining Seats'],
            type: 'Premium AC',
        },
        {
            id: 3,
            busNumber: 'SL-089',
            busName: 'Regular Service',
            operator: 'SLTB',
            departureTime: '09:30 AM',
            arrivalTime: '02:45 PM',
            duration: '5h 15m',
            price: 'LKR 450',
            seatsAvailable: 35,
            totalSeats: 55,
            rating: 4.0,
            amenities: ['Fan'],
            type: 'Non-AC',
        },
        {
            id: 4,
            busNumber: 'SL-312',
            busName: 'City Express',
            operator: 'Private Line',
            departureTime: '11:00 AM',
            arrivalTime: '03:15 PM',
            duration: '4h 15m',
            price: 'LKR 750',
            seatsAvailable: 18,
            totalSeats: 45,
            rating: 4.3,
            amenities: ['AC', 'Reclining Seats'],
            type: 'AC Standard',
        },
        {
            id: 5,
            busNumber: 'SL-456',
            busName: 'Night Rider',
            operator: 'Lanka Express',
            departureTime: '02:00 PM',
            arrivalTime: '06:45 PM',
            duration: '4h 45m',
            price: 'LKR 950',
            seatsAvailable: 8,
            totalSeats: 40,
            rating: 4.6,
            amenities: ['AC', 'WiFi', 'Reclining Seats'],
            type: 'AC Luxury',
        },
        {
            id: 6,
            busNumber: 'SL-578',
            busName: 'Budget Express',
            operator: 'SLTB',
            departureTime: '04:30 PM',
            arrivalTime: '09:30 PM',
            duration: '5h 00m',
            price: 'LKR 380',
            seatsAvailable: 42,
            totalSeats: 55,
            rating: 3.8,
            amenities: ['Fan'],
            type: 'Non-AC',
        },
    ];
};

function RoutesContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    
    const from = searchParams.get('from') || '';
    const to = searchParams.get('to') || '';
    const date = searchParams.get('date') || '';

    const buses = generateDummyBuses(from, to);

    const getAmenityIcon = (amenity: string) => {
        switch (amenity) {
            case 'AC':
                return <Snowflake className="w-4 h-4" />;
            case 'WiFi':
                return <Wifi className="w-4 h-4" />;
            case 'Reclining Seats':
                return <Armchair className="w-4 h-4" />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button 
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </button>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Available Bus Routes</h1>
                    
                    {/* Search Summary */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-wrap gap-4 items-center">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            <span className="font-semibold">{from}</span>
                        </div>
                        <div className="text-2xl">→</div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            <span className="font-semibold">{to}</span>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>{new Date(date).toLocaleDateString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {buses.length} Buses Found
                    </h2>
                    <p className="text-gray-600">Choose the best option for your journey</p>
                </div>

                {/* Bus Cards */}
                <div className="grid gap-6">
                    {buses.map((bus) => (
                        <div 
                            key={bus.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                        >
                            <div className="p-6">
                                <div className="flex flex-col lg:flex-row gap-6">
                                    {/* Left Section - Bus Info */}
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Bus className="w-6 h-6 text-blue-600" />
                                                    <h3 className="text-xl font-bold text-gray-800">
                                                        {bus.busName}
                                                    </h3>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                        bus.type.includes('Luxury') 
                                                            ? 'bg-purple-100 text-purple-700'
                                                            : bus.type.includes('Premium')
                                                            ? 'bg-blue-100 text-blue-700'
                                                            : bus.type.includes('AC')
                                                            ? 'bg-green-100 text-green-700'
                                                            : 'bg-gray-100 text-gray-700'
                                                    }`}>
                                                        {bus.type}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                                    <span className="font-medium">{bus.busNumber}</span>
                                                    <span>•</span>
                                                    <span>{bus.operator}</span>
                                                    <span>•</span>
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        <span className="font-semibold">{bus.rating}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Time Info */}
                                        <div className="flex items-center gap-6 mb-4">
                                            <div className="flex-1">
                                                <div className="text-sm text-gray-600 mb-1">Departure</div>
                                                <div className="text-2xl font-bold text-gray-800">
                                                    {bus.departureTime}
                                                </div>
                                                <div className="text-sm text-gray-600">{from}</div>
                                            </div>
                                            
                                            <div className="flex flex-col items-center">
                                                <Clock className="w-5 h-5 text-gray-400 mb-1" />
                                                <div className="text-sm font-semibold text-gray-600">
                                                    {bus.duration}
                                                </div>
                                                <div className="w-24 h-px bg-gray-300 mt-1"></div>
                                            </div>

                                            <div className="flex-1 text-right">
                                                <div className="text-sm text-gray-600 mb-1">Arrival</div>
                                                <div className="text-2xl font-bold text-gray-800">
                                                    {bus.arrivalTime}
                                                </div>
                                                <div className="text-sm text-gray-600">{to}</div>
                                            </div>
                                        </div>

                                        {/* Amenities */}
                                        <div className="flex flex-wrap gap-2">
                                            {bus.amenities.map((amenity) => (
                                                <span 
                                                    key={amenity}
                                                    className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm"
                                                >
                                                    {getAmenityIcon(amenity)}
                                                    {amenity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right Section - Booking Info */}
                                    <div className="lg:w-64 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 lg:pl-6">
                                        <div>
                                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                                {bus.price}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                                <Users className="w-4 h-4" />
                                                <span>
                                                    <span className={`font-semibold ${
                                                        bus.seatsAvailable < 10 ? 'text-red-600' : 'text-green-600'
                                                    }`}>
                                                        {bus.seatsAvailable}
                                                    </span>
                                                    {' '}seats available
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results Message (if needed in future) */}
                {buses.length === 0 && (
                    <div className="text-center py-16">
                        <Bus className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            No buses found
                        </h3>
                        <p className="text-gray-500">
                            Try adjusting your search criteria
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function RoutesPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading bus routes...</p>
                </div>
            </div>
        }>
            <RoutesContent />
        </Suspense>
    );
}
