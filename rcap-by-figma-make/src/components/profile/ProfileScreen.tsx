import React, { useState } from 'react';
import { 
  User, Mail, Phone, Building2, MapPin, Camera, 
  Edit, Save, X, Bell, Shield, LogOut, Settings,
  Activity, Award, TrendingUp, Calendar
} from 'lucide-react';
import { Button } from '../Button';
import { Input } from '../Input';

export function ProfileScreen() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const [formData, setFormData] = useState({
    fullName: 'Dr. Amina Yusuf',
    email: 'amina.yusuf@fmoh.gov.ng',
    phone: '+234 803 123 4567',
    jobTitle: 'Senior Health Official',
    organization: 'Federal Ministry of Health',
    location: 'FCT Abuja',
    bio: 'Experienced public health professional with 15+ years in risk communication and emergency response coordination.'
  });

  const handleSave = () => {
    setIsEditing(false);
    console.log('Profile updated:', formData);
  };

  return (
    <div className="pb-24 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 shadow-lg">
        <div className="container">
          <h1 className="text-2xl font-bold">My Profile</h1>
        </div>
      </div>

      <div className="container py-6 space-y-6">
        {/* Profile Card */}
        <div className="card-elevated">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar Section */}
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  AY
                </div>
                <button className="absolute bottom-2 right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Camera size={20} className="text-purple-600" />
                </button>
              </div>
              <div className="mt-4 text-center">
                <h2 className="font-bold text-gray-900">{formData.fullName}</h2>
                <p className="text-sm text-purple-600 font-medium">{formData.jobTitle}</p>
                <p className="text-sm text-gray-600">{formData.organization}</p>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h3>Profile Information</h3>
                {!isEditing ? (
                  <Button 
                    variant="outline" 
                    icon={<Edit size={18} />}
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      icon={<X size={18} />}
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      variant="primary" 
                      icon={<Save size={18} />}
                      onClick={handleSave}
                    >
                      Save Changes
                    </Button>
                  </div>
                )}
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <Input
                    label="Full Name"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <Input
                    label="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <Input
                    label="Job Title"
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                  />
                  <div className="input-field">
                    <textarea
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      placeholder=" "
                      rows={3}
                    />
                    <label>Bio</label>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail size={20} className="text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium">{formData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-medium">{formData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 size={20} className="text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Organization</p>
                      <p className="font-medium">{formData.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-medium">{formData.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User size={20} className="text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Bio</p>
                      <p className="font-medium">{formData.bio}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Activity Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="card-elevated text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center">
              <Activity size={24} className="text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-600 mb-1">45</div>
            <div className="text-sm text-gray-600">Total Activities</div>
          </div>
          <div className="card-elevated text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-100 flex items-center justify-center">
              <Award size={24} className="text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-600 mb-1">38</div>
            <div className="text-sm text-gray-600">Approved</div>
          </div>
          <div className="card-elevated text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center">
              <TrendingUp size={24} className="text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="card-elevated text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center">
              <Calendar size={24} className="text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-orange-600 mb-1">2.5y</div>
            <div className="text-sm text-gray-600">Member Since</div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="card-elevated">
          <h3 className="mb-4">Settings & Preferences</h3>
          
          {/* Notifications */}
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <Bell size={20} className="text-purple-600" />
                  <div>
                    <h4 className="font-semibold">Notifications</h4>
                    <p className="text-sm text-gray-600">Manage your notification preferences</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3 pl-8">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm">Email notifications</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-2 text-purple-600 focus:ring-2 focus:ring-purple-600" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm">SMS notifications</span>
                  <input type="checkbox" className="w-5 h-5 rounded border-2 text-purple-600 focus:ring-2 focus:ring-purple-600" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm">Push notifications</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-2 text-purple-600 focus:ring-2 focus:ring-purple-600" />
                </label>
              </div>
            </div>

            {/* Security */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield size={20} className="text-purple-600" />
                  <div>
                    <h4 className="font-semibold">Security</h4>
                    <p className="text-sm text-gray-600">Password and security settings</p>
                  </div>
                </div>
                <button className="text-purple-600 font-semibold text-sm hover:underline">
                  Change Password
                </button>
              </div>
            </div>

            {/* App Settings */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Settings size={20} className="text-purple-600" />
                  <div>
                    <h4 className="font-semibold">App Settings</h4>
                    <p className="text-sm text-gray-600">Language, theme, and preferences</p>
                  </div>
                </div>
                <button className="text-purple-600 font-semibold text-sm hover:underline">
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card-elevated">
          <h3 className="mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: 'Created activity', title: 'COVID-19 Vaccination Campaign', time: '2 hours ago', color: 'purple' },
              { action: 'Approved activity', title: 'Community Health Education', time: '5 hours ago', color: 'green' },
              { action: 'Updated profile', title: 'Changed contact information', time: '1 day ago', color: 'blue' },
              { action: 'Submitted report', title: 'Monthly Performance Report', time: '2 days ago', color: 'orange' }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  item.color === 'purple' ? 'bg-purple-600' :
                  item.color === 'green' ? 'bg-green-600' :
                  item.color === 'blue' ? 'bg-blue-600' :
                  'bg-orange-600'
                }`} />
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.action}</p>
                  <p className="text-sm text-gray-600">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <div className="card-elevated">
          <Button 
            variant="outline" 
            icon={<LogOut size={20} />}
            className="w-full border-red-500 text-red-600 hover:bg-red-50"
          >
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
