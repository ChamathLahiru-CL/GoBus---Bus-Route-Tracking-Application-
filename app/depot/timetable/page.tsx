'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, Plus, Trash2, Calendar } from 'lucide-react';
import DepotNavbar from '../../../components/depot/DepotNavbar';
import DepotFooter from '../../../components/depot/DepotFooter';

interface TimeSlot {
    time: string;
    busNumber: string;
    status: 'scheduled' | 'departed' | 'delayed' | 'cancelled';
}

interface DailySchedule {
    route: string;
    routeName: string;
    schedules: TimeSlot[];
}

type ScheduleStatus = 'scheduled' | 'departed' | 'delayed' | 'cancelled';

export default function Timetable() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [timetables, setTimetables] = useState<DailySchedule[]>([
        {
            route: 'Route 15',
            routeName: 'Colombo - Galle',
            schedules: [
                { time: '05:00 AM', busNumber: 'B-234', status: 'departed' },
                { time: '06:30 AM', busNumber: 'B-445', status: 'departed' },
                { time: '08:00 AM', busNumber: 'B-667', status: 'scheduled' },
                { time: '09:30 AM', busNumber: 'B-778', status: 'scheduled' },
                { time: '11:00 AM', busNumber: 'B-889', status: 'scheduled' },
                { time: '01:00 PM', busNumber: 'B-234', status: 'scheduled' },
                { time: '03:00 PM', busNumber: 'B-445', status: 'scheduled' },
                { time: '05:00 PM', busNumber: 'B-667', status: 'scheduled' },
            ]
        },
        {
            route: 'Route 8',
            routeName: 'Kandy - Colombo',
            schedules: [
                { time: '05:30 AM', busNumber: 'B-112', status: 'departed' },
                { time: '07:00 AM', busNumber: 'B-334', status: 'departed' },
                { time: '09:00 AM', busNumber: 'B-556', status: 'delayed' },
                { time: '11:30 AM', busNumber: 'B-112', status: 'scheduled' },
                { time: '02:00 PM', busNumber: 'B-334', status: 'scheduled' },
                { time: '04:30 PM', busNumber: 'B-556', status: 'scheduled' },
            ]
        },
        {
            route: 'Route 3',
            routeName: 'Matara - Colombo',
            schedules: [
                { time: '04:00 AM', busNumber: 'B-456', status: 'departed' },
                { time: '06:00 AM', busNumber: 'B-789', status: 'departed' },
                { time: '08:30 AM', busNumber: 'B-456', status: 'scheduled' },
                { time: '11:00 AM', busNumber: 'B-789', status: 'scheduled' },
                { time: '01:30 PM', busNumber: 'B-456', status: 'scheduled' },
                { time: '04:00 PM', busNumber: 'B-789', status: 'scheduled' },
            ]
        }
    ]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedRouteIndex, setSelectedRouteIndex] = useState<number | null>(null);
    const [newSchedule, setNewSchedule] = useState({
        time: '',
        busNumber: '',
        status: 'scheduled' as 'scheduled' | 'departed' | 'delayed' | 'cancelled'
    });

    const handleAddSchedule = () => {
        if (selectedRouteIndex !== null && newSchedule.time && newSchedule.busNumber) {
            const updatedTimetables = [...timetables];
            updatedTimetables[selectedRouteIndex].schedules.push(newSchedule);
            updatedTimetables[selectedRouteIndex].schedules.sort((a, b) => a.time.localeCompare(b.time));
            setTimetables(updatedTimetables);
            setShowAddModal(false);
            setNewSchedule({ time: '', busNumber: '', status: 'scheduled' });
            setSelectedRouteIndex(null);
        }
    };

    const handleDeleteSchedule = (routeIndex: number, scheduleIndex: number) => {
        if (confirm('Remove this schedule?')) {
            const updatedTimetables = [...timetables];
            updatedTimetables[routeIndex].schedules.splice(scheduleIndex, 1);
            setTimetables(updatedTimetables);
        }
    };

    const handleStatusChange = (routeIndex: number, scheduleIndex: number, newStatus: 'scheduled' | 'departed' | 'delayed' | 'cancelled') => {
        const updatedTimetables = [...timetables];
        updatedTimetables[routeIndex].schedules[scheduleIndex].status = newStatus;
        setTimetables(updatedTimetables);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'departed':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'scheduled':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'delayed':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'cancelled':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
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
                                    <h1 className="text-3xl font-bold text-gray-900">Bus Timetable</h1>
                                    <p className="text-gray-600 mt-1">Manage daily bus schedules</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2">
                                    <Calendar size={20} className="text-gray-600" />
                                    <input
                                        type="date"
                                        value={selectedDate}
                                        onChange={(e) => setSelectedDate(e.target.value)}
                                        className="outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="space-y-6">
                        {timetables.map((timetable, routeIndex) => (
                            <div key={routeIndex} className="bg-white rounded-xl shadow-lg p-6">
                                {/* Route Header */}
                                <div className="flex items-center justify-between mb-6 pb-4 border-b">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900">{timetable.route}</h2>
                                        <p className="text-gray-600">{timetable.routeName}</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            setSelectedRouteIndex(routeIndex);
                                            setShowAddModal(true);
                                        }}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                                    >
                                        <Plus size={20} />
                                        Add Schedule
                                    </button>
                                </div>

                                {/* Timetable Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {timetable.schedules.map((schedule, scheduleIndex) => (
                                        <div
                                            key={scheduleIndex}
                                            className={`border-2 rounded-lg p-4 ${getStatusColor(schedule.status)}`}
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-2">
                                                    <Clock size={20} />
                                                    <span className="font-bold text-lg">{schedule.time}</span>
                                                </div>
                                                <button
                                                    onClick={() => handleDeleteSchedule(routeIndex, scheduleIndex)}
                                                    className="p-1 hover:bg-white rounded transition"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>

                                            <div className="mb-3">
                                                <p className="text-sm opacity-75">Bus Number</p>
                                                <p className="font-semibold">{schedule.busNumber}</p>
                                            </div>

                                            <div>
                                                <p className="text-sm opacity-75 mb-1">Status</p>
                                                <select
                                                    value={schedule.status}
                                                    onChange={(e) => handleStatusChange(routeIndex, scheduleIndex, e.target.value as ScheduleStatus)}
                                                    className="w-full px-2 py-1 rounded border border-current bg-white text-sm font-semibold"
                                                >
                                                    <option value="scheduled">Scheduled</option>
                                                    <option value="departed">Departed</option>
                                                    <option value="delayed">Delayed</option>
                                                    <option value="cancelled">Cancelled</option>
                                                </select>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Summary */}
                                <div className="mt-6 pt-4 border-t">
                                    <div className="flex gap-6 text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            <span>Departed: {timetable.schedules.filter(s => s.status === 'departed').length}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                            <span>Scheduled: {timetable.schedules.filter(s => s.status === 'scheduled').length}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <span>Delayed: {timetable.schedules.filter(s => s.status === 'delayed').length}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <span>Cancelled: {timetable.schedules.filter(s => s.status === 'cancelled').length}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                {/* Add Schedule Modal */}
                {showAddModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Bus Schedule</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Departure Time</label>
                                    <input
                                        type="time"
                                        value={newSchedule.time}
                                        onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Bus Number</label>
                                    <input
                                        type="text"
                                        value={newSchedule.busNumber}
                                        onChange={(e) => setNewSchedule({ ...newSchedule, busNumber: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="B-XXX"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                    <select
                                        value={newSchedule.status}
                                        onChange={(e) => setNewSchedule({ ...newSchedule, status: e.target.value as ScheduleStatus })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="scheduled">Scheduled</option>
                                        <option value="departed">Departed</option>
                                        <option value="delayed">Delayed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-6">
                                <button
                                    onClick={handleAddSchedule}
                                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                                >
                                    Add Schedule
                                </button>
                                <button
                                    onClick={() => {
                                        setShowAddModal(false);
                                        setSelectedRouteIndex(null);
                                        setNewSchedule({ time: '', busNumber: '', status: 'scheduled' });
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
