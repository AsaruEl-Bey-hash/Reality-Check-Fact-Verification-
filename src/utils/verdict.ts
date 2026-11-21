import type { EvidenceSource, VerificationStatus } from "../data/verification";
function isTraceable(source: EvidenceSource): boolean {
  try { const url = new URL(source.url); return ["https:", "http:"].includes(url.protocol) && Boolean(source.publisher.trim()); }
  catch { return false; }
}
export function hasTraceableEvidence(sources: EvidenceSource[]): boolean { return sources.some(isTraceable); }
/** FALSE requires direct, traceable disproof; disagreement alone is CONTRADICTED or DISPUTED. */
export function validateStatus(status: VerificationStatus, evidence: EvidenceSource[]): string[] {
  const traceable = evidence.filter(isTraceable); const errors: string[] = [];
  if (["CONFIRMED", "PARTIALLY_CONFIRMED", "CONTRADICTED", "FALSE"].includes(status) && !traceable.length) errors.push(`${status} requires at least one traceable evidence source.`);
  if (status === "FALSE" && !traceable.some((source) => source.role === "CONTRADICTS")) errors.push("FALSE requires direct, cited evidence that contradicts the claim.");
  return errors;
}
export function requiresHumanReview(_status: VerificationStatus): true { return true; }
