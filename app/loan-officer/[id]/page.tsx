'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getLoanOfficerById, getBranchById } from '@/lib/mockData';
import { LoanOfficer } from '@/lib/types';
import { useLoanOfficer } from '@/lib/LoanOfficerContext';
import LeadForm from '@/components/LeadForm';

export default function LoanOfficerPage() {
  const params = useParams();
  const id = params.id as string;
  const [loanOfficer, setLoanOfficer] = useState<LoanOfficer | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const { setSelectedLoanOfficer } = useLoanOfficer();

  useEffect(() => {
    const lo = getLoanOfficerById(id);
    if (lo) {
      setLoanOfficer(lo);
      setSelectedLoanOfficer(lo);
    }
  }, [id, setSelectedLoanOfficer]);

  if (!loanOfficer) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-gray-600">Loan Officer not found.</p>
      </div>
    );
  }

  const branch = getBranchById(loanOfficer.branchId);

  return (
    <>
      <div className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Photo */}
              <div className="flex-shrink-0">
                <img
                  src={loanOfficer.photo}
                  alt={loanOfficer.name}
                  className="w-48 h-48 rounded-full object-cover border-4 border-primary-100"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {loanOfficer.name}
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  {loanOfficer.title}
                </p>

                <div className="flex items-center gap-1 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-xl text-gray-900">
                    {loanOfficer.rating}
                  </span>
                  <span className="text-gray-600">
                    ({loanOfficer.reviewCount} reviews)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">NMLS</p>
                    <p className="font-semibold text-gray-900">
                      {loanOfficer.nmls}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <a
                      href={`mailto:${loanOfficer.email}`}
                      className="font-semibold text-primary-600 hover:text-primary-700"
                    >
                      {loanOfficer.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <a
                      href={`tel:${loanOfficer.phone}`}
                      className="font-semibold text-primary-600 hover:text-primary-700"
                    >
                      {loanOfficer.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Licensed In</p>
                    <p className="font-semibold text-gray-900">
                      {loanOfficer.licenses.join(', ')}
                    </p>
                  </div>
                </div>

                {/* Primary CTAs */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => setShowLeadForm(true)}
                    className="btn-primary"
                  >
                    Get Started
                  </button>
                  <a
                    href={loanOfficer.posUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Start Your Application
                  </a>
                  <a
                    href={loanOfficer.schedulingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                  >
                    Schedule a Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="md:col-span-2 space-y-8">
              {/* Bio */}
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About {loanOfficer.name.split(' ')[0]}
                </h2>
                <p className="text-gray-700 leading-relaxed">{loanOfficer.bio}</p>
              </div>

              {/* Specialties */}
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Specialties
                </h2>
                <div className="flex flex-wrap gap-3">
                  {loanOfficer.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Languages Spoken
                </h2>
                <div className="flex flex-wrap gap-3">
                  {loanOfficer.languages.map((language) => (
                    <span
                      key={language}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reviews Section (Mock) */}
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Client Reviews
                </h2>
                <div className="space-y-6">
                  {/* Sample Reviews */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">2 weeks ago</span>
                    </div>
                    <p className="font-medium text-gray-900 mb-2">
                      Amazing experience!
                    </p>
                    <p className="text-gray-700">
                      {loanOfficer.name.split(' ')[0]} made the entire process
                      smooth and stress-free. Highly recommend!
                    </p>
                    <p className="text-sm text-gray-600 mt-2">- John D.</p>
                  </div>

                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">1 month ago</span>
                    </div>
                    <p className="font-medium text-gray-900 mb-2">
                      Professional and knowledgeable
                    </p>
                    <p className="text-gray-700">
                      Got us the best rate and explained everything clearly. Very
                      responsive to all our questions.
                    </p>
                    <p className="text-sm text-gray-600 mt-2">- Maria S.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Branch Info */}
              {branch && (
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Office Location
                  </h3>
                  <p className="font-medium text-gray-900">{branch.name}</p>
                  <p className="text-gray-600 mt-2">
                    {branch.address}
                    <br />
                    {branch.city}, {branch.state} {branch.zipCode}
                  </p>
                  <p className="text-gray-600 mt-2">
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {branch.phone}
                    </a>
                  </p>
                </div>
              )}

              {/* Quick Stats */}
              <div className="card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Rating</p>
                    <p className="font-bold text-2xl text-gray-900">
                      {loanOfficer.rating}/5.0
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Reviews</p>
                    <p className="font-bold text-2xl text-gray-900">
                      {loanOfficer.reviewCount}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Availability</p>
                    <p className="font-medium text-gray-900 capitalize">
                      {loanOfficer.availability}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="card bg-primary-50 border-2 border-primary-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ready to get started?
                </h3>
                <p className="text-gray-700 mb-4">
                  Contact {loanOfficer.name.split(' ')[0]} today to discuss your
                  mortgage needs.
                </p>
                <button
                  onClick={() => setShowLeadForm(true)}
                  className="btn-primary w-full"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
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
