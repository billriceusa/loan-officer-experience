'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const [showFindLO, setShowFindLO] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary-600">
                HomeLend
              </Link>
            </div>

            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                Home
              </Link>
              <button
                onClick={() => setShowFindLO(true)}
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                Find a Loan Officer
              </button>
              <Link
                href="/branches"
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                Branches
              </Link>
              <Link
                href="/#lead-form"
                className="text-gray-700 hover:text-primary-600 font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Find Loan Officer Modal */}
      {showFindLO && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Find a Loan Officer
                </h2>
                <button
                  onClick={() => setShowFindLO(false)}
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
              </div>

              <p className="text-gray-600 mb-6">
                Use our advanced search to find the perfect loan officer for
                your needs.
              </p>

              <button
                onClick={() => {
                  setShowFindLO(false);
                  router.push('/find-loan-officer');
                }}
                className="btn-primary w-full"
              >
                Go to Advanced Search
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
