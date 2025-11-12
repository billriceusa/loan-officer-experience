'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import LeadForm from '@/components/LeadForm';

export default function Home() {
  const [showLeadForm, setShowLeadForm] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Find Your Perfect Loan Officer
            </h1>
            <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
              Connect with experienced mortgage professionals who will guide you
              through every step of your home financing journey
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button
                onClick={() => setShowLeadForm(true)}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px]"
              >
                Purchase
              </button>
              <button
                onClick={() => setShowLeadForm(true)}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl min-w-[200px]"
              >
                Refinance
              </button>
            </div>

            {/* Subtle Text Link */}
            <div className="text-center">
              <Link
                href="/find-loan-officer"
                className="text-primary-100 hover:text-white underline text-sm"
              >
                Find a Loan Officer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Why Choose HomeLend?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Expert Loan Officers
            </h3>
            <p className="text-gray-600">
              Connect with experienced professionals who specialize in your
              specific needs
            </p>
          </div>

          <div className="card text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Fast Approvals
            </h3>
            <p className="text-gray-600">
              Get pre-approved quickly with our streamlined digital application
              process
            </p>
          </div>

          <div className="card text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary-600"
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
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Competitive Rates
            </h3>
            <p className="text-gray-600">
              Access the best mortgage rates and programs tailored to your
              situation
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-bold mb-2 text-gray-900">
                Find Your Loan Officer
              </h3>
              <p className="text-gray-600 text-sm">
                Search by name, location, or specialty to find the perfect match
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-bold mb-2 text-gray-900">Connect & Consult</h3>
              <p className="text-gray-600 text-sm">
                Chat, call, or schedule a meeting to discuss your needs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-bold mb-2 text-gray-900">Apply Online</h3>
              <p className="text-gray-600 text-sm">
                Complete your application digitally with guidance from your loan
                officer
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-bold mb-2 text-gray-900">Close Your Loan</h3>
              <p className="text-gray-600 text-sm">
                Get approved and close on your dream home with confidence
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="lead-form">
        <div className="bg-primary-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Take the first step toward homeownership today
          </p>
          <button
            onClick={() => setShowLeadForm(true)}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </button>
        </div>
      </div>

      {/* Lead Form Modal */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <LeadForm onClose={() => setShowLeadForm(false)} />
        </div>
      )}
    </>
  );
}
