# CLAUDE.md: DSRRS fork of MatchReadyTX

## Who this is for

This repo is the **Deep South Rugby Referee Society (DSRRS)** copy of MatchReadyTX, an open-source (MIT) referee scheduling PWA built by Justin X. Hale for the Lonestar Group in Texas. Upstream: `github.com/JustinXHale/matchReadyTX`.

**DSRRS** is a small, volunteer-led nonprofit referee society. It has roughly 10–25 referees covering **Louisiana, Mississippi, Alabama, and the Florida Panhandle**. It operates within USA Rugby (national) and True South Rugby Union (territorial). It serves men's and women's club 15s and 7s, plus youth and high school rugby. It does **not** handle NCR collegiate assignments.

The maintainer is the DSRRS Secretary, acting as volunteer technical admin. He is an engineer but **new to software development**:
- Explain commands in plain language.
- Prefer small, reviewable changes.
- Ask before anything destructive or hard to undo.
- He works on **Windows (PowerShell / VS Code)**. Give Windows commands.

## Goals

1. **Pilot in spring 2027** with 3–5 clubs. Full roll-out for fall 2027 if the executive committee approves.
2. **Replace email-based referee requests** with one official channel. Only referees assigned through the DSRRS Assignments Officer are covered by society insurance.
3. **Shift fixture confirmation to clubs.** Home and away clubs confirm before a crew is assigned.
4. **Support referee development.** Use the level-based grading system (Level 6 / C1+ to Level 10 / C4) through coaching reports, coach feedback, and Insights.
5. **Stay close to upstream** so Justin's updates can be pulled in. Keep DSRRS changes mostly to configuration, and avoid deep code rewrites.

## DSRRS configuration (differs from Texas defaults)

- **Org ID:** `dsrrs` (upstream default is `lonestar`)
- **Promotions strip:** off (`VITE_PROMOTIONS_ENABLED=false`)
- **Competitions:** True South men's/women's competitions replace "Lonestar Men/Women"
- **Travel rule:** Gulf South cities (New Orleans, Baton Rouge, Mobile, Pensacola, etc.) replace the Dallas/Houston/Austin/San Antonio rule
- **Timezone:** America/Chicago (same as upstream)
- **Fees (effective Jan 1, 2026):** Center $130, AR $35, **$200 maximum per team**, plus mileage reimbursement for long trips
- **Payment model (pilot):** clubs pay referees directly. The Finance module is ledger-only or off. The app never moves money.
- **Judicial module:** off for the pilot. Discipline belongs to True South.
- **Assistant referees:** appointed only for heavyweight games, championship games, or recreational courses
- **Report retention:** match and card reports are kept 3 seasons, then deleted (promised in the DSRRS privacy policy). The app has **no automatic purge** for reports, so this is a manual off-season task unless one is built.
- **Card reports** go to the commissioner of the league the match was in. No data is shared with True South or USA Rugby.
- **Under-18 referees:** likely some. The privacy policy allows ages 13–17 with written parent/guardian consent, collected by DSRRS at society registration. The app itself has **no age check or consent step**, so consent is tracked outside the app.

## Environments and safety rules

- **Never deploy to `matchreadytx`** (Justin's production project). Check `firebase use` before any `firebase deploy`.
- Testing uses a separate Firebase project (e.g. `dsrrs-matchready-test`). Production will be a society-owned project.
- **Never commit secrets:**
  - `.env.local`
  - service-account JSON
  - files in `keys/`
  - Resend keys
  - webhook secrets

  Function secrets live in Firebase Secret Manager.
- All accounts (Firebase, GitHub, Google Sheet, Resend) should be **society-owned**, not personal.
- Deploy midweek or off-season, **never on a match weekend**.

## Key docs in this repo

- `README.md`: setup, demo path, deploy steps
- `docs/SHEET_SYNC.md`: Google Sheet contract (`Schedule` tab columns) and service account setup
- `docs/EMAIL.md`: Resend email setup
- `docs/PRD.md`, `docs/IMPLEMENTATION_SPEC.md`: product and technical spec

## Current status (Nov 2026)

- Repo cloned locally. Node.js installed.
- Next: run the local demo (`npm install`, then `npm run dev`).
- Then: create a test Firebase project, fill in `.env.local`, and deploy rules.
- Then: connect a test Sheet and Functions.
