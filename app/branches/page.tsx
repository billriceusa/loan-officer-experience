'use client';

import React from 'react';
import Link from 'next/link';
import { branches } from '@/lib/mockData';

export default function BranchesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Branches</h1>
      <p className="text-xl text-gray-600 mb-12">
        Find a branch near you and connect with our local loan officers
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {branches.map((branch) => (
          <Link key={branch.id} href={`/branches/${branch.id}`}>
            <div className="card h-full hover:shadow-xl transition-shadow cursor-pointer">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {branch.name}
              </h3>

              <div className="space-y-2 text-gray-600">
                <div className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary-600"
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
                    <p>{branch.address}</p>
                    <p>
                      {branch.city}, {branch.state} {branch.zipCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary-600"
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
                  <p>{branch.phone}</p>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary-600"
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
                  <p>{branch.email}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-900">
                    {branch.loanOfficers.length}
                  </span>{' '}
                  Loan Officers
                </p>
              </div>

              <div className="mt-4">
                <span className="text-primary-600 font-medium hover:text-primary-700">
                  View Branch Details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
