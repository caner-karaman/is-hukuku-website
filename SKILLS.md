# Repository Skills & Rules

This document outlines specific rules and skills required for working on this repository.

## Package Management
- **Preferred Manager:** `yarn`
- **Rule:** Always use `yarn` for installing packages, removing packages, and running scripts. Avoid `npm` and `pnpm` unless explicitly instructed.
- **Commands:**
  - Install: `yarn install`
  - Add package: `yarn add <package>`
  - Run script: `yarn <script>`

## Environment Guidelines
- If `yarn` or `node` are not found in the default `PATH`, they are likely located in `/opt/homebrew/bin/`. Ensure this path is included when running terminal commands.

## Architecture & Framework
- This project uses **Next.js** with **React 19**.
- Follow the rules defined in [AGENTS.md](file:///Users/canerkaraman/workspace/websites/is-hukuku-website/AGENTS.md) regarding Next.js version-specific constraints.
