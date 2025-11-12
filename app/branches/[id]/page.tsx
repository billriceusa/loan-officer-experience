'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getBranchById, getLoanOfficersByBranchId } from '@/lib/mockData';
import { Branch, LoanOfficer } from '@/lib/types';
import LeadForm from '@/components/LeadForm';

export default function BranchPage() {
  const params = useParams();
  const id = params.id as string;
  const [branch, setBranch] = useState<Branch | null>(null);
  const [loanOfficers, setLoanOfficers] = useState<LoanOfficer[]>([]);
  const [filteredLOs, setFilteredLOs] = useState<LoanOfficer[]>([]);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [filters, setFilters] = useState({
    specialty: '',
    language: '',
    availability: '',
  });

  useEffect(() => {
    const branchData = getBranchById(id);
    if (branchData) {
      setBranch(branchData);
      const los = getLoanOfficersByBranchId(id);
      setLoanOfficers(los);
      setFilteredLOs(los);
    }
  }, [id]);

  // Apply filters
  useEffect(() => {
    let filtered = loanOfficers;

    if (filters.specialty) {
      filtered = filtered.filter((lo) =>
        lo.specialties.includes(filters.specialty)
      );
    }

    if (filters.language) {
      filtered = filtered.filter((lo) => lo.languages.includes(filters.language));
    }

    if (filters.availability) {
      filtered = filtered.filter((lo) => lo.availability === filters.availability);
    }

    setFilteredLOs(filtered);
  }, [filters, loanOfficers]);

  if (!branch) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-gray-600">Branch not found.</p>
      </div>
    );
  }

  // Extract unique values for filters
  const specialties = Array.from(
    new Set(loanOfficers.flatMap((lo) => lo.specialties))
  );
  const languages = Array.from(
    new Set(loanOfficers.flatMap((lo) => lo.languages))
  );

  return (
    <>
      <div className="bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Branch Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {branch.name}
            </h1>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mt-0.5 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">{branch.address}</p>
                    <p className="text-gray-600">
                      {branch.city}, {branch.state} {branch.zipCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a
                      href={`mailto:${branch.email}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {branch.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Get Started Today
                </h3>
                <p className="text-gray-700 mb-4">
                  Connect with our expert loan officers at this branch
                </p>
                <button onClick={() => setShowLeadForm(true)} className="btn-primary">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Filter Loan Officers
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="specialty" className="label">
                  Specialty
                </label>
                <select
                  id="specialty"
                  value={filters.specialty}
                  onChange={(e) =>
                    setFilters({ ...filters, specialty: e.target.value })
                  }
                  className="input-field"
                >
                  <option value="">All Specialties</option>
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="language" className="label">
                  Language
                </label>
                <select
                  id="language"
                  value={filters.language}
                  onChange={(e) =>
                    setFilters({ ...filters, language: e.target.value })
                  }
                  className="input-field"
                >
                  <option value="">All Languages</option>
                  {languages.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="availability" className="label">
                  Availability
                </label>
                <select
                  id="availability"
                  value={filters.availability}
                  onChange={(e) =>
                    setFilters({ ...filters, availability: e.target.value })
                  }
                  className="input-field"
                >
                  <option value="">Any Availability</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            {(filters.specialty || filters.language || filters.availability) && (
              <button
                onClick={() =>
                  setFilters({ specialty: '', language: '', availability: '' })
                }
                className="mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Loan Officers */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Our Loan Officers ({filteredLOs.length})
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLOs.map((lo) => (
              <Link key={lo.id} href={`/loan-officer/${lo.id}`}>
                <div className="card h-full hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={lo.photo}
                      alt={lo.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900">
                        {lo.name}
                      </h3>
                      <p className="text-sm text-gray-600">{lo.title}</p>
                      <p className="text-sm text-gray-500">NMLS: {lo.nmls}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-1 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-medium text-gray-900">{lo.rating}</span>
                      <span className="text-sm text-gray-500">
                        ({lo.reviewCount})
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Specialties:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {lo.specialties.slice(0, 2).map((specialty) => (
                        <span
                          key={specialty}
                          className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                      {lo.specialties.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          +{lo.specialties.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Languages:</span>{' '}
                    {lo.languages.join(', ')}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredLOs.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-600 text-lg">
                No loan officers found matching your criteria.
              </p>
              <button
                onClick={() =>
                  setFilters({ specialty: '', language: '', availability: '' })
                }
                className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
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
