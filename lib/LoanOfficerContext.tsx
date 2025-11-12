'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LoanOfficer } from './types';

interface LoanOfficerContextType {
  selectedLoanOfficer: LoanOfficer | null;
  setSelectedLoanOfficer: (lo: LoanOfficer | null) => void;
}

const LoanOfficerContext = createContext<LoanOfficerContextType | undefined>(
  undefined
);

export const LoanOfficerProvider = ({ children }: { children: ReactNode }) => {
  const [selectedLoanOfficer, setSelectedLoanOfficer] =
    useState<LoanOfficer | null>(null);

  return (
    <LoanOfficerContext.Provider
      value={{ selectedLoanOfficer, setSelectedLoanOfficer }}
    >
      {children}
    </LoanOfficerContext.Provider>
  );
};

export const useLoanOfficer = () => {
  const context = useContext(LoanOfficerContext);
  if (context === undefined) {
    throw new Error('useLoanOfficer must be used within a LoanOfficerProvider');
  }
  return context;
};
