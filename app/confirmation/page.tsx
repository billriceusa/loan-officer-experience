'use client';

import React from 'react';
import Link from 'next/link';
import { useLoanOfficer } from '@/lib/LoanOfficerContext';

export default function ConfirmationPage() {
  const { selectedLoanOfficer } = useLoanOfficer();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Confirmation Message */}
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Thank You!
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8">
          Your application has been successfully submitted
        </p>

        {/* Loan Officer Info (if selected) */}
        {selectedLoanOfficer ? (
          <div className="bg-primary-50 rounded-lg p-6 mb-8 border border-primary-200">
            <h2 className="font-bold text-gray-900 mb-4">
              Your Assigned Loan Officer:
            </h2>
            <div className="flex items-center gap-4">
              <img
                src={selectedLoanOfficer.photo}
                alt={selectedLoanOfficer.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-bold text-lg text-gray-900">
                  {selectedLoanOfficer.name}
                </p>
                <p className="text-gray-600">{selectedLoanOfficer.title}</p>
                <p className="text-sm text-gray-500">
                  NMLS: {selectedLoanOfficer.nmls}
                </p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-primary-200">
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Email:</span>{' '}
                {selectedLoanOfficer.email}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Phone:</span>{' '}
                {selectedLoanOfficer.phone}
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200">
            <h2 className="font-bold text-gray-900 mb-2">What Happens Next?</h2>
            <p className="text-gray-700">
              We'll assign the best loan officer for your needs and they will
              contact you within 24 hours.
            </p>
          </div>
        )}

        {/* Next Steps */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-4">Next Steps:</h2>
          <ol className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span>
                You'll receive a confirmation email with your application details
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span>
                {selectedLoanOfficer
                  ? `${selectedLoanOfficer.name.split(' ')[0]} will`
                  : 'Your assigned loan officer will'}{' '}
                review your information and reach out within 24 hours
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span>
                Schedule a consultation to discuss your mortgage options
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span>Complete your full application and get pre-approved</span>
            </li>
          </ol>
        </div>

        {/* CTAs */}
        <div className="space-y-4">
          <Link href="/" className="block">
            <button className="btn-primary w-full">Return to Home</button>
          </Link>

          {selectedLoanOfficer && (
            <Link href={`/loan-officer/${selectedLoanOfficer.id}`} className="block">
              <button className="btn-secondary w-full">
                View {selectedLoanOfficer.name.split(' ')[0]}'s Profile
              </button>
            </Link>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm mb-2">
            Have questions or need immediate assistance?
          </p>
          <p className="text-primary-600 font-medium">
            Call us at{' '}
            <a href="tel:5550000000" className="hover:text-primary-700">
              (555) 000-0000
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
