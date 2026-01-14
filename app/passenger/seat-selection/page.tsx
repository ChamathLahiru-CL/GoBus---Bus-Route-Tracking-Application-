'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { MapPin, Clock, Calendar, Bus, ArrowLeft, CreditCard, User, Mail, Phone, CheckCircle2, Armchair } from 'lucide-react';
import { Suspense, useState } from 'react';
import PassengerNavbar from '../../../components/passenger/PassengerNavbar';

// Bus data (same as before)
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
            price: 1250,
            seatsAvailable: 23,
            totalSeats: 40,
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
            price: 850,
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
            price: 1400,
            seatsAvailable: 12,
            totalSeats: 40,
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
            price: 750,
            seatsAvailable: 25,
            totalSeats: 40,
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
            price: 1350,
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
            price: 800,
            seatsAvailable: 30,
            totalSeats: 40,
            rating: 4.3,
            amenities: ['AC', 'Reclining Seats'],
            type: 'Semi-Luxury',
        },
    ];
};

// Generate seat layout
const generateSeats = (totalSeats: number) => {
    const seats = [];
    const bookedSeats = [3, 7, 12, 15, 18, 23, 28, 31, 35]; // Random booked seats
    
    for (let i = 1; i <= totalSeats; i++) {
        seats.push({
            number: i,
            isBooked: bookedSeats.includes(i),
            isSelected: false,
        });
    }
    return seats;
};

function SeatSelectionContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    
    const busId = parseInt(searchParams.get('id') || '1');
    const from = searchParams.get('from') || '';
    const to = searchParams.get('to') || '';
    const date = searchParams.get('date') || '';

    const bus = getAllBuses().find(b => b.id === busId);
    const [seats, setSeats] = useState(generateSeats(bus?.totalSeats || 40));
    const [passengerName, setPassengerName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    if (!bus) {
        return <div>Bus not found</div>;
    }

    const selectedSeats = seats.filter(s => s.isSelected);
    const totalPrice = selectedSeats.length * bus.price;

    const toggleSeat = (seatNumber: number) => {
        setSeats(seats.map(seat => 
            seat.number === seatNumber && !seat.isBooked
                ? { ...seat, isSelected: !seat.isSelected }
                : seat
        ));
    };

    const handleProceedToPayment = () => {
        if (selectedSeats.length === 0) {
            alert('Please select at least one seat');
            return;
        }
        if (!passengerName || !email || !phone) {
            alert('Please fill in all passenger details');
            return;
        }
        alert('Proceeding to payment...');
        // Navigate to payment page or handle payment
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <PassengerNavbar />
            {/* Header */}
            <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <button 
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-3 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Bus Details
                    </button>
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Select Your Seat</h1>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                <span className="font-semibold">{bus.busName}</span>
                                <span>•</span>
                                <span>{bus.busNumber}</span>
                                <span>•</span>
                                <span>{from} → {to}</span>
                            </div>
                        </div>
                        <div className="hidden md:flex gap-8 text-right">
                            <div>
                                <div className="text-sm text-gray-600">Departure</div>
                                <div className="text-xl font-bold text-gray-800">{bus.departureTime}</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-600">Arrival</div>
                                <div className="text-xl font-bold text-gray-800">{bus.arrivalTime}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Seat Selection Area - 2 columns */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Seat Legend */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                            <div className="flex flex-wrap gap-6 justify-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-gray-100 border-2 border-gray-300 rounded flex items-center justify-center">
                                        <Armchair className="w-4 h-4 text-gray-600" />
                                    </div>
                                    <span className="text-sm text-gray-700">Available</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-blue-500 border-2 border-blue-600 rounded flex items-center justify-center">
                                        <Armchair className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-sm text-gray-700">Selected</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-red-500 border-2 border-red-600 rounded flex items-center justify-center">
                                        <Armchair className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-sm text-gray-700">Booked</span>
                                </div>
                            </div>
                        </div>

                        {/* Bus Layout */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                            <div className="mb-4 flex items-center justify-between">
                                <h2 className="text-lg font-bold text-gray-800">Bus Layout</h2>
                                <div className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                                    Driver
                                </div>
                            </div>
                            
                            {/* Seats Grid */}
                            <div className="bg-gradient-to-b from-gray-50 to-white p-4 rounded-lg border-2 border-gray-200">
                                <div className="grid grid-cols-4 gap-1.5">
                                    {seats.map((seat) => (
                                        <button
                                            key={seat.number}
                                            onClick={() => toggleSeat(seat.number)}
                                            disabled={seat.isBooked}
                                            className={`
                                                h-12 w-full rounded-lg border-2 flex flex-col items-center justify-center
                                                transition-all duration-200 font-semibold text-xs
                                                ${seat.isBooked 
                                                    ? 'bg-red-500 border-red-600 text-white cursor-not-allowed' 
                                                    : seat.isSelected 
                                                    ? 'bg-blue-500 border-blue-600 text-white shadow-lg scale-105' 
                                                    : 'bg-gray-100 border-gray-300 hover:bg-gray-200 hover:border-gray-400 cursor-pointer'
                                                }
                                            `}
                                        >
                                            <Armchair className={`w-3.5 h-3.5 mb-0.5 ${
                                                seat.isBooked || seat.isSelected ? 'text-white' : 'text-gray-600'
                                            }`} />
                                            <span className={seat.isBooked || seat.isSelected ? 'text-white' : 'text-gray-700'}>
                                                {seat.number}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Summary & Details - 1 column */}
                    <div className="space-y-6">
                        {/* Journey Summary */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 sticky top-24">
                            <h2 className="text-lg font-bold text-gray-800 mb-4">Journey Details</h2>
                            <div className="space-y-3 text-sm mb-6">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-green-600" />
                                    <span className="text-gray-600">From:</span>
                                    <span className="font-semibold text-gray-800">{from}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-red-600" />
                                    <span className="text-gray-600">To:</span>
                                    <span className="font-semibold text-gray-800">{to}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-blue-600" />
                                    <span className="text-gray-600">Date:</span>
                                    <span className="font-semibold text-gray-800">
                                        {new Date(date).toLocaleDateString('en-US', { 
                                            month: 'short', 
                                            day: 'numeric', 
                                            year: 'numeric' 
                                        })}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-purple-600" />
                                    <span className="text-gray-600">Time:</span>
                                    <span className="font-semibold text-gray-800">{bus.departureTime}</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-4 mb-4">
                                <h3 className="font-bold text-gray-800 mb-3">Selected Seats</h3>
                                {selectedSeats.length > 0 ? (
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {selectedSeats.map(seat => (
                                            <span key={seat.number} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                                                {seat.number}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500 text-sm">No seats selected</p>
                                )}
                            </div>

                            <div className="border-t border-gray-200 pt-4 space-y-2 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Price per seat</span>
                                    <span className="font-semibold text-gray-800">LKR {bus.price}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Number of seats</span>
                                    <span className="font-semibold text-gray-800">{selectedSeats.length}</span>
                                </div>
                                <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                                    <span className="text-gray-800">Total Amount</span>
                                    <span className="text-blue-600">LKR {totalPrice}</span>
                                </div>
                            </div>

                            {/* Passenger Details Form */}
                            <div className="border-t border-gray-200 pt-4">
                                <h3 className="font-bold text-gray-800 mb-3">Passenger Details</h3>
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                            <input
                                                type="text"
                                                value={passengerName}
                                                onChange={(e) => setPassengerName(e.target.value)}
                                                placeholder="Enter your name"
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="your@email.com"
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="+94 77 123 4567"
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Proceed Button */}
                            <button 
                                onClick={handleProceedToPayment}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 mt-6"
                            >
                                <CreditCard className="w-5 h-5" />
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SeatSelectionPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading seat selection...</p>
                </div>
            </div>
        }>
            <SeatSelectionContent />
        </Suspense>
    );
}
