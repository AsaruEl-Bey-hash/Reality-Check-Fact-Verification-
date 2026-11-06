# 0001. Record decisions in markdown ADRs

Status: accepted
Superseded by: —

## Context

As Reality-Check grows, non-obvious choices (storage, sourcing strategy, how a
verdict is derived) need to be recorded so a future contributor can understand
*why* something exists, not just *what* it does.

## Decision

Record significant decisions as small, immutable Markdown files in
`docs/adr/`, numbered sequentially, following the
[context / decision / consequences](./README.md) format.

## Consequences

- Pros: durable, searchable rationale; low overhead; no special tooling.
- Cons: can be skipped if not enforced in review; keeps growing.
- Follow-up: add a link from the relevant code/doc to the ADR when one applies.
