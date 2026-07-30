# Build Report

## Design Direction

The first committed version used a dark Smatch-inspired direction. After review, the page was
changed to a lighter visual world using the requested palette: terracotta, green, white, purple,
and cyan.

Smatch.com remains the concrete polish reference for confident spacing, strong section structure,
and production value. The site no longer borrows Smatch's dark ground; instead it uses a warm white
canvas with abstract product-world imagery behind the venture panels.

The typography is self-hosted: Fraunces for characterful display headlines, Manrope for clean body
copy, and Space Mono for factual/status labels. The GoalBuddy app icon is used as the real brand
asset for the GoalBuddy venture; the other ventures use restrained graphic treatments rather than
fake product screenshots.

Motion is decorative only. The light ambient canvas is disabled by `prefers-reduced-motion`.

## DNS Records

Add these GoDaddy records for the apex/root domain:

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

That `www` target is based on the existing GitHub remote username in the GoalBuddy project:
`davidmaruta2`.

## Content Notes

No traction, user counts, pilots, team claims, funding claims, DUNS-as-marketing, or launch dates
were invented.

The only ambiguous operational item is whether the owner wants `www.luxfordinteractive.com` to
redirect to the apex domain. The root domain records are required either way.
