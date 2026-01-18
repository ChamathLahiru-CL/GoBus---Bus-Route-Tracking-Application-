'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Bus,
  Route,
  Calendar,
  Users,
  PlusCircle,
  Clock,
  MapPin,
  Activity,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  BarChart3
} from 'lucide-react';
import DepotNavbar from '../../components/depot/DepotNavbar';
import DepotFooter from '../../components/depot/DepotFooter';

export default function DepotDashboard() {
  const [stats] = useState({
    totalBuses: 45,
    activeBuses: 38,
    totalRoutes: 12,
    todayBookings: 342,
    driversOnDuty: 35
  });

  const [recentActivity] = useState([
    { id: 1, type: 'bus', message: 'Bus #B-234 assigned to Route 15', time: '10 mins ago', status: 'success' },
    { id: 2, type: 'booking', message: '25 new bookings for Route 8', time: '25 mins ago', status: 'info' },
    { id: 3, type: 'driver', message: 'Driver John assigned to Bus #B-112', time: '1 hour ago', status: 'success' },
    { id: 4, type: 'route', message: 'Route 3 timetable updated', time: '2 hours ago', status: 'warning' }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="text-green-500" size={16} />;
      case 'warning':
        return <AlertCircle className="text-yellow-500" size={16} />;
      case 'info':
        return <BarChart3 className="text-blue-500" size={16} />;
      default:
        return <Activity className="text-gray-500" size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      <DepotNavbar />

      <div className="flex-1">
        {/* Modern Header with Glass Effect */}
        <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Depot Management
                </h1>
                <p className="text-gray-600 text-lg">Manage buses, routes, and operations</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <PlusCircle size={20} />
                  Quick Add
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {/* Enhanced Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/50 hover:border-blue-200 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm font-medium">Total Buses</p>
                  <p className="text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {stats.totalBuses}
                  </p>
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <TrendingUp size={14} />
                    <span>+12%</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Bus className="text-white" size={28} />
                </div>
              </div>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/50 hover:border-green-200 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm font-medium">Active Buses</p>
                  <p className="text-4xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {stats.activeBuses}
                  </p>
                  <div className="flex items-center gap-1 text-green-600 text-sm">
                    <TrendingUp size={14} />
                    <span>+8%</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Activity className="text-white" size={28} />
                </div>
              </div>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/50 hover:border-purple-200 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm font-medium">Total Routes</p>
                  <p className="text-4xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {stats.totalRoutes}
                  </p>
                  <div className="flex items-center gap-1 text-purple-600 text-sm">
                    <TrendingUp size={14} />
                    <span>+3%</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Route className="text-white" size={28} />
                </div>
              </div>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/50 hover:border-orange-200 transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm font-medium">Today Bookings</p>
                  <p className="text-4xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {stats.todayBookings}
                  </p>
                  <div className="flex items-center gap-1 text-orange-600 text-sm">
                    <TrendingUp size={14} />
                    <span>+15%</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Users className="text-white" size={28} />
                </div>
              </div>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/50 hover:border-indigo-200 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm font-medium">Drivers on Duty</p>
                  <p className="text-4xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {stats.driversOnDuty}
                  </p>
                  <div className="flex items-center gap-1 text-indigo-600 text-sm">
                    <TrendingUp size={14} />
                    <span>+5%</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Users className="text-white" size={28} />
                </div>
              </div>
            </div>
          </div>

          {/* Modern Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <Link href="/depot/bus-management">
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/50 hover:border-blue-200 transform hover:-translate-y-2 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Bus className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      Bus Management
                    </h3>
                    <p className="text-gray-600 text-sm">Manage buses & drivers</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">45 buses active</span>
                  <span className="text-blue-600 font-medium">View →</span>
                </div>
              </div>
            </Link>

            <Link href="/depot/route-management">
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/50 hover:border-green-200 transform hover:-translate-y-2 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <MapPin className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-green-600 transition-colors">
                      Route Management
                    </h3>
                    <p className="text-gray-600 text-sm">Assign buses to routes</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">12 routes active</span>
                  <span className="text-green-600 font-medium">View →</span>
                </div>
              </div>
            </Link>

            <Link href="/depot/timetable">
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/50 hover:border-purple-200 transform hover:-translate-y-2 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Clock className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                      Timetable
                    </h3>
                    <p className="text-gray-600 text-sm">Manage schedules</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Updated today</span>
                  <span className="text-purple-600 font-medium">View →</span>
                </div>
              </div>
            </Link>

            <Link href="/depot/bookings">
              <div className="group bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-white/50 hover:border-orange-200 transform hover:-translate-y-2 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Calendar className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition-colors">
                      Bookings
                    </h3>
                    <p className="text-gray-600 text-sm">View seat bookings</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">342 today</span>
                  <span className="text-orange-600 font-medium">View →</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Enhanced Recent Activity */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                View All →
              </button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="group flex items-center gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300 border border-white/30 hover:border-gray-200">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`p-3 rounded-xl shadow-md ${activity.type === 'bus' ? 'bg-blue-100 group-hover:bg-blue-200' :
                        activity.type === 'booking' ? 'bg-orange-100 group-hover:bg-orange-200' :
                          activity.type === 'driver' ? 'bg-green-100 group-hover:bg-green-200' :
                            'bg-purple-100 group-hover:bg-purple-200'
                      } transition-colors duration-300`}>
                      {activity.type === 'bus' && <Bus className="text-blue-600" size={20} />}
                      {activity.type === 'booking' && <Users className="text-orange-600" size={20} />}
                      {activity.type === 'driver' && <Users className="text-green-600" size={20} />}
                      {activity.type === 'route' && <MapPin className="text-purple-600" size={20} />}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.message}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {getStatusIcon(activity.status)}
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="text-gray-400 hover:text-gray-600">
                      <span className="text-sm">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <DepotFooter />
    </div>
  );
}