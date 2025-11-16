import React, { useState } from 'react';
import { ArrowLeft, Check, User, Mail, Phone, Building, Briefcase, Activity } from 'lucide-react';
import { Input } from '../Input';
import { Button } from '../Button';

interface RegisterScreenProps {
  onRegister: (data: any) => void;
  onNavigateToLogin: () => void;
}

export function RegisterScreen({ onRegister, onNavigateToLogin }: RegisterScreenProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<any>({});

  const organizations = [
    'Federal Ministry of Health',
    'Nigerian Centre for Disease Control (NCDC)',
    'Lagos State Health Department',
    'Kano State Ministry of Health',
    'Rivers State Health Service',
    'WHO Nigeria',
    'UNICEF Nigeria',
    'Other'
  ];

  const roles = [
    'Federal Health Official',
    'State Health Administrator',
    'Local Health Officer',
    'Field Health Officer',
    'NGO Partner',
    'Volunteer'
  ];

  const validateStep1 = () => {
    const newErrors: any = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: any = {};
    if (!formData.organization) newErrors.organization = 'Organization is required';
    if (!formData.role) newErrors.role = 'Role is required';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onRegister(formData);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md animate-slide-up">
        {/* Back Button */}
        <button
          onClick={step === 1 ? onNavigateToLogin : () => setStep(1)}
          className="flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>{step === 1 ? 'Back to Login' : 'Previous Step'}</span>
        </button>

        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-md">
            <Activity size={32} className="text-white" strokeWidth={2.5} />
          </div>
          <h2 className="mb-2">Create Your Account</h2>
          <p className="text-gray-600">Join the RCAP platform</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex-1 text-center">
              <div className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center font-semibold transition-all ${
                step >= 1 ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-200 text-gray-500'
              }`}>
                {step > 1 ? <Check size={20} strokeWidth={3} /> : '1'}
              </div>
              <p className={`text-xs font-medium ${step >= 1 ? 'text-purple-600' : 'text-gray-500'}`}>
                Personal Info
              </p>
            </div>
            
            <div className={`flex-1 h-1 mx-3 rounded-full transition-all ${
              step >= 2 ? 'bg-purple-600' : 'bg-gray-200'
            }`} />
            
            <div className="flex-1 text-center">
              <div className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center font-semibold transition-all ${
                step >= 2 ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-200 text-gray-500'
              }`}>
                2
              </div>
              <p className={`text-xs font-medium ${step >= 2 ? 'text-purple-600' : 'text-gray-500'}`}>
                Organization
              </p>
            </div>
          </div>
        </div>

        {/* Registration Card */}
        <div className="card-elevated">
          {step === 1 ? (
            <div className="space-y-6">
              <Input
                label="Full Name"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                error={errors.fullName}
              />

              <Input
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
              />

              <Input
                label="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                error={errors.phone}
              />

              <Button variant="primary" onClick={handleNext} className="w-full">
                Continue to Step 2
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="input-field">
                <select
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className={errors.organization ? 'error' : ''}
                >
                  <option value="">Select your organization</option>
                  {organizations.map((org) => (
                    <option key={org} value={org}>{org}</option>
                  ))}
                </select>
                <label>Organization</label>
                {errors.organization && (
                  <p className="mt-2 text-sm text-red-600">{errors.organization}</p>
                )}
              </div>

              <div className="input-field">
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className={errors.role ? 'error' : ''}
                >
                  <option value="">Select your role</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
                <label>Your Role</label>
                {errors.role && (
                  <p className="mt-2 text-sm text-red-600">{errors.role}</p>
                )}
              </div>

              <Input
                label="Password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                error={errors.password}
              />

              <Input
                label="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                error={errors.confirmPassword}
              />

              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button variant="primary" type="submit" loading={loading} className="flex-1">
                  Create Account
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
