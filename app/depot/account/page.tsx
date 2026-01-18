'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, User, Mail, Phone, MapPin, Lock, Eye, EyeOff, Save, Edit } from 'lucide-react';
import DepotNavbar from '../../../components/depot/DepotNavbar';
import DepotFooter from '../../../components/depot/DepotFooter';

interface UserProfile {
    name: string;
    email: string;
    phone: string;
    depotLocation: string;
    role: string;
    joinDate: string;
}

export default function DepotAccount() {
    const [isEditing, setIsEditing] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'settings'>('profile');

    const [profile, setProfile] = useState<UserProfile>({
        name: 'John Smith',
        email: 'john.smith@depot.gobus.com',
        phone: '+94 77 123 4567',
        depotLocation: 'Colombo Central Depot',
        role: 'Depot Manager',
        joinDate: '2024-03-15'
    });

    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [settings, setSettings] = useState({
        emailNotifications: true,
        smsNotifications: false,
        twoFactorAuth: false,
        autoBackup: true
    });

    const handleProfileUpdate = () => {
        // Here you would typically make an API call to update the profile
        setIsEditing(false);
        alert('Profile updated successfully!');
    };

    const handlePasswordChange = () => {
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert('New passwords do not match!');
            return;
        }
        if (passwordData.newPassword.length < 8) {
            alert('Password must be at least 8 characters long!');
            return;
        }
        // Here you would typically make an API call to change the password
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
        alert('Password changed successfully!');
    };

    const handleSettingChange = (setting: keyof typeof settings) => {
        setSettings(prev => ({ ...prev, [setting]: !prev[setting] }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
            <DepotNavbar />

            <div className="flex-1">
                {/* Header */}
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
                                        My Account
                                    </h1>
                                    <p className="text-gray-600 text-lg">Manage your depot account settings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Sidebar Navigation */}
                        <div className="lg:col-span-1">
                            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/50">
                                <nav className="space-y-2">
                                    <button
                                        onClick={() => setActiveTab('profile')}
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${activeTab === 'profile'
                                                ? 'bg-blue-100 text-blue-700 shadow-md'
                                                : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <User size={20} />
                                        Profile
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('security')}
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${activeTab === 'security'
                                                ? 'bg-blue-100 text-blue-700 shadow-md'
                                                : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <Lock size={20} />
                                        Security
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('settings')}
                                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${activeTab === 'settings'
                                                ? 'bg-blue-100 text-blue-700 shadow-md'
                                                : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <Edit size={20} />
                                        Settings
                                    </button>
                                </nav>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Profile Tab */}
                            {activeTab === 'profile' && (
                                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50">
                                    <div className="flex items-center justify-between mb-8">
                                        <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
                                        <button
                                            onClick={() => setIsEditing(!isEditing)}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
                                        >
                                            <Edit size={16} />
                                            {isEditing ? 'Cancel' : 'Edit Profile'}
                                        </button>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                                                {isEditing ? (
                                                    <input
                                                        type="text"
                                                        value={profile.name}
                                                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900"
                                                    />
                                                ) : (
                                                    <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                                                        <User size={20} className="text-gray-500" />
                                                        <span className="text-gray-900 font-medium">{profile.name}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                                                {isEditing ? (
                                                    <input
                                                        type="email"
                                                        value={profile.email}
                                                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900"
                                                    />
                                                ) : (
                                                    <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                                                        <Mail size={20} className="text-gray-500" />
                                                        <span className="text-gray-900 font-medium">{profile.email}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                                                {isEditing ? (
                                                    <input
                                                        type="tel"
                                                        value={profile.phone}
                                                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900"
                                                    />
                                                ) : (
                                                    <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                                                        <Phone size={20} className="text-gray-500" />
                                                        <span className="text-gray-900 font-medium">{profile.phone}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">Depot Location</label>
                                                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                                                    <MapPin size={20} className="text-gray-500" />
                                                    <span className="text-gray-900 font-medium">{profile.depotLocation}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">Role</label>
                                                <div className="px-4 py-3 bg-gray-50 rounded-xl">
                                                    <span className="text-gray-900 font-medium">{profile.role}</span>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="block text-sm font-semibold text-gray-700">Join Date</label>
                                                <div className="px-4 py-3 bg-gray-50 rounded-xl">
                                                    <span className="text-gray-900 font-medium">{new Date(profile.joinDate).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {isEditing && (
                                            <div className="flex gap-4 pt-6">
                                                <button
                                                    onClick={handleProfileUpdate}
                                                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                                >
                                                    <Save size={20} />
                                                    Save Changes
                                                </button>
                                                <button
                                                    onClick={() => setIsEditing(false)}
                                                    className="px-6 py-3 bg-white/70 backdrop-blur-sm text-gray-700 rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-white/50"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Security Tab */}
                            {activeTab === 'security' && (
                                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Security Settings</h2>

                                    <div className="space-y-8">
                                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                                            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Change Password</h3>
                                            <p className="text-yellow-700 mb-4">Update your password to keep your account secure.</p>

                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-medium text-gray-700">Current Password</label>
                                                    <div className="relative">
                                                        <input
                                                            type={showPassword ? "text" : "password"}
                                                            value={passwordData.currentPassword}
                                                            onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                                            className="w-full px-4 py-3 pr-12 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900"
                                                            placeholder="Enter current password"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowPassword(!showPassword)}
                                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                                        >
                                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label className="block text-sm font-medium text-gray-700">New Password</label>
                                                        <input
                                                            type="password"
                                                            value={passwordData.newPassword}
                                                            onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900"
                                                            placeholder="Enter new password"
                                                        />
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                                                        <input
                                                            type="password"
                                                            value={passwordData.confirmPassword}
                                                            onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-gray-900"
                                                            placeholder="Confirm new password"
                                                        />
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={handlePasswordChange}
                                                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                                >
                                                    <Lock size={20} />
                                                    Change Password
                                                </button>
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                                            <h3 className="text-lg font-semibold text-blue-800 mb-2">Two-Factor Authentication</h3>
                                            <p className="text-blue-700 mb-4">Add an extra layer of security to your account.</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-blue-800 font-medium">Enable 2FA</span>
                                                <button
                                                    onClick={() => handleSettingChange('twoFactorAuth')}
                                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-200'
                                                        }`}
                                                >
                                                    <span
                                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                                                            }`}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Settings Tab */}
                            {activeTab === 'settings' && (
                                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/50">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Account Settings</h2>

                                    <div className="space-y-6">
                                        <div className="bg-gray-50 rounded-xl p-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="font-medium text-gray-900">Email Notifications</h4>
                                                        <p className="text-sm text-gray-600">Receive updates via email</p>
                                                    </div>
                                                    <button
                                                        onClick={() => handleSettingChange('emailNotifications')}
                                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-200'
                                                            }`}
                                                    >
                                                        <span
                                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                                                                }`}
                                                        />
                                                    </button>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="font-medium text-gray-900">SMS Notifications</h4>
                                                        <p className="text-sm text-gray-600">Receive updates via SMS</p>
                                                    </div>
                                                    <button
                                                        onClick={() => handleSettingChange('smsNotifications')}
                                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.smsNotifications ? 'bg-blue-600' : 'bg-gray-200'
                                                            }`}
                                                    >
                                                        <span
                                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.smsNotifications ? 'translate-x-6' : 'translate-x-1'
                                                                }`}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 rounded-xl p-6">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data & Privacy</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h4 className="font-medium text-gray-900">Automatic Backup</h4>
                                                        <p className="text-sm text-gray-600">Automatically backup your data</p>
                                                    </div>
                                                    <button
                                                        onClick={() => handleSettingChange('autoBackup')}
                                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${settings.autoBackup ? 'bg-blue-600' : 'bg-gray-200'
                                                            }`}
                                                    >
                                                        <span
                                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${settings.autoBackup ? 'translate-x-6' : 'translate-x-1'
                                                                }`}
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                                            <h3 className="text-lg font-semibold text-red-800 mb-4">Danger Zone</h3>
                                            <p className="text-red-700 mb-4">These actions cannot be undone. Please be careful.</p>
                                            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                                                Delete Account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>

            <DepotFooter />
        </div>
    );
}