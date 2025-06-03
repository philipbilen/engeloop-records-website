# 🎵 Engeloop Records Website

Official website and demo submission system for Engeloop Records - an electronic music label discovering tomorrow's sound.

## Features

- **Professional website** with responsive design
- **Demo submission system** for artists to submit their music
- **Database integration** with Supabase for storing submissions
- **Modern tech stack** built with Next.js and TypeScript

## Live Demo

🚀 **Coming soon** - Website will be deployed on Vercel

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Version Control**: Git & GitHub

## Project Structure

```
engeloop-records/
├── src/
│   ├── app/
│   │   ├── demo-submission/    # Demo submission form
│   │   ├── layout.tsx          # Navigation and layout
│   │   └── page.tsx            # Homepage
│   └── lib/
│       └── supabase.ts         # Database connection
├── public/                     # Static assets
└── README.md                   # This file
```

## Local Development

### Prerequisites
- Node.js 18+ installed
- Supabase account and project

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/engeloop-records-website.git
   cd engeloop-records-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   
   Create a `.env.local` file in the root directory:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

## Database Schema

The project uses Supabase with the following main tables:

- **demo_submissions**: Artist demo submissions
- **contract_submissions**: Artist contract forms  
- **artists**: Signed artists information
- **releases**: Label releases catalog

## Features in Development

- [ ] File upload for demo submissions
- [ ] Artist contract submission forms
- [ ] Admin dashboard for reviewing submissions
- [ ] Artist and releases public pages
- [ ] Notion integration for workflow management

## Contributing

This is a private project for Engeloop Records. If you're part of the team and need access, please contact the repository owner.

## Contact

- **Label**: [Engeloop Records](https://engeloop.com)
- **Location**: Sweden
- **Developer**: Philip Bilén

## License

© 2024 Engeloop Records. All rights reserved.
