import React, { useState } from 'react';
import { LoginScreen } from './components/auth/LoginScreen';
import { RegisterScreen } from './components/auth/RegisterScreen';
import { FederalDashboard } from './components/dashboards/FederalDashboard';
import { ActivitiesList } from './components/activities/ActivitiesList';
import { CreateActivity } from './components/activities/CreateActivity';
import { ReportsScreen } from './components/reports/ReportsScreen';
import { TeamScreen } from './components/team/TeamScreen';
import { ProfileScreen } from './components/profile/ProfileScreen';
import { BottomNav } from './components/BottomNav';
import { DevMenu } from './components/DevMenu';

type Screen = 'login' | 'register' | 'dashboard' | 'activities' | 'activity-create' | 'activity-view' | 'reports' | 'team' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);

  const handleLogin = (email: string, password: string) => {
    console.log('Login:', email);
    setCurrentScreen('dashboard');
  };

  const handleRegister = (data: any) => {
    console.log('Register:', data);
    setCurrentScreen('login');
  };

  const handleDevNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
    if (['dashboard', 'activities', 'reports', 'team', 'profile'].includes(screen)) {
      setActiveTab(screen);
    }
  };

  const handleCreateActivity = () => {
    setCurrentScreen('activity-create');
  };

  const handleViewActivity = (id: string) => {
    setSelectedActivityId(id);
    setCurrentScreen('activity-view');
  };

  const handleActivitySubmit = (data: any) => {
    console.log('Activity submitted:', data);
    setCurrentScreen('activities');
    setActiveTab('activities');
  };

  // Show auth screens without bottom nav
  if (currentScreen === 'login') {
    return (
      <>
        <LoginScreen
          onLogin={handleLogin}
          onNavigateToRegister={() => setCurrentScreen('register')}
        />
        <DevMenu onNavigate={handleDevNavigate} currentScreen={currentScreen} />
      </>
    );
  }

  if (currentScreen === 'register') {
    return (
      <>
        <RegisterScreen
          onRegister={handleRegister}
          onNavigateToLogin={() => setCurrentScreen('login')}
        />
        <DevMenu onNavigate={handleDevNavigate} currentScreen={currentScreen} />
      </>
    );
  }

  // Main app screens with bottom nav
  return (
    <div>
      {(activeTab === 'dashboard' || currentScreen === 'dashboard') && <FederalDashboard />}
      
      {(activeTab === 'activities' || currentScreen === 'activities') && (
        <ActivitiesList 
          onCreateActivity={handleCreateActivity}
          onViewActivity={handleViewActivity}
        />
      )}
      
      {currentScreen === 'activity-create' && (
        <CreateActivity
          onBack={() => {
            setCurrentScreen('activities');
            setActiveTab('activities');
          }}
          onSubmit={handleActivitySubmit}
        />
      )}
      
      {currentScreen === 'activity-view' && (
        <div className="pb-24 pt-6 container min-h-screen">
          <h1 className="mb-4">Activity Details</h1>
          <div className="card-elevated">
            <p className="text-gray-600">Activity detail view coming soon... (ID: {selectedActivityId})</p>
            <button 
              onClick={() => {
                setCurrentScreen('activities');
                setActiveTab('activities');
              }}
              className="mt-4 text-purple-600 font-semibold hover:underline"
            >
              ← Back to Activities
            </button>
          </div>
        </div>
      )}
      
      {(activeTab === 'reports' || currentScreen === 'reports') && <ReportsScreen />}
      
      {(activeTab === 'team' || currentScreen === 'team') && <TeamScreen />}
      
      {(activeTab === 'profile' || currentScreen === 'profile') && <ProfileScreen />}

      <BottomNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setCurrentScreen(tab as Screen);
        }}
        notifications={{
          activities: 5,
          reports: 2,
          profile: 1
        }}
      />
      
      <DevMenu onNavigate={handleDevNavigate} currentScreen={currentScreen} />
    </div>
  );
}