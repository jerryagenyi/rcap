import React, { useState } from 'react';
import { Search, Filter, Plus, Download, Calendar, MapPin, Building2, ChevronDown, Edit, Trash2, Eye } from 'lucide-react';
import { StatusBadge } from '../StatusBadge';
import { Button } from '../Button';

interface Activity {
  id: string;
  title: string;
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  organization: string;
  location: string;
  type: string;
  dateCreated: string;
  lastModified: string;
}

interface ActivitiesListProps {
  onCreateActivity: () => void;
  onViewActivity: (id: string) => void;
}

export function ActivitiesList({ onCreateActivity, onViewActivity }: ActivitiesListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  const activities: Activity[] = [
    {
      id: '1',
      title: 'COVID-19 Vaccination Campaign - Phase 3',
      status: 'approved',
      organization: 'Lagos State Health Department',
      location: 'Lagos, Ikeja LGA',
      type: 'Vaccination Campaign',
      dateCreated: '2025-01-10',
      lastModified: '2025-01-12'
    },
    {
      id: '2',
      title: 'Cholera Prevention Training Workshop',
      status: 'submitted',
      organization: 'NCDC',
      location: 'Kano State',
      type: 'Training Workshop',
      dateCreated: '2025-01-11',
      lastModified: '2025-01-11'
    },
    {
      id: '3',
      title: 'Community Health Education - Malaria Prevention',
      status: 'approved',
      organization: 'WHO Nigeria',
      location: 'Rivers, Port Harcourt',
      type: 'Health Education',
      dateCreated: '2025-01-09',
      lastModified: '2025-01-13'
    },
    {
      id: '4',
      title: 'Emergency Response - Lassa Fever Outbreak',
      status: 'submitted',
      organization: 'Federal Ministry of Health',
      location: 'Edo State',
      type: 'Emergency Response',
      dateCreated: '2025-01-12',
      lastModified: '2025-01-14'
    },
    {
      id: '5',
      title: 'Routine Immunization Campaign',
      status: 'draft',
      organization: 'UNICEF Nigeria',
      location: 'FCT Abuja',
      type: 'Vaccination Campaign',
      dateCreated: '2025-01-13',
      lastModified: '2025-01-14'
    },
    {
      id: '6',
      title: 'Disease Surveillance Training',
      status: 'rejected',
      organization: 'NCDC',
      location: 'Lagos State',
      type: 'Training Workshop',
      dateCreated: '2025-01-08',
      lastModified: '2025-01-10'
    }
  ];

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         activity.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         activity.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || activity.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleSelectActivity = (id: string) => {
    setSelectedActivities(prev =>
      prev.includes(id) ? prev.filter(actId => actId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedActivities.length === filteredActivities.length) {
      setSelectedActivities([]);
    } else {
      setSelectedActivities(filteredActivities.map(a => a.id));
    }
  };

  return (
    <div className="pb-24 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 shadow-lg">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">Activity Management</h1>
              <p className="text-sm opacity-90">{filteredActivities.length} activities</p>
            </div>
            <Button 
              variant="primary" 
              icon={<Plus size={20} />}
              onClick={onCreateActivity}
              className="bg-white text-purple-600 hover:bg-gray-50"
            >
              Create
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
                placeholder="Search activities, organizations, locations..."
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border-2 border-gray-200 focus:border-purple-600 focus:outline-none"
                  >
                    <option value="all">All Statuses</option>
                    <option value="draft">Draft</option>
                    <option value="submitted">Submitted</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Activity Type</label>
                  <select className="w-full h-10 px-3 rounded-lg border-2 border-gray-200 focus:border-purple-600 focus:outline-none">
                    <option>All Types</option>
                    <option>Vaccination Campaign</option>
                    <option>Training Workshop</option>
                    <option>Health Education</option>
                    <option>Emergency Response</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                  <select className="w-full h-10 px-3 rounded-lg border-2 border-gray-200 focus:border-purple-600 focus:outline-none">
                    <option>All Locations</option>
                    <option>Lagos State</option>
                    <option>Kano State</option>
                    <option>Rivers State</option>
                    <option>FCT Abuja</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bulk Actions */}
        {selectedActivities.length > 0 && (
          <div className="card-elevated bg-purple-50 border-2 border-purple-200 animate-slide-up">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-purple-900">
                {selectedActivities.length} activities selected
              </span>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-white hover:bg-gray-50 border border-gray-300 text-sm font-medium transition-colors">
                  Export
                </button>
                <button className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-colors">
                  Bulk Actions
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Activities List */}
        <div className="space-y-3">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="card-elevated transition-all cursor-pointer group"
              onClick={() => onViewActivity(activity.id)}
            >
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={selectedActivities.includes(activity.id)}
                  onChange={(e) => {
                    e.stopPropagation();
                    toggleSelectActivity(activity.id);
                  }}
                  className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-600 cursor-pointer"
                />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-1">
                        {activity.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Building2 size={16} />
                          {activity.organization}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {activity.location}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 rounded-lg text-xs font-medium">
                          {activity.type}
                        </span>
                      </div>
                    </div>
                    <StatusBadge status={activity.status} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        Created: {new Date(activity.dateCreated).toLocaleDateString()}
                      </span>
                      <span>Modified: {new Date(activity.lastModified).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onViewActivity(activity.id);
                        }}
                        className="p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition-colors"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg hover:bg-purple-100 text-purple-600 transition-colors"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-lg hover:bg-red-100 text-red-600 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredActivities.length === 0 && (
          <div className="card-elevated text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No activities found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or create a new activity</p>
            <Button variant="primary" icon={<Plus size={20} />} onClick={onCreateActivity}>
              Create Activity
            </Button>
          </div>
        )}

        {/* Pagination */}
        {filteredActivities.length > 0 && (
          <div className="card-elevated flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Showing 1-{filteredActivities.length} of {activities.length} activities
            </span>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                Previous
              </button>
              <button className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium">
                1
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium">
                2
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-sm font-medium">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}