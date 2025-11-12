# Loan Officer Experience - User Journeys

## Journey 1: Referred User with LO Name Only

**Context:** User has a loan officer's name from a friend's referral

```mermaid
graph TD
    A[User arrives on Home Page] --> B[Uses Find a Loan Officer in Navigation]
    B --> C[Search by LO Name with Autocomplete]
    C --> D[LO Search Results Page]
    D --> E[Click on Loan Officer]
    E --> F[Loan Officer Landing Page]

    F --> G1[Start Chat - Bottom Right]
    F --> G2[Get Started - Lead Form]
    F --> G3[Start Your Application - POS]
    F --> G4[Schedule a Call]

    G1 --> H1[Chat Widget Opens]
    H1 --> I1[Contextual conversation with LO context]

    G2 --> H2[Lead Form Modal/Page]
    H2 --> I2[Fill Purchase/Refi, Amount, Credit, etc.]
    I2 --> J2[Submit to CRM with LO Assignment]
    J2 --> K2[Confirmation Page]

    G3 --> H3[External POS System]
    H3 --> I3[LO Personal URL Pre-loaded]

    G4 --> H4[External Scheduling App]
    H4 --> I4[LO Calendar Integration]

    style F fill:#e1f5ff
    style G1 fill:#fff4e1
    style G2 fill:#fff4e1
    style G3 fill:#fff4e1
    style G4 fill:#fff4e1
```

## Journey 2: Direct Google Search to LO Landing Page

**Context:** User googles loan officer's name and lands directly on their page

```mermaid
graph TD
    A[Google Search: Loan Officer Name] --> B[Lands on LO Landing Page]

    B --> C1[Start Chat]
    B --> C2[Get Started - Lead Form]
    B --> C3[Start Your Application - POS]

    C1 --> D1[Chat Widget Opens]
    D1 --> E1[AI asks: Worked with LO before?]
    E1 --> F1A[Yes - Already on correct LO page]
    E1 --> F1B[No - Continue with current LO]
    F1A --> G1[Continue conversation]
    F1B --> G1

    C2 --> D2[Lead Form Opens]
    D2 --> E2[Shows: Worked with LO before?]
    E2 --> F2A[Yes - Inline search for different LO]
    E2 --> F2B[No - Continue with current LO]
    F2A --> G2A[Select different LO, update context]
    F2B --> G2B[Keep current LO]
    G2A --> H2[Fill form: Purchase/Refi, Amount, etc.]
    G2B --> H2
    H2 --> I2[Submit to CRM]
    I2 --> J2[Confirmation Page]

    C3 --> D3[External POS System]
    D3 --> E3[LO Personal URL]

    style B fill:#e1f5ff
    style C1 fill:#fff4e1
    style C2 fill:#fff4e1
    style C3 fill:#fff4e1
```

## Journey 3: Google Search Leads to Branch Page

**Context:** User searches "mortgage broker near me" and finds a branch location

```mermaid
graph TD
    A[Google: mortgage broker near me] --> B[Lands on Branch Page]

    B --> C1[Start Chat - Bottom Right]
    B --> C2[Uses Find a Loan Officer]
    B --> C3[Browse LO Cards on Branch Page]
    B --> C4[Fill Lead Form]

    C1 --> D1[Chat Widget Opens]
    D1 --> E1[AI asks: Worked with LO before?]
    E1 --> F1A[Yes - Inline name search]
    E1 --> F1B[No - Proceed without LO]
    F1A --> G1A[Select LO, route to LO page]
    F1B --> G1B[Continue chat, CRM assigns LO]

    C2 --> D2[Find LO Search Modal/Page]
    D2 --> E2[Search by: Name, Location, Specialty, Language]
    E2 --> F2[Filtered Results - Max 10 per page]
    F2 --> G2[Click LO Card]
    G2 --> H2[LO Landing Page]

    C3 --> D3[Filter LOs on Branch Page]
    D3 --> E3[By Specialty, Language, Availability]
    E3 --> F3[Click LO Card]
    F3 --> G3[LO Landing Page]

    C4 --> D4[Lead Form Opens]
    D4 --> E4[Asks: Worked with LO before?]
    E4 --> F4A[Yes - Inline search]
    E4 --> F4B[No - Proceed]
    F4A --> G4[Fill form with LO context]
    F4B --> G4
    G4 --> H4[Submit to CRM]
    H4 --> I4[Confirmation Page]

    style B fill:#e1f5ff
    style C1 fill:#fff4e1
    style C2 fill:#fff4e1
    style C3 fill:#fff4e1
    style C4 fill:#fff4e1
```

