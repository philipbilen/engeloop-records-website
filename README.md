TL;DR

Engeloop-Records is a Next.js 15 App-Router application written in TypeScript.
Data lives in Supabase and is surfaced through REST-style routes under src/app/api.
The UI is React + Tailwind; state is kept minimal and fetched on demand.
Run npm install && cp .env.example .env.local && npm run dev to get going.
Focus areas for the next pass: tighten route names, delete dead pages, extract repeated UI, and add tests.

⸻

1. What this project does

A small, label-centric site that 1. shows artists, playlists, releases, etc, via static pages in src/app/\* 2. exposes secured admin and Claude endpoints for syncing Spotify data and handling demo submissions 3. stores everything in Supabase and logs activity with a lightweight logger

Package metadata: Next 15.3.3, React 19, Supabase JS 2 and Zod for validation ￼.

⸻

2. Quick start

git clone <repo>
cd engeloop-records
npm install
cp .env.example .env.local # fill in Spotify & Supabase keys
npm run dev # localhost:3000

Main scripts live in package.json: dev, build, start, lint ￼.

⸻

3. Project layout (top level)

engeloop-records/
├─ src/
│ ├─ app/ # route handlers & pages (Next App Router)
│ │ ├─ api/ # server-only endpoints
│ │ ├─ components/ # shared UI
│ │ └─ ... # artists, playlists, releases, etc
│ ├─ lib/ # server helpers (Supabase, Spotify, auth, logger…)
│ └─ types/ # shared TypeScript types
├─ public/ # static assets (not shown in gitingest)
└─ config files # eslint, tailwind, tsconfig, etc.

See the generated tree snippet for the exact paths ￼.

⸻

4. Key moving parts

Area File(s) Notes
Request gating middleware.ts Redirects non-admins away from /admin and protects /login ￼
API layer src/app/api/\* - /artists, /playlists, /submit-demo, etc.- Claude-specific routes for AI workflows ￼
Data access lib/supabase.ts Centralised client; service-role helper ￼
Spotify sync lib/spotify.ts, spotifyConstants.ts Rate-limited wrapper with genre weights ￼
Validation lib/validation.ts Zod schemas for demo submissions
Rate limiting lib/rateLimiting.ts Generic limiter used by demo and admin routes ￼
Logging lib/logger.ts Dev-emoji + prod JSON logging, perf helpers ￼
Styling tailwind.config.js + globals.css Custom Engeloop palette and utilities ￼

⸻

5. Data and control flow
   1. Client page fetches data via fetch('/api/artists') or getServerSideProps equivalent.
   2. API handler validates input, checks rate limit, hits Supabase and returns JSON.
   3. Supabase triggers are not in repo; all business logic stays in the API layer.
   4. Logger captures timing and errors; output level controlled by LOG_LEVEL.

⸻

6. Environment variables

Copy .env.example and supply:
• SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET
• NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY
• SUPABASE_SERVICE_ROLE_KEY (server only)
plus optional flags for rate limits and feature toggles ￼.

⸻

7. Common tasks

Task Command / URL
Run dev server npm run dev
Lint npm run lint
Build prod npm run build && npm start
Refresh artist data POST /api/artists/refresh-data (admin token required)
Sync Spotify stats POST /api/artists/sync-spotify
List all playlists GET /api/playlists/all

⸻

8. Deployment
   1. Set env vars on Vercel / Fly / Docker host.
   2. Ensure Supabase URL allows RLS bypass for service-role key.
   3. Configure the same image domains in next.config.ts that Vercel uses ￼.
   4. npm run build and serve with next start or let Vercel handle.

⸻

9. What to tighten next
   • Delete duplicate pages like about/page 2.tsx and playlists/page 2.tsx.
   • Consolidate API routes naming: stick to kebab-case or nested folders, not both.
   • Extract repeated hero and nav styles into a single component.
   • Add unit tests for lib/spotify, rateLimiting, and errorHandling.
   • Document Supabase schema version so migrations are reproducible.
   • Consider moving Claude routes behind a separate /internal prefix.
   • Replace console.log in API handlers with logger.api.

(Pick one per session so perfectionism does not stall progress.)

⸻

10. Personal reminders
    • Commit small vertical slices—feature, test, docs—instead of broad vibe coding.
    • When energy dips, create an issue instead of half-coding a fix.
    • logger.performance() is your friend for spotting slow endpoints.
    • Keep README short; expand in /docs if needed later.

Take a break now if you have been staring at this for more than 45 minutes.
