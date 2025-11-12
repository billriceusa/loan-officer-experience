'use client';

import React, { useState } from 'react';
import { useLoanOfficer } from '@/lib/LoanOfficerContext';
import { searchLoanOfficers } from '@/lib/mockData';
import { LeadFormData } from '@/lib/types';
import { useRouter } from 'next/navigation';

interface LeadFormProps {
  onClose?: () => void;
}

export default function LeadForm({ onClose }: LeadFormProps) {
  const { selectedLoanOfficer, setSelectedLoanOfficer } = useLoanOfficer();
  const router = useRouter();
  const [showLOSearch, setShowLOSearch] = useState(false);
  const [loSearchQuery, setLoSearchQuery] = useState('');
  const [formData, setFormData] = useState<LeadFormData>({
    loanType: '',
    loanAmount: '',
    creditScore: '',
    downPayment: '',
    propertyAddress: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hasWorkedWithLO: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLOPreferenceChange = (hasWorked: boolean) => {
    setFormData((prev) => ({ ...prev, hasWorkedWithLO: hasWorked }));
    if (hasWorked) {
      setShowLOSearch(true);
    } else {
      setShowLOSearch(false);
      setSelectedLoanOfficer(null);
    }
  };

  const handleLOSearch = () => {
    const results = searchLoanOfficers(loSearchQuery);
    if (results.length > 0) {
      setSelectedLoanOfficer(results[0]);
      setShowLOSearch(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log('Form submitted:', {
      ...formData,
      selectedLoanOfficerId: selectedLoanOfficer?.id,
    });
    router.push('/confirmation');
  };

  return (
    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Get Started</h2>
          {onClose && (
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Loan Officer Selection */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="font-medium text-gray-900 mb-3">
            Have you worked with one of our loan officers before?
          </p>
          <div className="flex gap-4 mb-3">
            <button
              onClick={() => handleLOPreferenceChange(true)}
              className={`px-4 py-2 rounded-lg font-medium ${
                formData.hasWorkedWithLO === true
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => handleLOPreferenceChange(false)}
              className={`px-4 py-2 rounded-lg font-medium ${
                formData.hasWorkedWithLO === false
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              No
            </button>
          </div>

          {showLOSearch && (
            <div className="mt-4">
              <label className="label">Search for your loan officer:</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={loSearchQuery}
                  onChange={(e) => setLoSearchQuery(e.target.value)}
                  placeholder="Enter name..."
                  className="input-field flex-1"
                />
                <button
                  onClick={handleLOSearch}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700"
                >
                  Search
                </button>
              </div>
              <button
                onClick={() => {
                  setShowLOSearch(false);
                  setFormData((prev) => ({ ...prev, hasWorkedWithLO: false }));
                }}
                className="text-sm text-gray-600 mt-2 hover:text-gray-900"
              >
                Skip - proceed without selecting
              </button>
            </div>
          )}

          {selectedLoanOfficer && (
            <div className="mt-4 p-3 bg-white rounded border border-gray-300">
              <p className="text-sm text-gray-600">Selected Loan Officer:</p>
              <p className="font-medium text-gray-900">
                {selectedLoanOfficer.name}
              </p>
              <p className="text-sm text-gray-600">
                NMLS: {selectedLoanOfficer.nmls}
              </p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Loan Type */}
          <div>
            <label htmlFor="loanType" className="label">
              What type of loan are you interested in? *
            </label>
            <select
              id="loanType"
              name="loanType"
              value={formData.loanType}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select...</option>
              <option value="purchase">Purchase</option>
              <option value="refinance">Refinance</option>
            </select>
          </div>

          {/* Loan Amount */}
          <div>
            <label htmlFor="loanAmount" className="label">
              Estimated Loan Amount *
            </label>
            <input
              type="text"
              id="loanAmount"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              placeholder="$350,000"
              required
              className="input-field"
            />
          </div>

          {/* Credit Score */}
          <div>
            <label htmlFor="creditScore" className="label">
              How would you rate your credit? *
            </label>
            <select
              id="creditScore"
              name="creditScore"
              value={formData.creditScore}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select...</option>
              <option value="excellent">Excellent (720+)</option>
              <option value="good">Good (680-719)</option>
              <option value="fair">Fair (640-679)</option>
              <option value="poor">Poor (Below 640)</option>
            </select>
          </div>

          {/* Down Payment / Equity */}
          <div>
            <label htmlFor="downPayment" className="label">
              {formData.loanType === 'purchase'
                ? 'Down Payment Amount'
                : 'Estimated Home Equity'}{' '}
              *
            </label>
            <input
              type="text"
              id="downPayment"
              name="downPayment"
              value={formData.downPayment}
              onChange={handleChange}
              placeholder="$70,000 or 20%"
              required
              className="input-field"
            />
          </div>

          {/* Property Address */}
          <div>
            <label htmlFor="propertyAddress" className="label">
              Property Address *
            </label>
            <input
              type="text"
              id="propertyAddress"
              name="propertyAddress"
              value={formData.propertyAddress}
              onChange={handleChange}
              placeholder="123 Main St, City, State ZIP"
              required
              className="input-field"
            />
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="label">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="label">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="label">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="phone" className="label">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-primary w-full">
            Submit Application
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          By submitting this form, you consent to be contacted about your
          mortgage needs.
        </p>
      </div>
    </div>
  );
}