## Journey 4: User Without LO Preference

**Context:** User arrives on home page without a specific loan officer in mind

```mermaid
graph TD
    A[User arrives on Home Page] --> B1[Start Chat]
    A --> B2[Fill Lead Form]
    A --> B3[Use Find a Loan Officer]
    A --> B4[Browse to Branch Page]

    B1 --> C1[Chat Widget Opens]
    C1 --> D1[AI asks: Worked with LO before?]
    D1 --> E1A[Yes - Inline name search]
    D1 --> E1B[No - Proceed without LO]
    E1A --> F1A[Shows search results inline]
    F1A --> G1A[Select LO, route to LO page]
    E1B --> F1B[Continue conversation]
    F1B --> G1B[CRM assigns LO based on logic]

    B2 --> C2[Lead Form Opens]
    C2 --> D2[Shows: Worked with LO before?]
    D2 --> E2A[Yes - Inline search]
    D2 --> E2B[No - Continue]
    E2A --> F2A[Search and select LO]
    E2B --> F2B[Proceed without selection]
    F2A --> G2[Fill form: Purchase/Refi, Amount, Credit, etc.]
    F2B --> G2
    G2 --> H2[Submit to CRM with/without LO]
    H2 --> I2[Confirmation Page]
    I2 --> J2[LO assigned by CRM if not selected]

    B3 --> C3[Find LO Feature]
    C3 --> D3[Search by Name, Location, Specialty, Language]
    D3 --> E3[Results with autocomplete]
    E3 --> F3[Max 10 results per page]
    F3 --> G3[Click on LO]
    G3 --> H3[LO Landing Page]

    B4 --> C4[Browse Branches]
    C4 --> D4[Select Branch]
    D4 --> E4[Branch Page with LO Cards]
    E4 --> F4[Filter/Browse LOs]
    F4 --> G4[Click LO Card]
    G4 --> H4[LO Landing Page]

    style A fill:#e1f5ff
    style B1 fill:#fff4e1
    style B2 fill:#fff4e1
    style B3 fill:#fff4e1
    style B4 fill:#fff4e1
```

## Key Interaction Points

### Chat Widget
- Always visible in bottom right corner
- AI-powered chatbot
- Always asks: "Have you worked with a loan officer before?"
- If yes: Inline name search to find their LO
- If no: Proceed with conversation, CRM handles assignment
- Can route to LO Landing Page

### Lead Form Fields
1. **Loan Type:** Purchase or Refinance
2. **Loan Amount:** Dollar input
3. **Credit Score:** Self-assessment (Excellent, Good, Fair, Poor)
4. **Down Payment / Equity:** Percentage or dollar amount
5. **Property Address:** Address autocomplete
6. **Contact Information:** Name, Email, Phone
7. **LO Selection:** "Have you worked with a loan officer?" (Yes/No with inline search)

### Find a Loan Officer Search
- **Search Fields:** Name, Location, Zip Code, Specialty, Language
- **Autocomplete:** As user types
- **Results:** Maximum 10 per page with pagination
- **Display:** Card format with photo, name, NMLS, title, contact, specialties

### Loan Officer Landing Page CTAs
1. **Chat:** Bottom right widget (always visible)
2. **Get Started:** Opens lead form
3. **Start Your Application:** Links to external POS system (LO personal URL)
4. **Schedule a Call:** Links to LO scheduling app

### Assignment Logic
When user proceeds **without** selecting a loan officer:
- Form/chat data submitted to CRM
- CRM assigns LO based on:
  - Geography
  - Availability
  - Specialization match
  - Round-robin or custom business rules
