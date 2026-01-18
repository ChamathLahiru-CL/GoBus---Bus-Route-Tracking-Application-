'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, MapPin, Bus, Clock, Edit, Trash2 } from 'lucide-react';
import DepotNavbar from '../../../components/depot/DepotNavbar';
import DepotFooter from '../../../components/depot/DepotFooter';

interface RouteAssignment {
    id: number;
    routeNumber: string;
    routeName: string;
    startPoint: string;
    endPoint: string;
    distance: string;
    assignedBuses: {
        busNumber: string;
        departureTime: string;
        driverName: string;
    }[];
    totalStops: number;
    activeStatus: boolean;
}

export default function RouteManagement() {
    const [routes, setRoutes] = useState<RouteAssignment[]>([
        {
            id: 1,
            routeNumber: 'Route 15',
            routeName: 'Colombo - Galle',
            startPoint: 'Colombo Fort',
            endPoint: 'Galle Bus Stand',
            distance: '116 km',
            totalStops: 25,
            activeStatus: true,
            assignedBuses: [
                { busNumber: 'B-234', departureTime: '06:00 AM', driverName: 'John Silva' },
                { busNumber: 'B-445', departureTime: '08:30 AM', driverName: 'Pradeep Kumar' },
                { busNumber: 'B-667', departureTime: '11:00 AM', driverName: 'Asanka Perera' }
            ]
        },
        {
            id: 2,
            routeNumber: 'Route 8',
            routeName: 'Kandy - Colombo',
            startPoint: 'Kandy City Center',
            endPoint: 'Colombo Pettah',
            distance: '115 km',
            totalStops: 22,
            activeStatus: true,
            assignedBuses: [
                { busNumber: 'B-112', departureTime: '05:30 AM', driverName: 'Michael Perera' },
                { busNumber: 'B-334', departureTime: '09:00 AM', driverName: 'Nimal Fernando' }
            ]
        },
        {
            id: 3,
            routeNumber: 'Route 3',
            routeName: 'Matara - Colombo',
            startPoint: 'Matara Bus Stand',
            endPoint: 'Colombo Maharagama',
            distance: '160 km',
            totalStops: 30,
            activeStatus: true,
            assignedBuses: [
                { busNumber: 'B-456', departureTime: '04:00 AM', driverName: 'Kasun Fernando' }
            ]
        }
    ]);

    const [showAddBusModal, setShowAddBusModal] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState<number | null>(null);
    const [newBusAssignment, setNewBusAssignment] = useState({
        busNumber: '',
        departureTime: '',
        driverName: ''
    });

    const handleAddBusToRoute = () => {
        if (selectedRoute && newBusAssignment.busNumber && newBusAssignment.departureTime) {
            setRoutes(routes.map(route => {
                if (route.id === selectedRoute) {
                    return {
                        ...route,
                        assignedBuses: [...route.assignedBuses, newBusAssignment]
                    };
                }
                return route;
            }));
            setShowAddBusModal(false);
            setNewBusAssignment({ busNumber: '', departureTime: '', driverName: '' });
            setSelectedRoute(null);
        }
    };

    const handleRemoveBus = (routeId: number, busNumber: string) => {
        if (confirm('Remove this bus from the route?')) {
            setRoutes(routes.map(route => {
                if (route.id === routeId) {
                    return {
                        ...route,
                        assignedBuses: route.assignedBuses.filter(bus => bus.busNumber !== busNumber)
                    };
                }
                return route;
            }));
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
                                    <h1 className="text-3xl font-bold text-gray-900">Route Management</h1>
                                    <p className="text-gray-600 mt-1">Assign buses to routes and manage schedules</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="space-y-6">
                        {routes.map((route) => (
                            <div key={route.id} className="bg-white rounded-xl shadow-lg p-6">
                                {/* Route Header */}
                                <div className="flex items-center justify-between mb-6 pb-4 border-b">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg">
                                            <MapPin className="text-white" size={32} />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900">{route.routeNumber}</h2>
                                            <p className="text-gray-600">{route.routeName}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setSelectedRoute(route.id);
                                            setShowAddBusModal(true);
                                        }}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                                    >
                                        <Plus size={20} />
                                        Assign Bus
                                    </button>
                                </div>

                                {/* Route Details */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-600">Start Point</p>
                                        <p className="font-semibold text-gray-900">{route.startPoint}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-600">End Point</p>
                                        <p className="font-semibold text-gray-900">{route.endPoint}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-600">Distance</p>
                                        <p className="font-semibold text-gray-900">{route.distance}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-600">Total Stops</p>
                                        <p className="font-semibold text-gray-900">{route.totalStops} stops</p>
                                    </div>
                                </div>

                                {/* Assigned Buses */}
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900 mb-4">
                                        Assigned Buses ({route.assignedBuses.length})
                                    </h3>
                                    <div className="space-y-3">
                                        {route.assignedBuses.length === 0 ? (
                                            <div className="text-center py-8 text-gray-500">
                                                No buses assigned to this route yet
                                            </div>
                                        ) : (
                                            route.assignedBuses.map((bus, index) => (
                                                <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                                                    <div className="flex items-center gap-4 flex-1">
                                                        <div className="bg-blue-200 p-3 rounded-lg">
                                                            <Bus className="text-blue-700" size={24} />
                                                        </div>
                                                        <div className="grid grid-cols-3 gap-6 flex-1">
                                                            <div>
                                                                <p className="text-sm text-gray-600">Bus Number</p>
                                                                <p className="font-bold text-gray-900">{bus.busNumber}</p>
                                                            </div>
                                                            <div>
                                                                <p className="text-sm text-gray-600">Departure Time</p>
                                                                <p className="font-semibold text-gray-900 flex items-center gap-1">
                                                                    <Clock size={16} className="text-blue-600" />
                                                                    {bus.departureTime}
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p className="text-sm text-gray-600">Driver</p>
                                                                <p className="font-semibold text-gray-900">{bus.driverName}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => handleRemoveBus(route.id, bus.busNumber)}
                                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                                    >
                                                        <Trash2 size={20} />
                                                    </button>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                {/* Add Bus Assignment Modal */}
                {showAddBusModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Assign Bus to Route</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Bus Number</label>
                                    <input
                                        type="text"
                                        value={newBusAssignment.busNumber}
                                        onChange={(e) => setNewBusAssignment({ ...newBusAssignment, busNumber: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="B-XXX"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Departure Time</label>
                                    <input
                                        type="time"
                                        value={newBusAssignment.departureTime}
                                        onChange={(e) => setNewBusAssignment({ ...newBusAssignment, departureTime: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Driver Name</label>
                                    <input
                                        type="text"
                                        value={newBusAssignment.driverName}
                                        onChange={(e) => setNewBusAssignment({ ...newBusAssignment, driverName: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Driver name"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-4 mt-6">
                                <button
                                    onClick={handleAddBusToRoute}
                                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    Assign Bus
                                </button>
                                <button
                                    onClick={() => {
                                        setShowAddBusModal(false);
                                        setSelectedRoute(null);
                                        setNewBusAssignment({ busNumber: '', departureTime: '', driverName: '' });
                                    }}
                                    className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <DepotFooter />
        </div>
    );
}
