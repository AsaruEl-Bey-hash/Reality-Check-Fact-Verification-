# Domain Model

> Candidate entities for the fact-verification domain. A starting point, not a
> final schema — refine as implementation proceeds.

## Enum — `Verdict`

The final disposition of a verification. Extend deliberately; each value needs
its own meaning and UI treatment.

| Value        | Meaning                                                        |
|--------------|---------------------------------------------------------------|
| `TRUE`       | The claim is accurate.                                          |
| `FALSE`      | The claim is inaccurate.                                        |
| `MOSTLY_TRUE`| The claim is accurate on the main point but has caveats.         |
| `MOSTLY_FALSE`| The claim is inaccurate on the main point but has caveats.        |
| `MIXED`      | Different parts of the claim have different verdicts.            |
| `MISLEADING` | Accurate but framed to mislead.                                 |
| `UNVERIFIED` | Insufficient evidence to resolve.                               |
| `PENDING`    | Not yet reviewed.                                               |

## Entity — `Claim`

| Field        | Type       | Notes                                  |
|--------------|------------|----------------------------------------|
| `id`         | string      | Primary key.                            |
| `statement`  | string      | The claim being verified.               |
| `category`   | enum/str    | e.g. politics, science, health, finance.|
| `submittedBy`| string/UUID | Author or origin.                       |
| `submittedAt`| timestamp   | When it entered the system.             |
| `status`     | enum        | `PENDING`, `IN_REVIEW`, `RESOLVED`.    |

## Entity — `Source`

| Field             | Type      | Notes                              |
|-------------------|-----------|------------------------------------|
| `id`              | string    | Primary key.                        |
| `title`           | string    | Human-readable title.              |
| `url`             | string    | Canonical, dedup-able identifier.   |
| `publisher`       | string    | Domain/publisher.                   |
| `credibilityTier` | enum      | `PRIMARY`, `RELIABLE`, `SECONDARY`,`UNSUPPORTED`. |
| `accessedAt`      | timestamp | When fetched — sources rot.          |
| `content`/`hash`  | text/hash | Captured content + integrity hash.   |

## Entity — `Verification`

| Field                | Type         | Notes                                |
|----------------------|--------------|--------------------------------------|
| `id`                 | string        | Primary key.                          |
| `claimId`            | string (FK)   | References `Claim`.                   |
| `verdict`            | `Verdict`     | Final disposition.                    |
| `confidence`         | float 0–1    | How confident the analysis is.          |
| `summary`            | text         | Plain-language rationale.              |
| `supportingSources`  | `Source[]`   | Evidence that supports the claim.       |
| `contradictingSources`| `Source[]`  | Evidence that refutes the claim.        |
| `verifier`           | string/UUID   | Human or system that issued it.         |
| `createdAt`          | timestamp     |                                       |
| `updatedAt`          | timestamp     |                                       |

## Invariants

- A `Claim` may have one active `Verification`; supersede the old one on change
  rather than mutating history (keep it auditable).
- A non-`UNVERIFIED`/`PENDING` verdict must have at least one source.
- Every source must be traceable (URL + integrity hash + access time).
