# Build Report

## Design Direction

The site deliberately commits to one dark visual world instead of supporting an automatic light
theme. That avoids the earlier failure mode where a dark design accidentally fell back to a light
page for many viewers. The implementation declares `color-scheme: dark`, uses a near-black base,
and treats warm brass as the single bold accent.

Smatch.com was the concrete visual quality reference. I borrowed the high-contrast dark ground,
one strong accent color, a compact trust/facts strip, generous spacing, and structured feature
cards. I did not borrow its literal green palette, B2B fashion-marketplace content, invented
traction metrics, or co-pilot framing.

The typography is self-hosted: Fraunces for characterful display headlines, Manrope for clean body
copy, and Space Mono for factual/status labels. The GoalBuddy app icon is used as the real brand
asset for the GoalBuddy venture; the other ventures use restrained graphic treatments rather than
fake product screenshots.

Motion is decorative only. The ambient canvas network is disabled by `prefers-reduced-motion`.

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

No traction, user counts, pilots, team claims, funding claims, or launch dates were invented.

The only ambiguous operational item is whether the owner wants `www.luxfordinteractive.com` to
redirect to the apex domain. The root domain records are required either way.
