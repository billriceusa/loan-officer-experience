# Loan Officer Experience - Next.js Prototype

A comprehensive Next.js prototype demonstrating user experiences for finding and engaging with loan officers on a mortgage lender's website.

## Features

### User Journeys

This prototype implements 4 main user journeys (detailed in `USER_JOURNEYS.md`):

1. **Referred User with LO Name Only** - User searches for a specific loan officer by name
2. **Direct Google Search** - User lands directly on a loan officer's landing page
3. **Branch Page Discovery** - User finds a branch location and browses loan officers
4. **No Preference** - User without a specific loan officer preference

### Key Components

- **Home Page** - Hero section with primary CTAs (Purchase/Refinance) and Find a Loan Officer link
- **Find a Loan Officer** - Advanced search with autocomplete, filters (specialty, language, availability), and pagination
- **Loan Officer Landing Page** - Comprehensive profile with bio, specialties, reviews, and multiple CTAs
- **Branch Pages** - Branch directory and individual branch pages with loan officer cards and filters
- **Lead Form** - Multi-field form with loan officer selection capability
- **Chat Widget** - AI chatbot mockup available on all pages (bottom right)
- **State Management** - React Context for maintaining selected loan officer across pages

### Pages

- `/` - Home page
- `/find-loan-officer` - Advanced loan officer search
- `/loan-officer/[id]` - Individual loan officer landing pages
- `/branches` - Branch directory
- `/branches/[id]` - Individual branch pages with loan officers
- `/confirmation` - Lead form submission confirmation

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Mock Data:** 10 loan officers, 5 branches

## Getting Started

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

\`\`\`bash
npm run build
\`\`\`

### Production

\`\`\`bash
npm start
\`\`\`

## Project Structure

\`\`\`
loan-officer-experience/
├── app/
│   ├── branches/
│   │   ├── [id]/
│   │   │   └── page.tsx         # Individual branch page
│   │   └── page.tsx             # Branch directory
│   ├── confirmation/
│   │   └── page.tsx             # Confirmation page
│   ├── find-loan-officer/
│   │   └── page.tsx             # Search page
│   ├── loan-officer/
│   │   └── [id]/
│   │       └── page.tsx         # LO landing page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/
│   ├── ChatWidget.tsx           # Chat widget
│   ├── LeadForm.tsx             # Lead form modal
│   └── Navigation.tsx           # Main navigation
├── lib/
│   ├── LoanOfficerContext.tsx   # State management
│   ├── mockData.ts              # Mock data
│   └── types.ts                 # TypeScript types
├── USER_JOURNEYS.md             # Mermaid diagrams
└── README.md
\`\`\`

## Key Features Detail

### Chat Widget
- Always visible in bottom right corner
- AI-powered chatbot mockup
- Asks if user has worked with a loan officer before
- Inline search for finding their loan officer
- Can route to loan officer page

### Lead Form
- Fields: Loan Type, Amount, Credit Score, Down Payment/Equity, Property Address, Contact Info
- "Have you worked with a loan officer?" question with inline search
- Confirmation page after submission
- Posts to CRM (simulated)

### Find a Loan Officer
- Search by: Name, Location, Zip Code, Specialty, Language
- Autocomplete suggestions as user types
- Filters: Specialty, Language, Availability
- Results: Maximum 10 per page with pagination
- Cards display: Photo, Name, NMLS, Title, Rating, Specialties, Languages

### Loan Officer Landing Page
- Complete profile with photo, bio, specialties, reviews
- CTAs:
  - **Get Started** - Opens lead form
  - **Start Your Application** - Links to external POS system
  - **Schedule a Call** - Links to scheduling app
  - **Chat** - Bottom right widget (always visible)
- Branch information
- Licenses and credentials

### Branch Page
- Branch contact information and location
- Loan officer cards with filters
- Same filtering options as Find a Loan Officer page
- Direct access to each loan officer's profile

## Mock Data

The prototype includes:
- **10 Loan Officers** with diverse specialties, languages, and experience
- **5 Branches** across different cities
- Realistic profile data, ratings, and reviews
- Various specialties: First-Time Homebuyers, VA Loans, Jumbo Loans, Refinancing, etc.
- Multiple languages: English, Spanish, Mandarin, Korean, Vietnamese, Portuguese, French

## User Experience Features

### State Management
- Selected loan officer persists across pages using React Context
- User selections maintained throughout the journey

### Responsive Design
- Mobile-friendly interface
- Responsive grid layouts
- Adaptive navigation

### Visual Mockups
- Chat widget is a visual mockup with simulated responses
- Forms don't actually submit but show confirmation page
- External links (POS, Scheduling) are mocked

## Documentation

See `USER_JOURNEYS.md` for detailed Mermaid diagrams of all 4 user journeys with decision points and interactions.

## Development Notes

- All components use TypeScript for type safety
- Tailwind CSS utility classes for styling
- Mock data in `/lib/mockData.ts` can be easily replaced with API calls
- State management is simple but can be scaled to Redux or Zustand if needed

## Future Enhancements

- Real API integration for loan officers and branches
- Actual chat integration (Intercom, Drift, or custom)
- Real form submission to CRM
- Authentication for returning users
- Loan officer dashboard
- Calendar integration for scheduling
- Email notifications
- Analytics tracking

## License

This is a prototype for demonstration purposes.
