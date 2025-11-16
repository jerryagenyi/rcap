import React, { useState } from 'react';
import { BarChart3, Download, Calendar, Filter, TrendingUp, PieChart, Map, FileText } from 'lucide-react';
import { Button } from '../Button';

export function ReportsScreen() {
  const [dateRange, setDateRange] = useState('month');
  const [reportType, setReportType] = useState('overview');

  return (
    <div className="pb-24 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 shadow-lg">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">Reports & Analytics</h1>
              <p className="text-sm opacity-90">Data-driven insights</p>
            </div>
            <Button 
              variant="primary" 
              icon={<Download size={20} />}
              className="bg-white text-purple-600 hover:bg-gray-50"
            >
              Export
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-6 space-y-6">
        {/* Filters */}
        <div className="card-elevated">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Report Type</label>
              <select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
                className="w-full h-10 px-3 rounded-lg border-2 border-gray-200 focus:border-purple-600 focus:outline-none"
              >
                <option value="overview">Overview Report</option>
                <option value="weekly">Weekly Report</option>
                <option value="monthly">Monthly Report</option>
                <option value="quarterly">Quarterly Report</option>
                <option value="custom">Custom Report</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Date Range</label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full h-10 px-3 rounded-lg border-2 border-gray-200 focus:border-purple-600 focus:outline-none"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
                <option value="custom">Custom Range</option>
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

        {/* Activity Trends Chart */}
        <div className="card-elevated">
          <div className="flex items-center justify-between mb-6">
            <h3 className="flex items-center gap-2">
              <TrendingUp size={24} className="text-purple-600" />
              Activity Trends
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
          
          {/* Bar Chart Visualization */}
          <div className="space-y-4">
            {[
              { label: 'Week 1', value: 85, date: 'Jan 1-7' },
              { label: 'Week 2', value: 92, date: 'Jan 8-14' },
              { label: 'Week 3', value: 78, date: 'Jan 15-21' },
              { label: 'Week 4', value: 95, date: 'Jan 22-28' },
              { label: 'Week 5', value: 88, date: 'Jan 29-31' }
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-sm font-bold text-purple-600">{item.value} activities</span>
                </div>
                <div className="w-full h-8 bg-gray-200 rounded-full overflow-hidden relative group cursor-pointer">
                  <div
                    className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-purple-600 to-blue-500"
                    style={{ width: `${item.value}%` }}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-600 group-hover:text-white transition-colors">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Type Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-elevated">
            <h3 className="mb-6 flex items-center gap-2">
              <PieChart size={24} className="text-purple-600" />
              Activity Type Distribution
            </h3>
            
            <div className="space-y-4">
              {[
                { type: 'Vaccination Campaign', count: 342, percentage: 34, color: '#7B2CBF' },
                { type: 'Health Education', count: 256, percentage: 26, color: '#4A90E2' },
                { type: 'Emergency Response', count: 189, percentage: 19, color: '#FF9800' },
                { type: 'Training Workshop', count: 145, percentage: 14, color: '#4CAF50' },
                { type: 'Disease Surveillance', count: 71, percentage: 7, color: '#2196F3' }
              ].map((item) => (
                <div key={item.type}>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm font-medium">{item.type}</span>
                    </div>
                    <span className="text-sm font-bold">{item.count}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Breakdown */}
          <div className="card-elevated">
            <h3 className="mb-6">Status Breakdown</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-xl border-2 border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-1">572</div>
                <div className="text-sm font-medium text-green-700">Approved</div>
                <div className="text-xs text-green-600 mt-1">↑ 12% vs last month</div>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">134</div>
                <div className="text-sm font-medium text-blue-700">Submitted</div>
                <div className="text-xs text-blue-600 mt-1">Pending review</div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
                <div className="text-3xl font-bold text-gray-600 mb-1">89</div>
                <div className="text-sm font-medium text-gray-700">Draft</div>
                <div className="text-xs text-gray-600 mt-1">In progress</div>
              </div>
              
              <div className="p-4 bg-red-50 rounded-xl border-2 border-red-200">
                <div className="text-3xl font-bold text-red-600 mb-1">24</div>
                <div className="text-sm font-medium text-red-700">Rejected</div>
                <div className="text-xs text-red-600 mt-1">Needs revision</div>
              </div>
            </div>
          </div>
        </div>

        {/* Geographic Distribution */}
        <div className="card-elevated">
          <h3 className="mb-6 flex items-center gap-2">
            <Map size={24} className="text-purple-600" />
            Geographic Distribution
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { state: 'Lagos', activities: 342, percentage: 27, color: '#7B2CBF' },
              { state: 'Kano', activities: 218, percentage: 17, color: '#9D4EDD' },
              { state: 'Rivers', activities: 156, percentage: 13, color: '#C77DFF' },
              { state: 'Kaduna', activities: 134, percentage: 11, color: '#4A90E2' },
              { state: 'FCT Abuja', activities: 98, percentage: 8, color: '#5B9BD5' },
              { state: 'Oyo', activities: 87, percentage: 7, color: '#A8D5E2' },
              { state: 'Edo', activities: 76, percentage: 6, color: '#B8E0E4' },
              { state: 'Others', activities: 136, percentage: 11, color: '#E0E0E0' }
            ].map((item) => (
              <div key={item.state} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.state}</span>
                    <span className="text-sm text-gray-600">{item.activities} activities</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${item.percentage * 3}%`,
                        background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}dd 100%)`
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Report Templates */}
        <div className="card-elevated">
          <h3 className="mb-4">Quick Report Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Weekly Summary',
                description: 'Activities summary for the week',
                icon: Calendar,
                color: 'purple'
              },
              {
                title: 'Monthly Report',
                description: 'Comprehensive monthly overview',
                icon: FileText,
                color: 'blue'
              },
              {
                title: 'Performance Analysis',
                description: 'Team and activity performance',
                icon: BarChart3,
                color: 'green'
              }
            ].map((template) => (
              <button
                key={template.title}
                className={`p-4 rounded-xl border-2 text-left transition-all group ${
                  template.color === 'purple' ? 'border-purple-200 hover:border-purple-400 bg-purple-50' :
                  template.color === 'blue' ? 'border-blue-200 hover:border-blue-400 bg-blue-50' :
                  'border-green-200 hover:border-green-400 bg-green-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    template.color === 'purple' ? 'bg-purple-200 text-purple-600' :
                    template.color === 'blue' ? 'bg-blue-200 text-blue-600' :
                    'bg-green-200 text-green-600'
                  }`}>
                    <template.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{template.title}</h4>
                    <p className="text-sm text-gray-600">{template.description}</p>
                    <span className={`inline-block mt-2 text-sm font-semibold ${
                      template.color === 'purple' ? 'text-purple-600' :
                      template.color === 'blue' ? 'text-blue-600' :
                      'text-green-600'
                    }`}>
                      Generate →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}