import { Home, Briefcase, Building2, Car, User, GraduationCap } from "lucide-react";

export const loanTypes = [
  {
    id: "home-loan",
    title: "Home Loan",
    icon: Home,
    shortDesc: "Make your dream home a reality",
    description: "Finance your dream home with competitive interest rates. Whether you're buying a new property, constructing a house, or renovating your existing home.",
    amountRange: "₹5 Lakh - ₹5 Crore",
    benefits: [
      "Competitive interest rates starting from 8.35% p.a.",
      "Loan tenure up to 30 years",
      "Quick processing within 7-10 days",
      "Tax benefits under Section 80C & 24(b)"
    ],
    eligibility: [
      "Age: 21-65 years",
      "Minimum income: ₹25,000/month (Salaried)",
      "Minimum income: ₹3 Lakh/year (Self-employed)",
      "Good CIBIL score (700+)"
    ],
    documents: {
      salaried: [
        "PAN Card & Aadhaar Card",
        "Last 3 months salary slips",
        "Last 6 months bank statements",
        "Form 16 / IT Returns (2 years)",
        "Property documents",
        "Passport size photos"
      ],
      selfEmployed: [
        "PAN Card & Aadhaar Card",
        "Business proof (GST/Registration)",
        "Last 3 years IT Returns with computation",
        "Last 12 months bank statements",
        "Profit & Loss, Balance Sheet (CA certified)",
        "Property documents"
      ]
    }
  },
  {
    id: "business-loan",
    title: "Business Loan",
    icon: Briefcase,
    shortDesc: "Fuel your business growth",
    description: "Get funds to expand your business, manage working capital, purchase equipment, or meet any business requirement without pledging collateral.",
    amountRange: "₹1 Lakh - ₹50 Lakh",
    benefits: [
      "Unsecured loans - no collateral needed",
      "Quick disbursal within 48-72 hours",
      "Flexible repayment options",
      "Minimal documentation required"
    ],
    eligibility: [
      "Business vintage: 2+ years",
      "Annual turnover: ₹10 Lakh+",
      "Profitable for last 2 years",
      "Good CIBIL score (650+)"
    ],
    documents: {
      salaried: [],
      selfEmployed: [
        "PAN Card & Aadhaar Card",
        "Business registration proof (GST/Udyam)",
        "Last 2 years IT Returns",
        "Last 12 months bank statements",
        "Business vintage proof",
        "Office address proof"
      ]
    }
  },
  {
    id: "mortgage-loan",
    title: "Loan Against Property",
    icon: Building2,
    shortDesc: "Unlock your property's value",
    description: "Use your residential or commercial property as collateral to get funds for any purpose - business expansion, education, medical expenses, or debt consolidation.",
    amountRange: "₹10 Lakh - ₹10 Crore",
    benefits: [
      "Lower interest rates (9-12% p.a.)",
      "Higher loan amounts (up to 70% of property value)",
      "Long tenure up to 15 years",
      "Use funds for any purpose"
    ],
    eligibility: [
      "Age: 25-65 years",
      "Clear property title",
      "Property in approved location",
      "Stable income source"
    ],
    documents: {
      salaried: [
        "PAN Card & Aadhaar Card",
        "Last 6 months salary slips",
        "Last 12 months bank statements",
        "Form 16 / IT Returns (2 years)",
        "Complete property documents",
        "Property valuation report"
      ],
      selfEmployed: [
        "PAN Card & Aadhaar Card",
        "Last 3 years IT Returns",
        "Last 12 months bank statements",
        "Business proof documents",
        "Complete property documents",
        "Property valuation report"
      ]
    }
  },
  {
    id: "car-loan",
    title: "Car Loan",
    icon: Car,
    shortDesc: "Drive your dream car home",
    description: "Finance your new or used car with attractive interest rates and flexible EMI options. Get on-road funding with quick approval.",
    amountRange: "₹1 Lakh - ₹1 Crore",
    benefits: [
      "Up to 100% on-road funding",
      "Low interest rates from 7.5% p.a.",
      "Tenure up to 7 years",
      "Quick approval within 24 hours"
    ],
    eligibility: [
      "Age: 21-65 years",
      "Minimum income: ₹20,000/month",
      "Stable employment (1+ year)",
      "CIBIL score: 700+"
    ],
    documents: {
      salaried: [
        "PAN Card & Aadhaar Card",
        "Last 3 months salary slips",
        "Last 3 months bank statements",
        "Address proof",
        "Car quotation from dealer",
        "Passport size photos"
      ],
      selfEmployed: [
        "PAN Card & Aadhaar Card",
        "Last 2 years IT Returns",
        "Last 6 months bank statements",
        "Business proof documents",
        "Car quotation from dealer",
        "Address proof"
      ]
    }
  },
  {
    id: "personal-loan",
    title: "Personal Loan",
    icon: User,
    shortDesc: "For all your personal needs",
    description: "Get instant funds for medical emergencies, weddings, travel, home renovation, or any personal requirement. No collateral, no questions asked.",
    amountRange: "₹50,000 - ₹40 Lakh",
    benefits: [
      "100% unsecured - no collateral",
      "Instant approval within minutes",
      "Flexible EMI options",
      "No end-use restrictions"
    ],
    eligibility: [
      "Age: 21-58 years",
      "Minimum income: ₹25,000/month",
      "Employment: 1+ year current job",
      "CIBIL score: 700+"
    ],
    documents: {
      salaried: [
        "PAN Card & Aadhaar Card",
        "Last 3 months salary slips",
        "Last 3 months bank statements",
        "Current employment proof",
        "Address proof",
        "Passport size photo"
      ],
      selfEmployed: [
        "PAN Card & Aadhaar Card",
        "Last 2 years IT Returns",
        "Last 6 months bank statements",
        "Business registration proof",
        "Office address proof",
        "CA certified financials"
      ]
    }
  },
  {
    id: "education-loan",
    title: "Education Loan",
    icon: GraduationCap,
    shortDesc: "Invest in your future",
    description: "Fund your higher education in India or abroad. Cover tuition fees, living expenses, travel, and other education-related costs.",
    amountRange: "₹50,000 - ₹1.5 Crore",
    benefits: [
      "Cover full education expenses",
      "Moratorium period during study",
      "Tax benefit under Section 80E",
      "Attractive interest rates"
    ],
    eligibility: [
      "Admission in recognized institution",
      "Co-applicant (parent/guardian) required",
      "Good academic record",
      "Collateral for loans above ₹7.5 Lakh"
    ],
    documents: {
      salaried: [
        "Student's PAN & Aadhaar",
        "Co-applicant's PAN & Aadhaar",
        "Admission letter from institution",
        "Fee structure from institution",
        "Academic mark sheets (10th, 12th, Graduation)",
        "Co-applicant income proof",
        "Collateral documents (if required)"
      ],
      selfEmployed: [
        "Student's PAN & Aadhaar",
        "Co-applicant's PAN & Aadhaar",
        "Admission letter from institution",
        "Fee structure from institution",
        "Academic mark sheets",
        "Co-applicant's IT Returns & financials",
        "Collateral documents (if required)"
      ]
    }
  }
];

export const trustBadges = [
  { number: "10+", label: "Years Experience" },
  { number: "50+", label: "Bank Partners" },
  { number: "10,000+", label: "Happy Customers" },
  { number: "₹500Cr+", label: "Loans Disbursed" }
];

export const rejectionReasons = [
  {
    reason: "Low CIBIL Score",
    tip: "Maintain a score above 700. Pay EMIs on time and avoid multiple loan applications."
  },
  {
    reason: "Incomplete Documents",
    tip: "Ensure all documents are complete, legible, and up to date before applying."
  },
  {
    reason: "High Existing Debt",
    tip: "Keep your debt-to-income ratio below 50%. Pay off existing loans if possible."
  },
  {
    reason: "Employment Instability",
    tip: "Maintain stable employment. Frequent job changes can affect approval."
  },
  {
    reason: "Property Issues",
    tip: "Ensure property has clear title and is in an approved location."
  },
  {
    reason: "Incorrect Information",
    tip: "Provide accurate information. Discrepancies lead to rejection."
  }
];
