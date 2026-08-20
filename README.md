# Luxford Interactive Ltd Website

Static GitHub Pages site for `luxfordinteractive.com`.

## Files

- `index.html` - the single-page company site.
- `styles.css` - self-hosted fonts, visual system, responsive layout, and reduced-motion handling.
- `script.js` - small ambient canvas animation that disables itself when reduced motion is requested.
- `CNAME` - GitHub Pages custom-domain file for `luxfordinteractive.com`.
- `assets/keenlee-icon.png` - the real keenlee app icon (GoalBuddy was renamed to keenlee, 20 Aug 2026).

## DNS for GoDaddy

Add these apex records for GitHub Pages:

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

The optional `www` target uses the existing GitHub username from the GoalBuddy remote.
