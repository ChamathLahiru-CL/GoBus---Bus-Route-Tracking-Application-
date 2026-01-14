'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { MapPin, Clock, Calendar, Bus, ArrowLeft, Star, Wifi, Snowflake, Armchair, CreditCard, User, Mail, Phone, Tv, Usb } from 'lucide-react';
import { Suspense } from 'react';
import PassengerNavbar from '../../../components/passenger/PassengerNavbar';

// Bus data (same as routes page)
const getAllBuses = () => {
    return [
        {
            id: 1,
            busNumber: 'SL-138',
            busName: 'Express Luxury',
            operator: 'SLTB',
            departureTime: '06:00 AM',
            arrivalTime: '10:30 AM',
            duration: '4h 30m',
            price: 'LKR 1250',
            seatsAvailable: 23,
            totalSeats: 45,
            rating: 4.5,
            amenities: ['AC', 'WiFi', 'Reclining Seats', 'Entertainment'],
            type: 'Luxury',
        },
        {
            id: 2,
            busNumber: 'SL-245',
            busName: 'Royal Express',
            operator: 'Private Line',
            departureTime: '08:15 AM',
            arrivalTime: '12:00 PM',
            duration: '3h 45m',
            price: 'LKR 850',
            seatsAvailable: 18,
            totalSeats: 40,
            rating: 4.2,
            amenities: ['AC', 'Reclining Seats'],
            type: 'Semi-Luxury',
        },
        {
            id: 3,
            busNumber: 'SL-312',
            busName: 'Platinum Luxury',
            operator: 'Lanka Express',
            departureTime: '09:30 AM',
            arrivalTime: '01:45 PM',
            duration: '4h 15m',
            price: 'LKR 1400',
            seatsAvailable: 12,
            totalSeats: 35,
            rating: 4.8,
            amenities: ['AC', 'WiFi', 'Reclining Seats', 'Entertainment', 'USB Charging'],
            type: 'Luxury',
        },
        {
            id: 4,
            busNumber: 'SL-456',
            busName: 'Comfort Express',
            operator: 'SLTB',
            departureTime: '11:00 AM',
            arrivalTime: '03:30 PM',
            duration: '4h 30m',
            price: 'LKR 750',
            seatsAvailable: 25,
            totalSeats: 45,
            rating: 4.0,
            amenities: ['AC', 'Reclining Seats'],
            type: 'Semi-Luxury',
        },
        {
            id: 5,
            busNumber: 'SL-578',
            busName: 'Premium Luxury',
            operator: 'Private Line',
            departureTime: '02:00 PM',
            arrivalTime: '06:15 PM',
            duration: '4h 15m',
            price: 'LKR 1350',
            seatsAvailable: 8,
            totalSeats: 40,
            rating: 4.7,
            amenities: ['AC', 'WiFi', 'Reclining Seats', 'Entertainment'],
            type: 'Luxury',
        },
        {
            id: 6,
            busNumber: 'SL-689',
            busName: 'Swift Semi-Luxury',
            operator: 'Lanka Express',
            departureTime: '04:30 PM',
            arrivalTime: '08:45 PM',
            duration: '4h 15m',
            price: 'LKR 800',
            seatsAvailable: 30,
            totalSeats: 45,
            rating: 4.3,
            amenities: ['AC', 'Reclining Seats'],
            type: 'Semi-Luxury',
        },
    ];
};

function BusDetailsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    
    const busId = parseInt(searchParams.get('id') || '1');
    const from = searchParams.get('from') || '';
    const to = searchParams.get('to') || '';
    const date = searchParams.get('date') || '';

    const bus = getAllBuses().find(b => b.id === busId);

    if (!bus) {
        return <div>Bus not found</div>;
    }

    const getAmenityIcon = (amenity: string) => {
        switch (amenity) {
            case 'AC':
                return <Snowflake className="w-5 h-5" />;
            case 'WiFi':
                return <Wifi className="w-5 h-5" />;
            case 'Reclining Seats':
                return <Armchair className="w-5 h-5" />;
            case 'Entertainment':
                return <Tv className="w-5 h-5" />;
            case 'USB Charging':
                return <Usb className="w-5 h-5" />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <PassengerNavbar />
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 shadow-lg">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button 
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Routes
                    </button>
                    <h1 className="text-3xl md:text-4xl font-bold">Bus Details</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid gap-6">
                    {/* Bus Information Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-200">
                            <div className="flex items-center gap-4">
                                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-xl">
                                    <Bus className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2 className="text-3xl font-bold text-gray-800">{bus.busName}</h2>
                                        <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                                            bus.type === 'Luxury' 
                                                ? 'bg-purple-100 text-purple-700'
                                                : 'bg-blue-100 text-blue-700'
                                        }`}>
                                            {bus.type}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-600 font-medium">{bus.operator}</span>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            <span className="font-semibold text-gray-700">{bus.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <div className="text-2xl font-bold text-purple-600">{bus.price}</div>
                                {bus.type === 'Luxury' ? (
                                    <button 
                                        onClick={() => router.push(`/passenger/seat-selection?id=${bus.id}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}`)}
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-bold text-base shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 whitespace-nowrap"
                                    >
                                        <CreditCard className="w-5 h-5" />
                                        Book Seat Now
                                    </button>
                                ) : (
                                    <div className="bg-gray-200 text-gray-500 py-4 px-8 rounded-xl text-center font-bold cursor-not-allowed text-base">
                                        Booking Unavailable
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Journey Details Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            {/* Bus Number */}
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-5 rounded-xl">
                                <div className="text-sm text-gray-600 mb-1 font-medium">Bus Number</div>
                                <div className="text-2xl font-bold text-gray-800">{bus.busNumber}</div>
                            </div>

                            {/* Duration */}
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-5 rounded-xl">
                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1 font-medium">
                                    <Clock className="w-4 h-4" />
                                    Total Journey Time
                                </div>
                                <div className="text-2xl font-bold text-gray-800">{bus.duration}</div>
                            </div>

                            {/* Departure */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl">
                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1 font-medium">
                                    <MapPin className="w-4 h-4" />
                                    Departure Location
                                </div>
                                <div className="text-xl font-bold text-gray-800">{from}</div>
                                <div className="text-sm text-gray-600 mt-1">{bus.departureTime}</div>
                            </div>

                            {/* Destination */}
                            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-5 rounded-xl">
                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1 font-medium">
                                    <MapPin className="w-4 h-4" />
                                    Destination
                                </div>
                                <div className="text-xl font-bold text-gray-800">{to}</div>
                                <div className="text-sm text-gray-600 mt-1">{bus.arrivalTime}</div>
                            </div>

                            {/* Travel Date */}
                            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-5 rounded-xl">
                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1 font-medium">
                                    <Calendar className="w-4 h-4" />
                                    Travel Date
                                </div>
                                <div className="text-lg font-bold text-gray-800">
                                    {new Date(date).toLocaleDateString('en-US', { 
                                        weekday: 'short', 
                                        year: 'numeric', 
                                        month: 'short', 
                                        day: 'numeric' 
                                    })}
                                </div>
                            </div>

                            {/* Ticket Price */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl">
                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1 font-medium">
                                    <CreditCard className="w-4 h-4" />
                                    Ticket Price
                                </div>
                                <div className="text-3xl font-bold text-purple-600">{bus.price}</div>
                                <div className="text-xs text-gray-500 mt-1">Per person</div>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="mb-6 pb-6 border-b border-gray-200">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Bus Amenities</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {bus.amenities.map((amenity) => (
                                    <div 
                                        key={amenity}
                                        className="flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-100"
                                    >
                                        {getAmenityIcon(amenity)}
                                        <span className="font-medium text-sm">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Seat Availability */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl mb-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-gray-600 mb-1">Seat Availability</div>
                                    <div className="text-2xl font-bold text-gray-800">
                                        <span className={bus.seatsAvailable < 10 ? 'text-red-600' : 'text-green-600'}>
                                            {bus.seatsAvailable}
                                        </span>
                                        <span className="text-gray-400"> / {bus.totalSeats}</span> seats available
                                    </div>
                                </div>
                                {bus.seatsAvailable < 10 && (
                                    <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-semibold text-sm">
                                        Filling Fast!
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Book Seat Button */}
                        {bus.type === 'Luxury' ? (
                            <button 
                                onClick={() => router.push(`/passenger/seat-selection?id=${bus.id}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date}`)}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                                <CreditCard className="w-6 h-6" />
                                Book Seat Now - {bus.price}
                            </button>
                        ) : (
                            <div className="w-full bg-gray-200 text-gray-500 py-4 px-8 rounded-xl text-center font-bold text-lg cursor-not-allowed">
                                Booking Unavailable for Semi-Luxury Buses
                            </div>
                        )}
                    </div>

                    {/* Additional Information */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Important Information</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>Please arrive at the departure location at least 15 minutes before departure time</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>Carry a valid ID proof for verification</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>Luggage allowance: 20kg per passenger</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                <span>Cancellation allowed up to 2 hours before departure</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function BusDetailsPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading bus details...</p>
                </div>
            </div>
        }>
            <BusDetailsContent />
        </Suspense>
    );
}
