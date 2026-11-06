# Contributing

Thanks for helping build Reality-Check. Keep these in mind.

## Before you start

- Read [`README.md`](./README.md) and [`docs/architecture.md`](./docs/architecture.md).
- Open a new issue (or comment on an existing one) for anything non-trivial.

## Ground rules

- **Cite every verdict.** A conclusion without a source is not a verdict.
- **Keep evidence traceable.** Preserve canonical URLs, integrity hashes, and an
  access time for sources.
- **Prefer reproducible changes.** A verdict should be re-derivable from its inputs.
- **Preserve history.** Add a new verification rather than rewriting an old one.

## Workflow

1. Branch from `main` (e.g. `feat/…`, `fix/…`, `docs/…`).
2. Keep commits small and focused; write clear, imperative messages.
3. Add or update tests alongside new logic.
4. Record anything non-obvious as an
   [ADR](./docs/adr/README.md) under `docs/adr/`.
5. Open a pull request; link the issue it closes.

## Commit & PR conventions

- Conventional Commits style: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`.
- One logical change per PR; describe *why*, not just *what*.

## Setup

```bash
cp .env.example .env
# pick a stack, add the build/config files, then install deps
```

When in doubt, leave a note — it helps the next person more than a silent guess.
