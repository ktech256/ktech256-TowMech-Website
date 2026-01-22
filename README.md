# TowMech Website (Public Site)

Premium marketing website for TowMech (a product of Texas Computer Hub). Built with Next.js App Router, TypeScript, TailwindCSS, and Framer Motion.

## Getting Started

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Start (SSR)

```bash
npm run start
```

## Content Sources

Legal and mission/vision content is loaded from text files in the `content/` directory:

- `content/mission.txt` → About page Mission section
- `content/vision.txt` → About page Vision section
- `content/legal/terms.txt` → /terms
- `content/legal/privacy.txt` → /privacy
- `content/legal/refund-policy.txt` → /refund-policy
- `content/legal/safety.txt` → /safety
- `content/legal/disclaimer.txt` → /disclaimer
- `content/legal/provider-agreement.txt` → /provider-agreement

> Replace the placeholder files with the official TowMech content provided by the business.

## Deployment (Render + Namecheap Domain)

1) **Hosting choice**
   - Use **Render Static Site** if exporting as static.
   - Use **Render Web Service** if using SSR (`next start`).

2) **Render settings**
   - **Build command**: `npm install && npm run build`
   - **Start command** (Web Service): `npm run start`
   - **Static export**: `npm install && npm run build && npm run export` (if choosing static export)

3) **Environment variables**
   - Add placeholders in Render if required (e.g., analytics IDs). No variables are required by default.

4) **Namecheap DNS**
   - `www` → CNAME to the Render domain target.
   - Root domain → A record/ALIAS per Render guidance.

5) **Admin dashboard**
   - `admin.towmech.com` should point to the existing admin dashboard service.

6) **SSL**
   - Enable free SSL in Render and confirm HTTPS is enforced.

## Project Structure

- `app/` → Next.js App Router pages
- `components/` → Reusable UI building blocks
- `content/` → Text content files for mission/vision and legal pages
- `public/images/` → Local image assets (logo, placeholders)

