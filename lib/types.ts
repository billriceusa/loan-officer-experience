export interface LoanOfficer {
  id: string;
  name: string;
  title: string;
  photo: string;
  email: string;
  phone: string;
  nmls: string;
  bio: string;
  specialties: string[];
  languages: string[];
  branchId: string;
  rating: number;
  reviewCount: number;
  licenses: string[];
  availability: 'high' | 'medium' | 'low';
  schedulingUrl: string;
  posUrl: string;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  loanOfficers: string[]; // Array of LO IDs
}

export interface LeadFormData {
  loanType: 'purchase' | 'refinance' | '';
  loanAmount: string;
  creditScore: 'excellent' | 'good' | 'fair' | 'poor' | '';
  downPayment: string;
  propertyAddress: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hasWorkedWithLO: boolean | null;
  selectedLoanOfficerId?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}
