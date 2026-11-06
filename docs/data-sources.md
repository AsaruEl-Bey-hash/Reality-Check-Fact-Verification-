# Data Sources

> Registry of where evidence comes from and how trustworthy it is.
> No providers are wired up yet — this is a planning document.

## Principles

- **Traceability** — every source must resolve to a canonical URL + hash.
- **Staleness awareness** — record `accessedAt`; flag sources that have moved.
- **Diversity** — corroborate across independent sources; prefer primary ones.
- **No uncredited assertions** — a verdict without a source is a hallucination.

## Tiers

| Tier        | Examples                                       | Use for            |
|-------------|------------------------------------------------|--------------------|
| `PRIMARY`   | Official records, datasets, legal filings      | Authoritative facts |
| `RELIABLE`  | Reputable news, academic, expert analysis      | Corroboration       |
| `SECONDARY` | Aggregators, encyclopedic content              | Background context  |
| `UNSUPPORTED`| Unverifiable, promotional, anonymous           | Treat with caution  |

## Candidate providers (TBD)

- [ ] News / wire services
- [ ] Encyclopedic reference
- [ ] Scientific / academic
- [ ] Government / official datasets
- [ ] Existing fact-checkers (for cross-reference, not blind trust)

> Note: cross-checking an existing fact-checker is useful, but an independent
> verification should not blindly inherit its verdict.
