import React from 'react';
import { LayoutDashboard, ClipboardList, BarChart3, Users, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  notifications?: {
    activities?: number;
    reports?: number;
    team?: number;
    profile?: number;
  };
}

export function BottomNav({ activeTab, onTabChange, notifications = {} }: BottomNavProps) {
  const tabs = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'activities', icon: ClipboardList, label: 'Activities', badge: notifications.activities },
    { id: 'reports', icon: BarChart3, label: 'Reports', badge: notifications.reports },
    { id: 'team', icon: Users, label: 'Team', badge: notifications.team },
    { id: 'profile', icon: User, label: 'Profile', badge: notifications.profile }
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
        >
          <div className="relative">
            <tab.icon size={activeTab === tab.id ? 28 : 24} />
            {tab.badge && tab.badge > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {tab.badge > 9 ? '9+' : tab.badge}
              </span>
            )}
          </div>
          <span className="label">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
