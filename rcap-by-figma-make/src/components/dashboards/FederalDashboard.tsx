import React from 'react';
import { 
  ClipboardList, 
  AlertCircle, 
  Syringe, 
  Users, 
  TrendingUp,
  MapPin,
  Bell,
  Plus
} from 'lucide-react';
import { MetricCard } from '../MetricCard';
import { Button } from '../Button';

export function FederalDashboard() {
  return (
    <div className="pb-24 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 shadow-lg">
        <div className="container">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-1">National Overview</h1>
              <p className="text-sm opacity-90">Federal Ministry of Health</p>
            </div>
            <button className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
              <Bell size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="container py-6 space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Activities"
            value="1,247"
            icon={ClipboardList}
            iconColor="#7B2CBF"
            trend="+12% this month"
            trendUp={true}
          />
          <MetricCard
            title="Active Outbreaks"
            value="3"
            icon={AlertCircle}
            iconColor="#FF9800"
            subtitle="2 under control, 1 active"
          />
          <MetricCard
            title="Vaccination Coverage"
            value="67.3%"
            icon={Syringe}
            iconColor="#4CAF50"
            subtitle="Target: 70%"
          />
          <MetricCard
            title="Healthcare Workers Trained"
            value="15,892"
            icon={Users}
            iconColor="#4A90E2"
            trend="↑ 1,234 this quarter"
            trendUp={true}
          />
        </div>

        {/* Quick Actions */}
        <div className="card-elevated">
          <h3 className="mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-blue-500 rounded"></span>
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Button variant="primary" icon={<Plus size={20} />}>
              Create Activity
            </Button>
            <Button variant="outline">
              View Reports
            </Button>
            <Button variant="outline">
              Manage Teams
            </Button>
          </div>
        </div>

        {/* Performance Trends */}
        <div className="card-elevated">
          <div className="flex items-center justify-between mb-6">
            <h3 className="flex items-center gap-2">
              <TrendingUp size={24} className="text-purple-600" />
              Performance Trends
            </h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm rounded-lg bg-purple-100 text-purple-600 font-medium">
                Week
              </button>
              <button className="px-3 py-1 text-sm rounded-lg hover:bg-gray-100">
                Month
              </button>
              <button className="px-3 py-1 text-sm rounded-lg hover:bg-gray-100">
                Year
              </button>
            </div>
          </div>
          
          {/* Simple Bar Chart Visualization */}
          <div className="space-y-4">
            {[
              { label: 'Activities Created', value: 85, color: '#7B2CBF' },
              { label: 'Activities Completed', value: 72, color: '#4CAF50' },
              { label: 'Activities Approved', value: 68, color: '#4A90E2' },
              { label: 'Pending Review', value: 13, color: '#FF9800' }
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-sm font-bold">{item.value}</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${item.value}%`,
                      background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}dd 100%)`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* State Activity Distribution */}
        <div className="card-elevated">
          <h3 className="mb-6 flex items-center gap-2">
            <MapPin size={24} className="text-purple-600" />
            State Activity Distribution
          </h3>
          <div className="space-y-3">
            {[
              { state: 'Lagos', activities: 342, percentage: 27 },
              { state: 'Kano', activities: 218, percentage: 17 },
              { state: 'Rivers', activities: 156, percentage: 13 },
              { state: 'Kaduna', activities: 134, percentage: 11 },
              { state: 'FCT Abuja', activities: 98, percentage: 8 },
              { state: 'Others', activities: 299, percentage: 24 }
            ].map((item) => (
              <div key={item.state} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{item.state}</span>
                    <span className="text-sm text-gray-600">{item.activities} activities</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Alert Center */}
        <div className="card-elevated border-l-4 border-red-500">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle size={24} className="text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-red-600 mb-2">Active Emergency Alert</h3>
              <p className="text-sm text-gray-700 mb-4">
                Cholera outbreak reported in Kano State. Immediate response required.
              </p>
              <div className="flex gap-3">
                <Button variant="primary" className="bg-red-600 hover:bg-red-700">
                  Create Response Activity
                </Button>
                <Button variant="outline">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
