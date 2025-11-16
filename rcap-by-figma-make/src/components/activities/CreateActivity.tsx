import React, { useState } from 'react';
import { ArrowLeft, Check, Upload, X, Calendar, MapPin, Users, DollarSign, FileText } from 'lucide-react';
import { Button } from '../Button';
import { Input } from '../Input';

interface CreateActivityProps {
  onBack: () => void;
  onSubmit: (data: any) => void;
}

export function CreateActivity({ onBack, onSubmit }: CreateActivityProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    activityType: '',
    title: '',
    shortDescription: '',
    fullDescription: '',
    objectives: '',
    expectedOutcomes: '',
    state: '',
    lga: '',
    specificLocation: '',
    startDate: '',
    endDate: '',
    targetPopulation: '',
    ageGroups: [] as string[],
    personnel: '',
    budget: '',
    equipment: '',
    materials: ''
  });

  const totalSteps = 6;

  const activityTypes = [
    'Vaccination Campaign',
    'Health Education',
    'Emergency Response',
    'Disease Surveillance',
    'Community Outreach',
    'Training Workshop'
  ];

  const states = ['Lagos', 'Kano', 'Rivers', 'FCT Abuja', 'Kaduna', 'Oyo', 'Edo'];
  const lgas = ['Ikeja', 'Surulere', 'Yaba', 'Eti-Osa', 'Alimosho', 'Kosofe'];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div className="pb-24 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 shadow-lg">
        <div className="container">
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={20} />
            <span>Back to Activities</span>
          </button>
          <h1 className="text-2xl font-bold">Create New Activity</h1>
        </div>
      </div>

      <div className="container py-6">
        {/* Progress Bar */}
        <div className="card-elevated mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-700">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          
          {/* Step Indicators */}
          <div className="flex justify-between mt-4">
            {[
              { num: 1, label: 'Basic Info' },
              { num: 2, label: 'Details' },
              { num: 3, label: 'Location' },
              { num: 4, label: 'Target' },
              { num: 5, label: 'Resources' },
              { num: 6, label: 'Review' }
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all mb-1 ${
                    currentStep > step.num
                      ? 'bg-green-500 text-white'
                      : currentStep === step.num
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {currentStep > step.num ? <Check size={16} /> : step.num}
                </div>
                <span className={`text-xs font-medium ${currentStep >= step.num ? 'text-purple-600' : 'text-gray-500'}`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <div className="card-elevated animate-slide-up">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="flex items-center gap-2">
                <FileText className="text-purple-600" size={24} />
                Basic Information
              </h2>
              
              <div className="input-field">
                <select
                  value={formData.activityType}
                  onChange={(e) => setFormData({ ...formData, activityType: e.target.value })}
                >
                  <option value="">Select activity type</option>
                  {activityTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <label>Activity Type *</label>
              </div>

              <Input
                label="Activity Title *"
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter a descriptive title"
              />

              <div className="input-field">
                <textarea
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  placeholder=" "
                  rows={4}
                  maxLength={500}
                  className="resize-none"
                />
                <label>Short Description * (Max 500 characters)</label>
                <p className="text-xs text-gray-500 mt-1">
                  {formData.shortDescription.length}/500 characters
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2>Activity Details</h2>
              
              <div className="input-field">
                <textarea
                  value={formData.fullDescription}
                  onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                  placeholder=" "
                  rows={6}
                />
                <label>Full Description *</label>
              </div>

              <div className="input-field">
                <textarea
                  value={formData.objectives}
                  onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                  placeholder=" "
                  rows={4}
                />
                <label>Objectives</label>
              </div>

              <div className="input-field">
                <textarea
                  value={formData.expectedOutcomes}
                  onChange={(e) => setFormData({ ...formData, expectedOutcomes: e.target.value })}
                  placeholder=" "
                  rows={4}
                />
                <label>Expected Outcomes</label>
              </div>
            </div>
          )}

          {/* Step 3: Location & Date */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="flex items-center gap-2">
                <MapPin className="text-purple-600" size={24} />
                Location & Schedule
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="input-field">
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  >
                    <option value="">Select state</option>
                    {states.map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  <label>State *</label>
                </div>

                <div className="input-field">
                  <select
                    value={formData.lga}
                    onChange={(e) => setFormData({ ...formData, lga: e.target.value })}
                  >
                    <option value="">Select LGA</option>
                    {lgas.map((lga) => (
                      <option key={lga} value={lga}>{lga}</option>
                    ))}
                  </select>
                  <label>LGA *</label>
                </div>
              </div>

              <Input
                label="Specific Location"
                type="text"
                value={formData.specificLocation}
                onChange={(e) => setFormData({ ...formData, specificLocation: e.target.value })}
                placeholder="E.g., Primary Health Centre, Main Street"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Start Date *"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                />
                <Input
                  label="End Date *"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* Step 4: Target Population */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="flex items-center gap-2">
                <Users className="text-purple-600" size={24} />
                Target Population
              </h2>
              
              <Input
                label="Target Population Size"
                type="number"
                value={formData.targetPopulation}
                onChange={(e) => setFormData({ ...formData, targetPopulation: e.target.value })}
                placeholder="Estimated number of people"
              />

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Target Age Groups
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['0-5 years', '6-12 years', '13-18 years', '19-35 years', '36-50 years', '51-65 years', '65+ years', 'All ages'].map((age) => (
                    <label key={age} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 cursor-pointer transition-colors">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded border-2 border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-600"
                        checked={formData.ageGroups.includes(age)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({ ...formData, ageGroups: [...formData.ageGroups, age] });
                          } else {
                            setFormData({ ...formData, ageGroups: formData.ageGroups.filter(a => a !== age) });
                          }
                        }}
                      />
                      <span className="text-sm">{age}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Resources */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="flex items-center gap-2">
                <DollarSign className="text-purple-600" size={24} />
                Resources Required
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Personnel Count"
                  type="number"
                  value={formData.personnel}
                  onChange={(e) => setFormData({ ...formData, personnel: e.target.value })}
                  placeholder="Number of staff needed"
                />
                <Input
                  label="Budget Estimate"
                  type="text"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  placeholder="₦ 0.00"
                />
              </div>

              <div className="input-field">
                <textarea
                  value={formData.equipment}
                  onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                  placeholder=" "
                  rows={4}
                />
                <label>Equipment Needed</label>
              </div>

              <div className="input-field">
                <textarea
                  value={formData.materials}
                  onChange={(e) => setFormData({ ...formData, materials: e.target.value })}
                  placeholder=" "
                  rows={4}
                />
                <label>Materials Required</label>
              </div>

              {/* File Upload Area */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Evidence & Attachments
                </label>
                <div className="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center hover:border-purple-500 transition-colors cursor-pointer bg-purple-50/50">
                  <Upload size={48} className="mx-auto mb-4 text-purple-600" />
                  <p className="font-semibold text-gray-900 mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-gray-600">
                    PDF, DOC, DOCX, JPG, PNG, MP4 (Max 50MB each)
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Review */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <h2>Review & Submit</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Basic Information</h4>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-gray-600">Type:</span> {formData.activityType}</p>
                    <p><span className="text-gray-600">Title:</span> {formData.title}</p>
                    <p><span className="text-gray-600">Description:</span> {formData.shortDescription}</p>
                  </div>
                  <button className="text-sm text-purple-600 font-semibold mt-2 hover:underline">
                    Edit
                  </button>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Location & Schedule</h4>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-gray-600">Location:</span> {formData.state}, {formData.lga}</p>
                    <p><span className="text-gray-600">Duration:</span> {formData.startDate} to {formData.endDate}</p>
                  </div>
                  <button className="text-sm text-purple-600 font-semibold mt-2 hover:underline">
                    Edit
                  </button>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Resources</h4>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-gray-600">Personnel:</span> {formData.personnel}</p>
                    <p><span className="text-gray-600">Budget:</span> {formData.budget}</p>
                  </div>
                  <button className="text-sm text-purple-600 font-semibold mt-2 hover:underline">
                    Edit
                  </button>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Note:</strong> Once submitted, this activity will be sent for review. You can save it as a draft to continue editing later.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
            {currentStep > 1 && (
              <Button variant="outline" onClick={handlePrevious} className="flex-1">
                Previous
              </Button>
            )}
            {currentStep < totalSteps ? (
              <Button variant="primary" onClick={handleNext} className="flex-1">
                Continue
              </Button>
            ) : (
              <>
                <Button variant="outline" onClick={() => onSubmit({ ...formData, status: 'draft' })} className="flex-1">
                  Save as Draft
                </Button>
                <Button variant="primary" onClick={handleSubmit} className="flex-1">
                  Submit for Approval
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
