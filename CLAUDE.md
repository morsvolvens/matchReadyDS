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

## Current status (Nov 15, 2026)

Work is on branch `dsrrs/rebrand` (not pushed; check whether `origin` is the society's repo or a colleague's before pushing).

### Done
- **Branding via env vars** (`src/config/brand.ts`, defaults keep upstream behavior): `VITE_APP_NAME=matchReadyDS`, `VITE_PUBLIC_CONTACT_EMAIL`, `VITE_BRAND_ICON_DIR=/brand/dsrrs` (seal logo + app icons in `public/brand/dsrrs/`). `IS_DSRRS` (from `VITE_DEFAULT_ORG_ID=dsrrs`) switches in DSRRS text for the privacy policy, About page and sign-in "about" section.
- **Privacy policy:** DSRRS draft in `src/features/public/privacyPolicyContent.dsrrs.ts`, still marked "DRAFT: not yet adopted" pending Executive Committee approval.
- **Test Firebase project `dsrrs-matchready-test`:** `.firebaserc` points only here. Firestore (us-central1) + rules/indexes deployed, Google sign-in on, Blaze plan. The Secretary's account has `assigner` + `official` roles in `orgs/dsrrs/members`.
- **Sheet sync works:** test sheet "DSRRS matchReadyDS Schedule (test)" (tabs Schedule, Contacts, Locations, How to use; warn-only data validation). Service account `sheet-sync@dsrrs-matchready-test.iam.gserviceaccount.com` has Editor access; its key is the `GOOGLE_SERVICE_ACCOUNT_JSON` secret. Eight sheet functions deployed (syncSheet, sheetPoll, updateMatchSchedule, proposalWriteback, createMatch, approveFixtureRequest, submitTeamLinkRequests, reviewTeamLinkRequest). First sync succeeded.
- **Functions params:** `functions/.env.dsrrs-matchready-test` (gitignored, local only) sets `DEFAULT_ORG_ID=dsrrs`, `APP_ORIGIN=http://localhost:5173`, and email defaults.

### Not done yet
- **Competitions:** need the exact True South names. There is no in-app editor; set `competitions` on `orgs/dsrrs` in Firestore, and add a matching dropdown to the sheet's `competition` column.
- **Fees:** enter in Scheduler → Schedule → Crew defaults. Check whether the app supports the $200-per-team maximum.
- **Fill Locations and Contacts** in the sheet for the 3–5 pilot clubs.
- **Email:** `RESEND_API_KEY` and `AERODATABOX_API_KEY` are placeholder secrets; email functions are not deployed. Needs a society Resend account (`docs/EMAIL.md`).
- **Sheet webhook** (auto-sync on edit) not set up; `SHEET_WEBHOOK_SECRET` exists but the Apps Script and `sheetWebhook` function are not deployed. Sync with the Upload button or the daily `sheetPoll`.
- **Hosting:** app not published; runs on localhost only.
- **Ownership:** Firebase project, test sheet and GitHub repo are under the Secretary's personal accounts. Add deepsouthrugbyreferees@gmail.com as owner before the pilot.

### Gotchas found
- The README's "Scheduler → Org" screen no longer exists: fees are under Schedule → Crew defaults, Sheet ID/sync under Upload.
- `firebase deploy --only functions:…` still requires **every** secret and param the codebase defines, even for functions not being deployed.
- A kickoff typed as `1100` (no colon) syncs as midnight. Use `11:00 AM`.
- The local dev server stops whenever the Claude desktop app restarts; run `npm run dev` from VS Code's terminal to keep it up.
