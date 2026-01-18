'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, Search, Edit, Trash2, Bus } from 'lucide-react';
import DepotNavbar from '../../../components/depot/DepotNavbar';
import DepotFooter from '../../../components/depot/DepotFooter';

interface BusData {
    id: number;
    busNumber: string;
    driverName: string;
    driverContact: string;
    capacity: number;
    status: 'active' | 'maintenance' | 'inactive';
    route: string;
    lastService: string;
}

export default function BusManagement() {
    const [buses, setBuses] = useState<BusData[]>([
        { id: 1, busNumber: 'B-234', driverName: 'John Silva', driverContact: '0771234567', capacity: 50, status: 'active', route: 'Route 15', lastService: '2026-01-10' },
        { id: 2, busNumber: 'B-112', driverName: 'Michael Perera', driverContact: '0772345678', capacity: 45, status: 'active', route: 'Route 8', lastService: '2026-01-12' },
        { id: 3, busNumber: 'B-456', driverName: 'Kasun Fernando', driverContact: '0773456789', capacity: 55, status: 'maintenance', route: 'Route 3', lastService: '2026-01-05' },
        { id: 4, busNumber: 'B-789', driverName: 'Saman Kumar', driverContact: '0774567890', capacity: 50, status: 'active', route: 'Route 12', lastService: '2026-01-15' },
    ]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [newBus, setNewBus] = useState<Partial<BusData>>({
        busNumber: '',
        driverName: '',
        driverContact: '',
        capacity: 50,
        status: 'active',
        route: '',
        lastService: ''
    });

    const handleAddBus = () => {
        if (newBus.busNumber && newBus.driverName) {
            const bus: BusData = {
                id: buses.length + 1,
                busNumber: newBus.busNumber || '',
                driverName: newBus.driverName || '',
                driverContact: newBus.driverContact || '',
                capacity: newBus.capacity || 50,
                status: newBus.status || 'active',
                route: newBus.route || '',
                lastService: newBus.lastService || new Date().toISOString().split('T')[0]
            };
            setBuses([...buses, bus]);
            setShowAddModal(false);
            setNewBus({
                busNumber: '',
                driverName: '',
                driverContact: '',
                capacity: 50,
                status: 'active',
                route: '',
                lastService: ''
            });
        }
    };

    const handleDeleteBus = (id: number) => {
        if (confirm('Are you sure you want to delete this bus?')) {
            setBuses(buses.filter(bus => bus.id !== id));
        }
    };

    const filteredBuses = buses.filter(bus =>
        bus.busNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bus.driverName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bus.route.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
            <DepotNavbar />

            <div className="flex-1">
                {/* Modern Header with Glass Effect */}
                <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20 sticky top-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="flex items-center gap-4">
                                <Link href="/depot">
                                    <button className="p-3 bg-white/50 hover:bg-white/70 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                        <ArrowLeft size={24} className="text-gray-700" />
                                    </button>
                                </Link>
                                <div className="space-y-1">
                                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Bus Management
                                    </h1>
                                    <p className="text-gray-600 text-lg">Manage buses and assign drivers</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowAddModal(true)}
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <Plus size={20} />
                                Add New Bus
                            </button>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Modern Search Bar */}
                    <div className="mb-8">
                        <div className="relative max-w-md">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                            <input
                                type="text"
                                placeholder="Search by bus number, driver, or route..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none shadow-lg hover:shadow-xl transition-all duration-300 text-gray-900 placeholder:text-gray-500"
                            />
                        </div>
                    </div>

                    {/* Modern Bus List */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {filteredBuses.map((bus) => (
                            <div key={bus.id} className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/50 hover:border-blue-200 transform hover:-translate-y-1">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                                            <Bus className="text-white" size={32} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                {bus.busNumber}
                                            </h3>
                                            <p className="text-gray-600">{bus.route}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 hover:shadow-md">
                                            <Edit size={20} />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteBus(bus.id)}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300 hover:shadow-md"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="bg-white/50 rounded-xl p-4">
                                        <p className="text-sm text-gray-600 font-medium">Driver</p>
                                        <p className="text-lg font-semibold text-gray-900">{bus.driverName}</p>
                                        <p className="text-sm text-gray-500">{bus.driverContact}</p>
                                    </div>
                                    <div className="bg-white/50 rounded-xl p-4">
                                        <p className="text-sm text-gray-600 font-medium">Capacity</p>
                                        <p className="text-lg font-semibold text-gray-900">{bus.capacity} seats</p>
                                        <p className="text-sm text-gray-500">Last service: {bus.lastService}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${bus.status === 'active' ? 'bg-green-100 text-green-800' :
                                        bus.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                        {bus.status.charAt(0).toUpperCase() + bus.status.slice(1)}
                                    </span>
                                    <span className="text-sm text-gray-500">ID: {bus.id}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>

            {/* Modern Add Bus Modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/50">
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Add New Bus
                                </h2>
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-300"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">Bus Number</label>
                                        <input
                                            type="text"
                                            value={newBus.busNumber}
                                            onChange={(e) => setNewBus({ ...newBus, busNumber: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/70 border border-white/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                            placeholder="B-XXX"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">Capacity</label>
                                        <input
                                            type="number"
                                            value={newBus.capacity}
                                            onChange={(e) => setNewBus({ ...newBus, capacity: parseInt(e.target.value) })}
                                            className="w-full px-4 py-3 bg-white/70 border border-white/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">Driver Name</label>
                                        <input
                                            type="text"
                                            value={newBus.driverName}
                                            onChange={(e) => setNewBus({ ...newBus, driverName: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/70 border border-white/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                            placeholder="Driver name"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">Driver Contact</label>
                                        <input
                                            type="text"
                                            value={newBus.driverContact}
                                            onChange={(e) => setNewBus({ ...newBus, driverContact: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/70 border border-white/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                            placeholder="07XXXXXXXX"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">Route</label>
                                        <input
                                            type="text"
                                            value={newBus.route}
                                            onChange={(e) => setNewBus({ ...newBus, route: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/70 border border-white/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                            placeholder="Route 15"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-semibold text-gray-700">Status</label>
                                        <select
                                            value={newBus.status}
                                            onChange={(e) => setNewBus({ ...newBus, status: e.target.value as 'active' | 'maintenance' | 'inactive' })}
                                            className="w-full px-4 py-3 bg-white/70 border border-white/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                        >
                                            <option value="active">Active</option>
                                            <option value="maintenance">Maintenance</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-gray-700">Last Service Date</label>
                                    <input
                                        type="date"
                                        value={newBus.lastService}
                                        onChange={(e) => setNewBus({ ...newBus, lastService: e.target.value })}
                                        className="w-full px-4 py-3 bg-white/70 border border-white/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <button
                                    onClick={handleAddBus}
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Add Bus
                                </button>
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className="flex-1 px-6 py-3 bg-white/70 backdrop-blur-sm text-gray-700 rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-white/50"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <DepotFooter />
        </div>
    );
}
