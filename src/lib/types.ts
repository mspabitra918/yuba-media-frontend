export type ApplicantStatus = "new" | "review" | "interview" | "rejected";

export interface Applicant {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  location: string;
  cvUrl: string;
  coverLetter: string | null;
  linkedinUrl: string | null;
  availability: string | null;
  status: ApplicantStatus;
  created_at: string;
  updated_at: string;
}

export interface ApplicantStats {
  total: number;
  newThisWeek: number;
  underReview: number;
  interview: number;
}

export type InquiryType = "client" | "general";

export interface Lead {
  id: string;
  fullName: string;
  email: string;
  company: string | null;
  phone: string | null;
  inquiryType: InquiryType;
  message: string;
  crmSynced: boolean;
  created_at: string;
  updated_at: string;
}

export const POSITIONS = [
  "Voice Process Agent",
  "Voice Trainer",
  "Team Leader — Voice Ops",
  "Sales Development Representative (SDR)",
  "Quality Analyst — Voice",
] as const;

export const STATUSES: { value: ApplicantStatus; label: string }[] = [
  { value: "new", label: "New" },
  { value: "review", label: "In Review" },
  { value: "interview", label: "Interview" },
  { value: "rejected", label: "Rejected" },
];
