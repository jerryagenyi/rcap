import React, { useState } from 'react';
import { Search, Users, Mail, Phone, MapPin, Circle, UserPlus, Filter } from 'lucide-react';
import { Button } from '../Button';

interface TeamMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  organization: string;
  location: string;
  activityCount: number;
  status: 'online' | 'offline' | 'away';
  avatar?: string;
}

export function TeamScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Dr. Amina Yusuf',
      email: 'amina.yusuf@fmoh.gov.ng',
      phone: '+234 803 123 4567',
      role: 'Federal Health Official',
      organization: 'Federal Ministry of Health',
      location: 'FCT Abuja',
      activityCount: 45,
      status: 'online'
    },
    {
      id: '2',
      name: 'Chukwudi Okonkwo',
      email: 'c.okonkwo@ncdc.gov.ng',
      phone: '+234 805 234 5678',
      role: 'State Administrator',
      organization: 'NCDC',
      location: 'Lagos State',
      activityCount: 38,
      status: 'online'
    },
    {
      id: '3',
      name: 'Fatima Abdullahi',
      email: 'f.abdullahi@kano.gov.ng',
      phone: '+234 807 345 6789',
      role: 'State Administrator',
      organization: 'Kano State Ministry of Health',
      location: 'Kano State',
      activityCount: 32,
      status: 'away'
    },
    {
      id: '4',
      name: 'Ibrahim Mohammed',
      email: 'i.mohammed@who.int',
      phone: '+234 809 456 7890',
      role: 'NGO Partner',
      organization: 'WHO Nigeria',
      location: 'FCT Abuja',
      activityCount: 28,
      status: 'offline'
    },
    {
      id: '5',
      name: 'Blessing Okafor',
      email: 'b.okafor@unicef.org',
      phone: '+234 810 567 8901',
      role: 'NGO Partner',
      organization: 'UNICEF Nigeria',
      location: 'Rivers State',
      activityCount: 25,
      status: 'online'
    },
    {
      id: '6',
      name: 'Dr. Adebayo Williams',
      email: 'a.williams@lagos.gov.ng',
      phone: '+234 812 678 9012',
      role: 'Local Health Officer',
      organization: 'Lagos State Health Department',
      location: 'Lagos, Ikeja LGA',
      activityCount: 42,
      status: 'online'
    }
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.organization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === 'all' || member.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-500';
      case 'away': return 'text-yellow-500';
      case 'offline': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'online': return 'Online';
      case 'away': return 'Away';
      case 'offline': return 'Offline';
      default: return 'Unknown';
    }
  };

  return (
    <div className="pb-24 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 shadow-lg">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">Team Directory</h1>
              <p className="text-sm opacity-90">{filteredMembers.length} team members</p>
            </div>
            <Button 
              variant="primary" 
              icon={<UserPlus size={20} />}
              className="bg-white text-purple-600 hover:bg-gray-50"
            >
              Add Member
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-6 space-y-4">
        {/* Search and Filters */}
        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search team members by name, email, or organization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-4 rounded-xl border-2 border-gray-200 focus:border-purple-600 focus:outline-none transition-colors"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`h-12 px-4 rounded-xl border-2 transition-all flex items-center gap-2 font-medium ${
                showFilters 
                  ? 'bg-purple-600 text-white border-purple-600' 
                  : 'bg-white text-gray-700 border-gray-200 hover:border-purple-600'
              }`}
            >
              <Filter size={20} />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="card-elevated animate-slide-up">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Role</label>
                  <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border-2 border-gray-200 focus:border-purple-600 focus:outline-none"
                  >
                    <option value="all">All Roles</option>
                    <option value="Federal Health Official">Federal Health Official</option>
                    <option value="State Administrator">State Administrator</option>
                    <option value="Local Health Officer">Local Health Officer</option>
                    <option value="Field Health Officer">Field Health Officer</option>
                    <option value="NGO Partner">NGO Partner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <select className="w-full h-10 px-3 rounded-lg border-2 border-gray-200 focus:border-purple-600 focus:outline-none">
                    <option>All Locations</option>
                    <option>FCT Abuja</option>
                    <option>Lagos State</option>
                    <option>Kano State</option>
                    <option>Rivers State</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                  <select className="w-full h-10 px-3 rounded-lg border-2 border-gray-200 focus:border-purple-600 focus:outline-none">
                    <option>All Statuses</option>
                    <option>Online</option>
                    <option>Away</option>
                    <option>Offline</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="card-elevated transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
                    member.status === 'online' ? 'bg-green-500' :
                    member.status === 'away' ? 'bg-yellow-500' :
                    'bg-gray-400'
                  }`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-purple-600 font-medium mb-2">{member.role}</p>
                  
                  <div className="space-y-1 text-xs text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                      <Mail size={12} />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={12} />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={12} />
                      <span>{member.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500">Activities</p>
                      <p className="text-sm font-bold text-purple-600">{member.activityCount}</p>
                    </div>
                    <div className={`flex items-center gap-1 text-xs font-medium ${getStatusColor(member.status)}`}>
                      <Circle size={8} fill="currentColor" />
                      {getStatusLabel(member.status)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <div className="card-elevated text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Users size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No team members found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or add a new team member</p>
            <Button variant="primary" icon={<UserPlus size={20} />}>
              Add Team Member
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}