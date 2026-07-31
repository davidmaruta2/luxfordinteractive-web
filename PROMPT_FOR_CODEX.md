# Prompt for Codex: Fix/Redesign the Luxford Interactive Site

Copy everything in the fenced block below into Codex as-is.

```
Read CLAUDE_HANDOFF.md, README.md, REPORT.md, index.html, styles.css, and tests/page.spec.js
first, in that order, to understand this project before changing anything.

CONTEXT

This is a static company website for Luxford Interactive Ltd, hosted on GitHub Pages at
luxfordinteractive.com. It exists to (a) satisfy Apple Developer Program organization enrollment,
which requires a real, live company website, and (b) be a genuine, creditable front door for the
company. It is not part of the GoalBuddy/BeMy or Waddl app repos -- do not touch those.

The owner has been unhappy with several rounds of visual changes made directly in a chat session
(not by you) and asked for this to be handed to you instead. Specific complaints already raised,
so you don't repeat the same mistakes:

1. An earlier dark navy/moss-green hero redesign with a canvas particle animation was rejected as
   not premium enough (and had a real bug where the dark theme silently fell back to plain white
   for most viewers -- a CSS media-query mistake).
2. A hero "icon collage" (the real GoalBuddy and Waddl app icons arranged as a flat-lay composition
   with decorative motifs for Lilith/OutLoud) was explicitly rejected as "horrible imagery" and has
   since been reverted.
3. The portfolio section (the "Four ventures, presented honestly" grid) was, at one point, laid out
   as two full-width cards (GoalBuddy, Waddl) with a left-side visual, followed by two squeezed
   half-width "compact" cards (Lilith, OutLoud) in a completely different template -- three
   different heading treatments (a custom-built goalbuddy wordmark, a real Waddl logo image, and
   plain text for Lilith/OutLoud) and four different background tints made it look like unrelated
   pieces bolted together. This was called out directly as "messed up." It has since been rebuilt
   as one uniform grid where all four cards share an identical template (fixed-height icon strip on
   top, one status chip, one heading sized identically across all four regardless of whether that
   heading is a real logo/wordmark or plain text, one short description line, store badges where
   relevant). If you touch this section again, preserve that uniformity -- do not let some cards
   become visually heavier than others.

Take these as a signal that the owner wants restraint and consistency, not further visual
experimentation for its own sake. When in doubt, prefer the simpler, more consistent option.

REAL BRAND ASSETS ALREADY IN THIS REPO -- use these, do not recreate or reinterpret them

- assets/goalbuddy-icon.png -- the real GoalBuddy app icon.
- assets/waddl-icon.png -- the real Waddl app icon.
- assets/waddl-wordmark.png -- the real, actual Waddl wordmark image (hand-drawn "Waddl." on a
  terracotta pill), copied directly from the Waddl project's own assets/brand folder. Use this
  image as-is wherever the Waddl name appears as a heading/logo -- do not substitute plain text.
- The "goalbuddy" wordmark has no exported image asset (the real app builds it live from a
  component). It has been reproduced here using Baloo 2 ExtraBold (self-hosted at
  assets/fonts/baloo2-800.woff2), "goal" in #368050, "b"/"uddy" in #3e8fb0, with a small two-tone
  flag mark on the "b" (see the .gb-wordmark/.gb-b-wrap/.gb-flag rules in styles.css and its usage
  in index.html). If you change this, keep the real hex colours and keep it sized to match the
  plain h3 used for Lilith/OutLoud -- it was previously oversized relative to them and that was
  flagged as wrong.

CONTENT FACTS (do not invent or contradict these)

- Company: Luxford Interactive Ltd, company number 17367736, domain luxfordinteractive.com
  (registered, DNS live, HTTPS enforced), contact admin@luxfordinteractive.com.
- Mission: "Luxford Interactive creates digital applications that improve opportunity, learning,
  and real-world connection." Thesis: every app should move someone from a screen into a real room.
- Four ventures and their honest current status:
  - goalbuddy -- goal-led buddy-matching app. Status label: "Almost live" (production backend live,
    Android build done, blocked only on Apple Developer enrollment). Live at goalbuddy.co.uk.
  - Waddl -- local skills-and-services exchange app ("Share skills. Build community."), HomeExchange-
    style points economy so a direct 1:1 swap is never required. Status label: "Getting
    neighbourly." Fuller mechanics (two lists, direct swaps or points, narrow launch category scope)
    are already explained in the page's "Trust is the product, not a feature" section further down
    -- don't re-duplicate that detail in the portfolio card itself.
  - Lilith -- name only, no product decided yet. Status label: "Coming soon." Do not invent a
    product for it.
  - OutLoud -- proven in-person public-speaking/interview/confidence coaching, being reshaped into
    an app-supported service (not decided how yet). Status label: "Finding its voice."
- Status language rule: every venture except Lilith should read with a short, witty, on-brand
  status phrase (not a generic "Coming soon") -- Lilith is the one exception and should say "Coming
  soon" specifically. Don't invent launch dates, user counts, pilots, or testimonials anywhere.
- Company/legal facts (company number) belong only in the footer/contact area -- keep them out of
  the hero and out of prominent marketing copy. The DUNS number must never appear anywhere on the
  visible page (it's for Apple enrollment paperwork only, not marketing content).
- goalbuddy is deliberately written lowercase everywhere it appears as the brand name (matching the
  app's own actual lowercase wordmark, confirmed from its source code) -- not "GoalBuddy". Waddl
  keeps its capital-W casing (matches its own branding).

WHAT TO DO

The owner will tell you specifically what to change beyond this point -- treat everything above as
required background, not a task list. If no further specific instruction is given alongside this
prompt, do not redesign anything speculatively; ask what specifically they want changed.

TECHNICAL CONSTRAINTS

- Static site only -- no backend, no build step required, must deploy as-is to GitHub Pages.
- No external font/asset CDNs -- self-host any new fonts under assets/fonts/ the same way the
  existing ones are done (see the @font-face rules at the top of styles.css).
- Keep tests/page.spec.js passing (npm.cmd test) -- update the assertions if you deliberately change
  the text/elements they check, but do not leave the suite red.
- Run npm.cmd test before finishing.
- Commit and push to the existing GitHub repo (davidmaruta2/luxfordinteractive-web) when done.

At the end, report: what you changed and why, test result, and the latest commit hash.
```
