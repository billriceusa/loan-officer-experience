import { LoanOfficer, Branch } from './types';

export const loanOfficers: LoanOfficer[] = [
  {
    id: 'lo-1',
    name: 'Sarah Johnson',
    title: 'Senior Loan Officer',
    photo: 'https://i.pravatar.cc/300?img=1',
    email: 'sarah.johnson@example.com',
    phone: '(555) 123-4567',
    nmls: '123456',
    bio: 'With over 15 years of experience in mortgage lending, I specialize in helping first-time homebuyers navigate the home buying process. My commitment is to make your dream of homeownership a reality with personalized service and competitive rates.',
    specialties: ['First-Time Homebuyers', 'FHA Loans', 'Conventional Loans'],
    languages: ['English', 'Spanish'],
    branchId: 'branch-1',
    rating: 4.9,
    reviewCount: 127,
    licenses: ['CA', 'NV', 'AZ'],
    availability: 'high',
    schedulingUrl: 'https://calendly.com/sarah-johnson',
    posUrl: 'https://pos.example.com/sarah-johnson',
  },
  {
    id: 'lo-2',
    name: 'Michael Chen',
    title: 'Loan Officer',
    photo: 'https://i.pravatar.cc/300?img=13',
    email: 'michael.chen@example.com',
    phone: '(555) 234-5678',
    nmls: '234567',
    bio: 'I focus on making the refinancing process simple and stress-free. Whether you\'re looking to lower your rate or tap into your home equity, I\'ll guide you through every step with transparency and expertise.',
    specialties: ['Refinancing', 'Jumbo Loans', 'Investment Properties'],
    languages: ['English', 'Mandarin'],
    branchId: 'branch-1',
    rating: 4.8,
    reviewCount: 98,
    licenses: ['CA', 'OR', 'WA'],
    availability: 'medium',
    schedulingUrl: 'https://calendly.com/michael-chen',
    posUrl: 'https://pos.example.com/michael-chen',
  },
  {
    id: 'lo-3',
    name: 'Emily Rodriguez',
    title: 'Senior Loan Officer',
    photo: 'https://i.pravatar.cc/300?img=5',
    email: 'emily.rodriguez@example.com',
    phone: '(555) 345-6789',
    nmls: '345678',
    bio: 'As a veteran specialist, I\'m dedicated to helping our military members and veterans access their VA loan benefits. My goal is to honor your service by providing exceptional mortgage solutions.',
    specialties: ['VA Loans', 'Military Relocation', 'First-Time Homebuyers'],
    languages: ['English', 'Spanish'],
    branchId: 'branch-2',
    rating: 5.0,
    reviewCount: 156,
    licenses: ['CA', 'TX', 'FL'],
    availability: 'high',
    schedulingUrl: 'https://calendly.com/emily-rodriguez',
    posUrl: 'https://pos.example.com/emily-rodriguez',
  },
  {
    id: 'lo-4',
    name: 'David Park',
    title: 'Loan Officer',
    photo: 'https://i.pravatar.cc/300?img=12',
    email: 'david.park@example.com',
    phone: '(555) 456-7890',
    nmls: '456789',
    bio: 'I specialize in jumbo loans and high-value properties. With a background in finance, I bring analytical expertise to help you secure the best financing for luxury real estate investments.',
    specialties: ['Jumbo Loans', 'Luxury Properties', 'Investment Properties'],
    languages: ['English', 'Korean'],
    branchId: 'branch-2',
    rating: 4.7,
    reviewCount: 82,
    licenses: ['CA', 'NY', 'MA'],
    availability: 'low',
    schedulingUrl: 'https://calendly.com/david-park',
    posUrl: 'https://pos.example.com/david-park',
  },
  {
    id: 'lo-5',
    name: 'Jennifer Martinez',
    title: 'Senior Loan Officer',
    photo: 'https://i.pravatar.cc/300?img=9',
    email: 'jennifer.martinez@example.com',
    phone: '(555) 567-8901',
    nmls: '567890',
    bio: 'I\'m passionate about helping families achieve homeownership through creative financing solutions. My expertise in construction loans and new builds ensures your custom home dreams become reality.',
    specialties: ['Construction Loans', 'New Construction', 'FHA 203k Loans'],
    languages: ['English', 'Spanish', 'Portuguese'],
    branchId: 'branch-3',
    rating: 4.9,
    reviewCount: 143,
    licenses: ['TX', 'NM', 'CO'],
    availability: 'high',
    schedulingUrl: 'https://calendly.com/jennifer-martinez',
    posUrl: 'https://pos.example.com/jennifer-martinez',
  },
  {
    id: 'lo-6',
    name: 'Robert Williams',
    title: 'Loan Officer',
    photo: 'https://i.pravatar.cc/300?img=15',
    email: 'robert.williams@example.com',
    phone: '(555) 678-9012',
    nmls: '678901',
    bio: 'With 10 years of experience, I help clients navigate complex credit situations. If you\'ve faced challenges in the past, I\'ll work with you to find the right mortgage solution.',
    specialties: ['Credit Repair Guidance', 'FHA Loans', 'USDA Loans'],
    languages: ['English'],
    branchId: 'branch-3',
    rating: 4.6,
    reviewCount: 76,
    licenses: ['TX', 'LA', 'AR'],
    availability: 'medium',
    schedulingUrl: 'https://calendly.com/robert-williams',
    posUrl: 'https://pos.example.com/robert-williams',
  },
  {
    id: 'lo-7',
    name: 'Lisa Thompson',
    title: 'Senior Loan Officer',
    photo: 'https://i.pravatar.cc/300?img=10',
    email: 'lisa.thompson@example.com',
    phone: '(555) 789-0123',
    nmls: '789012',
    bio: 'I specialize in helping self-employed professionals and business owners secure financing. My expertise with alternative documentation ensures you get approved even with non-traditional income.',
    specialties: ['Self-Employed', 'Bank Statement Loans', 'Conventional Loans'],
    languages: ['English', 'French'],
    branchId: 'branch-4',
    rating: 4.8,
    reviewCount: 112,
    licenses: ['NY', 'NJ', 'CT'],
    availability: 'high',
    schedulingUrl: 'https://calendly.com/lisa-thompson',
    posUrl: 'https://pos.example.com/lisa-thompson',
  },
  {
    id: 'lo-8',
    name: 'James Anderson',
    title: 'Loan Officer',
    photo: 'https://i.pravatar.cc/300?img=14',
    email: 'james.anderson@example.com',
    phone: '(555) 890-1234',
    nmls: '890123',
    bio: 'As a former real estate agent, I understand both sides of the transaction. I use this knowledge to help you close on time with competitive rates and smooth processes.',
    specialties: ['Purchase Loans', 'Conventional Loans', 'Quick Closings'],
    languages: ['English'],
    branchId: 'branch-4',
    rating: 4.7,
    reviewCount: 91,
    licenses: ['NY', 'PA', 'DE'],
    availability: 'medium',
    schedulingUrl: 'https://calendly.com/james-anderson',
    posUrl: 'https://pos.example.com/james-anderson',
  },
  {
    id: 'lo-9',
    name: 'Maria Garcia',
    title: 'Senior Loan Officer',
    photo: 'https://i.pravatar.cc/300?img=20',
    email: 'maria.garcia@example.com',
    phone: '(555) 901-2345',
    nmls: '901234',
    bio: 'I\'m dedicated to serving the Hispanic community with bilingual services and cultural understanding. My mission is to make homeownership accessible to everyone, regardless of background.',
    specialties: ['First-Time Homebuyers', 'FHA Loans', 'Down Payment Assistance'],
    languages: ['Spanish', 'English'],
    branchId: 'branch-5',
    rating: 5.0,
    reviewCount: 168,
    licenses: ['FL', 'GA', 'SC'],
    availability: 'high',
    schedulingUrl: 'https://calendly.com/maria-garcia',
    posUrl: 'https://pos.example.com/maria-garcia',
  },
  {
    id: 'lo-10',
    name: 'Kevin Nguyen',
    title: 'Loan Officer',
    photo: 'https://i.pravatar.cc/300?img=11',
    email: 'kevin.nguyen@example.com',
    phone: '(555) 012-3456',
    nmls: '012345',
    bio: 'Technology meets mortgage lending. I leverage the latest tools to streamline your application process and keep you informed every step of the way with real-time updates.',
    specialties: ['Digital Mortgages', 'Conventional Loans', 'Refinancing'],
    languages: ['English', 'Vietnamese'],
    branchId: 'branch-5',
    rating: 4.8,
    reviewCount: 104,
    licenses: ['FL', 'NC', 'VA'],
    availability: 'high',
    schedulingUrl: 'https://calendly.com/kevin-nguyen',
    posUrl: 'https://pos.example.com/kevin-nguyen',
  },
];

