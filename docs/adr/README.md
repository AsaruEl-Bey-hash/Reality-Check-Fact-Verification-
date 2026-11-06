# Architecture Decision Records (ADRs)

ADRs record significant decisions: context, the decision, and consequences.

- One file per decision, numbered sequentially: `00NN-<short-title>.md`.
- Once written, an ADR is **immutable** — make a new one to reverse it, and
  reference the old one with a `Superseded by:` line.
- Keep each ADR short: a decision a future reader can act on in minutes.

## Format

```
# <NNNN>. <Short title>
Status: proposed | accepted | superseded
Context: <why we're deciding now, what problem is driving it>
Decision: <what we decided>
Consequences: <trade-offs, costs, risks, follow-ups>
```

## Index

- [0001 — Record decisions in markdown ADRs](./0001-record-decisions-in-markdown.md)
