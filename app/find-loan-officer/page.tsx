'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { loanOfficers, searchLoanOfficers, filterLoanOfficers } from '@/lib/mockData';
import { LoanOfficer } from '@/lib/types';

export default function FindLoanOfficer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<LoanOfficer[]>(loanOfficers);
  const [suggestions, setSuggestions] = useState<LoanOfficer[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    specialty: '',
    language: '',
    availability: '',
  });

  const resultsPerPage = 10;

  // Extract unique values for filters
  const specialties = Array.from(
    new Set(loanOfficers.flatMap((lo) => lo.specialties))
  );
  const languages = Array.from(
    new Set(loanOfficers.flatMap((lo) => lo.languages))
  );

  // Autocomplete
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const matchedOfficers = searchLoanOfficers(searchQuery);
      setSuggestions(matchedOfficers.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  // Apply filters and search
  useEffect(() => {
    let filtered = loanOfficers;

    // Apply text search
    if (searchQuery.trim()) {
      filtered = searchLoanOfficers(searchQuery);
    }

    // Apply filters
    if (filters.specialty || filters.language || filters.availability) {
      filtered = filterLoanOfficers(
        filters.specialty || undefined,
        filters.language || undefined,
        filters.availability || undefined
      ).filter((lo) =>
        searchQuery.trim() ? filtered.includes(lo) : true
      );
    }

    setResults(filtered);
    setCurrentPage(1);
  }, [searchQuery, filters]);

  // Pagination
  const totalPages = Math.ceil(results.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const paginatedResults = results.slice(startIndex, startIndex + resultsPerPage);

  const handleSuggestionClick = (lo: LoanOfficer) => {
    setSearchQuery(lo.name);
    setShowSuggestions(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Find a Loan Officer
      </h1>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        {/* Search Bar with Autocomplete */}
        <div className="mb-6 relative">
          <label htmlFor="search" className="label">
            Search by name, NMLS, or specialty
          </label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
            placeholder="e.g., Sarah Johnson, 123456, First-Time Homebuyers"
            className="input-field"
          />

          {/* Autocomplete Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {suggestions.map((lo) => (
                <button
                  key={lo.id}
                  onClick={() => handleSuggestionClick(lo)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center gap-3 border-b border-gray-100 last:border-b-0"
                >
                  <img
                    src={lo.photo}
                    alt={lo.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{lo.name}</p>
                    <p className="text-sm text-gray-600">
                      {lo.title} - NMLS: {lo.nmls}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Filters */}
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

        {/* Clear Filters */}
        {(filters.specialty || filters.language || filters.availability || searchQuery) && (
          <button
            onClick={() => {
              setFilters({ specialty: '', language: '', availability: '' });
              setSearchQuery('');
            }}
            className="mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Results Count */}
      <p className="text-gray-600 mb-6">
        Showing {startIndex + 1}-
        {Math.min(startIndex + resultsPerPage, results.length)} of{' '}
        {results.length} loan officers
      </p>

      {/* Results Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {paginatedResults.map((lo) => (
          <Link key={lo.id} href={`/loan-officer/${lo.id}`}>
            <div className="card h-full hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={lo.photo}
                  alt={lo.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{lo.name}</h3>
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
                    ({lo.reviewCount} reviews)
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

              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Languages:</span>{' '}
                  {lo.languages.join(', ')}
                </p>
              </div>

              <div className="flex gap-2">
                <span className="text-xs text-gray-500">
                  Licensed in: {lo.licenses.join(', ')}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 border rounded-lg ${
                currentPage === page
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}

      {/* No Results */}
      {results.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No loan officers found matching your criteria.
          </p>
          <button
            onClick={() => {
              setFilters({ specialty: '', language: '', availability: '' });
              setSearchQuery('');
            }}
            className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
          >
            Clear filters and try again
          </button>
        </div>
      )}
    </div>
  );
}
