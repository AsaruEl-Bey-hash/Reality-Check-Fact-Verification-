/** Shared domain contracts for the R3ALITY CHECK evidence workflow. */
export const VERIFICATION_STATUSES = ["CONFIRMED", "PARTIALLY_CONFIRMED", "DISPUTED", "CONTRADICTED", "FALSE", "UNVERIFIED", "INSUFFICIENT_EVIDENCE"] as const;
export type VerificationStatus = (typeof VERIFICATION_STATUSES)[number];
export type EvidenceRole = "SUPPORTS" | "CONTRADICTS" | "CONTEXT";
export type SourceTier = "PRIMARY" | "RELIABLE" | "SECONDARY" | "UNSUPPORTED";
export interface EvidenceSource { title: string; url: string; publisher: string; role: EvidenceRole; tier: SourceTier; accessedAt: string; excerpt?: string }
export interface ClaimCheck { claim: string; status: VerificationStatus; confidence: number | null; rationale: string; supportingEvidence: EvidenceSource[]; contradictingEvidence: EvidenceSource[]; unresolvedQuestions: string[]; humanReviewRequired: true }
export interface VerificationGuide { /** ECHO guides the editor through evidence checks; it does not publish a verdict. */ analyze(claim: string, evidence: EvidenceSource[]): Promise<ClaimCheck> }
