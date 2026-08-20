# Claude Handoff: Luxford Interactive Website

## Current State

Project folder:

```text
C:\Users\DavidPC\Downloads\DAVID\luxfordinteractive-web
```

GitHub repo:

```text
https://github.com/davidmaruta2/luxfordinteractive-web
```

Latest pushed commit:

```text
bdb2133 Revise Luxford site to light palette
```

GitHub Pages is enabled from `main` at repo root and the latest build completed successfully.
The repo has a `CNAME` file containing exactly:

```text
luxfordinteractive.com
```

The custom domain still depends on GoDaddy DNS being pointed to GitHub Pages. The required apex
records are in `README.md` and `REPORT.md`.

## Context

This is a standalone static website for Luxford Interactive Ltd, not part of the GoalBuddy/BeMy app
repo. Do not edit `C:\Users\DavidPC\Downloads\DAVID\BeMy` unless the owner explicitly changes
scope.

The purpose is to provide a real company website for Apple Developer Program organization
enrollment and as a credible public front door for the parent company.

Company details:

- Name: Luxford Interactive Ltd
- Company number: 17367736
- DUNS number: 235032970
- Domain: `luxfordinteractive.com`
- Contact: `admin@luxfordinteractive.com`

Do not present DUNS as marketing copy. It exists for Apple enrollment context only.

## Owner Feedback Already Applied

The first version used a dark, Smatch-inspired visual direction and a large facts strip:

- `4 ventures in the studio`
- company number
- DUNS number
- `admin`

The owner questioned why those appeared on the page and asked for a lighter direction using:

- Terracotta
- Green
- White
- Purple
- Cyan

The current version removes the stats strip, moves company number into quiet contact/legal copy,
removes DUNS from visible page content, and uses a light palette with abstract imagery panels.

## Files To Know

- `index.html` - single static page and all content.
- `styles.css` - full visual system, responsive rules, self-hosted fonts.
- `script.js` - decorative ambient canvas, disabled under `prefers-reduced-motion`.
- `assets/keenlee-icon.png` - real keenlee icon copied from the app repo (GoalBuddy was renamed to keenlee, 20 Aug 2026).
- `REPORT.md` - design rationale and DNS records.
- `README.md` - hosting/DNS notes.
- `tests/page.spec.js` - Playwright checks for desktop render, mobile render, and reduced motion.

## Validation

Run:

```text
npm.cmd test
```

Current result before handoff: 3 passed.

Checks cover:

- Desktop page renders without console/page errors.
- Mobile layout keeps key content visible.
- Reduced motion hides the ambient canvas.

Desktop and mobile screenshots were generated locally as ignored files:

- `desktop-check.png`
- `mobile-check.png`

These are not committed.

## Recommended Refinement Brief

Refine from the current light-palette version rather than returning to the dark version.

Primary refinement areas:

1. Make the abstract imagery feel more intentional and less placeholder-like.
   The owner specifically mentioned applets sitting on a background with relevant imagery. Consider
   stronger product-world graphics for GoalBuddy, Waddl, Lilith, and OutLoud, while avoiding fake
   screenshots or invented product facts.
2. Improve the first viewport art direction.
   The light palette is directionally correct, but the hero can be made more distinctive and less
   generic.
3. Keep company/legal facts quiet.
   Company number belongs in footer/contact. DUNS should stay out of visible marketing copy unless
   the owner explicitly asks.
4. Preserve honest venture statuses.
   GoalBuddy is preparing to launch. Waddl is in development. Lilith is name reserved, idea still
   to come. OutLoud is a concept being shaped.
5. Keep it static and GitHub Pages-compatible.
   No backend, no server requirement, no external font CDN.

## Deployment Notes

After changes:

```text
npm.cmd test
git status --short
git add .
git commit -m "<message>"
git push
```

Then check Pages:

```text
gh api repos/davidmaruta2/luxfordinteractive-web/pages/builds/latest
```

Required GoDaddy DNS records for the apex domain:

```text
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

Optional `www` redirect:

```text
CNAME    www    davidmaruta2.github.io
```
