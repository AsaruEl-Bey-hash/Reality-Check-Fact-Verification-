import type { ClaimCheck, EvidenceSource, VerificationGuide, VerificationStatus } from "../data/verification";
import { validateStatus } from "../utils/verdict";
export interface EvidenceProvider { search(claim: string): Promise<EvidenceSource[]> }
export interface VerificationRecord { check: ClaimCheck; evidence: EvidenceSource[]; completedAt: string; editorialDecision: "PENDING_HUMAN_REVIEW" }
/** Uses configured providers only; never invents sources or implies a search ran when no provider exists. */
export async function checkClaim(input: { claim: string; evidenceProvider: EvidenceProvider; guide: VerificationGuide }): Promise<VerificationRecord> {
  const claim = input.claim.trim(); if (!claim) throw new Error("Enter a claim to check.");
  const evidence = await input.evidenceProvider.search(claim); const check = await input.guide.analyze(claim, evidence);
  const errors = validateStatus(check.status, evidence); if (errors.length) throw new Error(errors.join(" "));
  return { check: { ...check, humanReviewRequired: true }, evidence, completedAt: new Date().toISOString(), editorialDecision: "PENDING_HUMAN_REVIEW" };
}
export const STATUS_GROUPS: Record<VerificationStatus, string> = {
  CONFIRMED: "Supported by multiple independent sources", PARTIALLY_CONFIRMED: "Some parts supported; others unresolved", DISPUTED: "Credible sources disagree; evidence does not resolve it", CONTRADICTED: "Traceable evidence conflicts with the claim", FALSE: "Direct, cited evidence establishes the claim is false", UNVERIFIED: "Available evidence is not enough to decide", INSUFFICIENT_EVIDENCE: "Sources or context are missing",
};
