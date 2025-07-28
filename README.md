# Show Job Posting Date & Time (Indeed)

This Tampermonkey userscript extracts the `datePosted` value from embedded JSON-LD data on job pages at [ca.indeed.com](https://ca.indeed.com), and displays it clearly on the screen, including time and timezone.

## 📌 Features

- ✅ Extracts `datePosted` from structured data (`<script type="application/ld+json">`)
- ✅ Displays **human-readable date + time + timezone**
- ✅ Automatically updates on single-page navigation (Indeed uses dynamic page loads)
- ✅ Clean floating banner on bottom-right of screen

---

## 📸 Screenshot

> _📅 Job Posted On: Jul 26, 2025, 12:33 AM_

---

## 🔧 Installation

1. Install a userscript manager:
   - [Tampermonkey](https://tampermonkey.net/) (recommended)
   - [Violentmonkey](https://violentmonkey.github.io/)

2. Click to install the script:
   - Copy-paste the script into your userscript dashboard.

---

## 🔍 Match Rules

- Works only on: `https://ca.indeed.com/*`.

If you'd like to enable it for other countries, you can change the `@match` line to:

```js
// @match https://*.indeed.com/*
