# Architecture

> Placeholder — fill in as the system takes shape.

## High-level overview

Reality-Check is a fact-verification system. Conceptually it moves a **claim**
through a pipeline of **sources** and **verification** records into a final
**verdict**.

```
Claim ──▶ Source gathering ──▶ Verification ──▶ Verdict
```

## Components (to be defined)

- **Intake** — how a claim enters the system (form, import, API).
- **Sourcing** — how supporting and contradicting sources are collected.
- **Verification** — the logic that weighs evidence toward a verdict.
- **Storage** — persistence of claims, sources, and verifications.
- **Presentation** — how users view a claim and its verdict.

## Cross-cutting concerns

- **Credibility & citation** — every verdict must trace back to sources.
- **Reproducibility** — store inputs/outputs so a verdict can be re-derived.
- **Auditability** — keep an audit trail of who changed a verdict and why.
- **Uncertainty** — not every claim resolves cleanly; a verdict can be
  `MIXED`, `UNVERIFIED`, or `PENDING`.

## Non-functional targets

- (TBD: latency, throughput, data retention, accessibility, etc.)

See [`domain-model.md`](./domain-model.md) for entities and
[`data-sources.md`](./data-sources.md) for sourcing strategy.
