import { User, Settings, History, CreditCard, Bus, MapPin, Clock } from 'lucide-react';

export default function PassengerDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/search" className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition text-center group">
              <Bus className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-lg">Book New Ticket</div>
              <div className="text-sm text-blue-100 mt-1">Find and book your next trip</div>
            </a>
            <a href="#bookings" className="bg-green-600 text-white p-6 rounded-lg hover:bg-green-700 transition text-center group">
              <History className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-lg">Track Bookings</div>
              <div className="text-sm text-green-100 mt-1">View your travel history</div>
            </a>
            <a href="#favorites" className="bg-purple-600 text-white p-6 rounded-lg hover:bg-purple-700 transition text-center group">
              <MapPin className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-lg">Saved Routes</div>
              <div className="text-sm text-purple-100 mt-1">Quick access to favorites</div>
            </a>
          </div>
        </div>

        {/* Recent Bookings */}
        <div id="bookings" className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Bookings</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Badulla to Colombo</h4>
                  <p className="text-sm text-gray-600">Route: A001 • Seat: 12A • Bus: GD-4567</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Confirmed
                </span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Jan 15, 2026 • 08:30 AM</span>
                </div>
                <span className="font-semibold text-lg text-gray-900">LKR 1,250</span>
              </div>
              <div className="flex gap-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm flex-1">
                  View Details
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition text-sm flex-1">
                  Download Ticket
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Colombo to Kandy</h4>
                  <p className="text-sm text-gray-600">Route: B005 • Seat: 5B • Bus: KA-7890</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Upcoming
                </span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Jan 20, 2026 • 02:15 PM</span>
                </div>
                <span className="font-semibold text-lg text-gray-900">LKR 850</span>
              </div>
              <div className="flex gap-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm flex-1">
                  View Details
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition text-sm flex-1">
                  Modify Booking
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href="/bookings" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Bookings →
            </a>
          </div>
        </div>

        {/* Profile Section */}
        <div id="profile" className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                defaultValue="+94 77 123 4567"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
              <input
                type="text"
                defaultValue="Passenger"
                disabled
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium">
              Update Profile
            </button>
          </div>
        </div>

        {/* Account Settings */}
        <div id="settings" className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Email Notifications</h4>
                <p className="text-sm text-gray-600">Receive booking confirmations and updates</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">SMS Alerts</h4>
                <p className="text-sm text-gray-600">Get SMS notifications for bus departures</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-600">Add an extra layer of security</p>
              </div>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition text-sm">
                Enable
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}