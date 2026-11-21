# Reality-Check — Fact Verification

> A framework-agnostic starter for a fact-verification system: take a **claim**,
> gather **sources**, produce an evidence-backed **verdict**.

Status: **scaffold / boilerplate** — structure and documentation only, no
framework-specific code or build config yet. Pick a stack before adding any.

---

## What this is

R3ALITY CHECK is the shared mentor and evidence-checking workflow used by all six REBEL RELAY agents from their specialist desks. ECHO specializes in verification and media provenance. It turns factual assertions into citable evidence records. Human editors own the final classification and publication; human viewers can inspect published classifications, evidence, rationale, and limitations.

The core pipeline:

```
Claim ──▶ Source gathering ──▶ Verification ──▶ Verdict
        (TRUE / FALSE / MIXED / UNVERIFIED / PENDING …)
```

See [`docs/domain-model.md`](./docs/domain-model.md) for the entities and
[`docs/architecture.md`](./docs/architecture.md) for the design.

## Getting started

```bash
# 1. Configure the environment
cp .env.example .env      # then fill in values for .env

# 2. Install dependencies        # once a stack is chosen + package manifest added

# 3. Run                         # e.g. tests, a server, a worker
```

> No build manifest (`package.json`, `requirements.txt`, …) is committed yet.
> Decide on a stack and add the corresponding files.

## Repository layout

```
.
├── .env.example        # template for local environment variables
├── .gitignore         # keeps secrets + build output out of version control
├── .gitattributes      # line-ending + binary handling
├── .editorconfig       # editor/whitespace consistency
├── LICENSE
├── README.md
├── CONTRIBUTING.md
├── docs/               # architecture, domain model, data sources, ADRs
│   ├── architecture.md
│   ├── domain-model.md
│   ├── data-sources.md
│   └── adr/
├── src/                # application code (see src/README.md)
│   ├── components/
│   ├── services/
│   ├── data/
│   └── utils/
├── tests/              # unit + integration
│   ├── unit/
│   └── integration/
└── scripts/            # operational scripts (seeds, migrations)
```

## Roadmap / next steps

- [ ] Choose a stack and add the matching build/config files.
- [ ] Model one end-to-end claim: intake → sourcing → verdict.
- [ ] Implement a `Verdict` type and the sourcing contract.
- [ ] Add the first integration test for the pipeline.
- [ ] Define credentials, secrets handling, and CI.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

[MIT](./LICENSE).