export const branches: Branch[] = [
  {
    id: 'branch-1',
    name: 'Downtown Los Angeles Branch',
    address: '123 Main Street',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90012',
    phone: '(555) 100-1000',
    email: 'losangeles@example.com',
    loanOfficers: ['lo-1', 'lo-2'],
  },
  {
    id: 'branch-2',
    name: 'San Diego Branch',
    address: '456 Ocean Avenue',
    city: 'San Diego',
    state: 'CA',
    zipCode: '92101',
    phone: '(555) 200-2000',
    email: 'sandiego@example.com',
    loanOfficers: ['lo-3', 'lo-4'],
  },
  {
    id: 'branch-3',
    name: 'Houston Branch',
    address: '789 Texas Boulevard',
    city: 'Houston',
    state: 'TX',
    zipCode: '77002',
    phone: '(555) 300-3000',
    email: 'houston@example.com',
    loanOfficers: ['lo-5', 'lo-6'],
  },
  {
    id: 'branch-4',
    name: 'New York City Branch',
    address: '321 Park Avenue',
    city: 'New York',
    state: 'NY',
    zipCode: '10022',
    phone: '(555) 400-4000',
    email: 'newyork@example.com',
    loanOfficers: ['lo-7', 'lo-8'],
  },
  {
    id: 'branch-5',
    name: 'Miami Branch',
    address: '654 Beach Drive',
    city: 'Miami',
    state: 'FL',
    zipCode: '33139',
    phone: '(555) 500-5000',
    email: 'miami@example.com',
    loanOfficers: ['lo-9', 'lo-10'],
  },
];

// Helper functions
export const getLoanOfficerById = (id: string): LoanOfficer | undefined => {
  return loanOfficers.find((lo) => lo.id === id);
};

export const getBranchById = (id: string): Branch | undefined => {
  return branches.find((branch) => branch.id === id);
};

export const getLoanOfficersByBranchId = (branchId: string): LoanOfficer[] => {
  return loanOfficers.filter((lo) => lo.branchId === branchId);
};

export const searchLoanOfficers = (query: string): LoanOfficer[] => {
  const searchTerm = query.toLowerCase();
  return loanOfficers.filter(
    (lo) =>
      lo.name.toLowerCase().includes(searchTerm) ||
      lo.specialties.some((s) => s.toLowerCase().includes(searchTerm)) ||
      lo.languages.some((l) => l.toLowerCase().includes(searchTerm)) ||
      lo.nmls.includes(searchTerm)
  );
};

export const filterLoanOfficers = (
  specialty?: string,
  language?: string,
  availability?: string
): LoanOfficer[] => {
  return loanOfficers.filter((lo) => {
    if (specialty && !lo.specialties.includes(specialty)) return false;
    if (language && !lo.languages.includes(language)) return false;
    if (availability && lo.availability !== availability) return false;
    return true;
  });
};
