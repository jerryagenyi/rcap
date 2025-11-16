import React, { useState } from 'react';
import { 
  Code2, 
  X, 
  LayoutDashboard, 
  ClipboardList, 
  BarChart3, 
  Users, 
  User,
  Settings,
  LogOut,
  Building,
  MapPin,
  Briefcase,
  ChevronRight,
  LogIn,
  UserPlus,
  FileText
} from 'lucide-react';

interface DevMenuProps {
  onNavigate: (screen: string, tab?: string) => void;
  currentScreen: string;
}

export function DevMenu({ onNavigate, currentScreen }: DevMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'login', label: 'Login Screen', icon: LogIn, category: 'Auth' },
    { id: 'register', label: 'Register Screen', icon: UserPlus, category: 'Auth' },
    { id: 'dashboard', label: 'Federal Dashboard', icon: LayoutDashboard, category: 'Dashboards' },
    { id: 'state-dashboard', label: 'State Dashboard', icon: Building, category: 'Dashboards' },
    { id: 'lga-dashboard', label: 'LGA Dashboard', icon: MapPin, category: 'Dashboards' },
    { id: 'activities', label: 'Activities List', icon: ClipboardList, category: 'Features' },
    { id: 'activity-create', label: 'Create Activity', icon: FileText, category: 'Features' },
    { id: 'reports', label: 'Reports', icon: BarChart3, category: 'Features' },
    { id: 'team', label: 'Team Management', icon: Users, category: 'Features' },
    { id: 'profile', label: 'User Profile', icon: User, category: 'Features' },
  ];

  return (
    <>
      {/* Floating Dev Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 left-6 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-[9999] flex items-center justify-center group"
        style={{
          backdropFilter: 'blur(10px)'
        }}
      >
        {isOpen ? (
          <X size={24} className="transition-transform duration-300 rotate-90" />
        ) : (
          <Code2 size={24} className="transition-transform duration-300" />
        )}
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white text-xs flex items-center justify-center font-bold">
          DEV
        </span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          style={{ animation: 'fadeIn 0.3s ease' }}
        />
      )}

      {/* Slide-out Menu Panel */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-[9999] transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.95) 100%)',
          backdropFilter: 'blur(20px)'
        }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-6 text-white">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">Developer Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-sm opacity-90">Quick navigation for development</p>
        </div>

        {/* Menu Content */}
        <div className="overflow-y-auto h-[calc(100vh-140px)] p-4 space-y-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isActive ? 'bg-white/20' : 'bg-gray-200 group-hover:bg-purple-100'
                }`}>
                  <Icon size={20} className={isActive ? 'text-white' : 'text-purple-600'} />
                </div>
                <span className="flex-1 text-left font-medium">{item.label}</span>
                <ChevronRight 
                  size={16} 
                  className={`transition-transform ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                />
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white to-transparent">
          <div className="text-center text-xs text-gray-500">
            <p className="font-semibold text-purple-600 mb-1">RCAP Development Mode</p>
            <p>Build by Zoer • Version 1.0.0</p>
          </div>
        </div>
      </div>
    </>
  );
}