# Engeloop Records

A modern, full-stack web application for Engeloop Records - a boutique record label specializing in Afro House and Deep House music, based in Sliema, Malta.

## 🎵 What We're Building

This is a comprehensive digital platform that serves as the main hub for Engeloop Records, featuring:

- **Artist Showcase** - Professional artist profiles with Spotify integration
- **Demo Submission System** - Secure, validated submission workflow for new artists
- **Playlist Management** - Integration with Spotify playlists and follower analytics
- **Admin Dashboard** - Complete content management and artist data synchronization
- **Responsive Design** - Beautiful, mobile-first interface that works on all devices

## 🚀 Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icon system
- **React Icons** - Additional icon library

### Backend & Database

- **Supabase** - Backend-as-a-Service
  - PostgreSQL database
  - Authentication & authorization
  - Row Level Security (RLS)
  - File storage (for future file uploads)
- **Next.js API Routes** - Server-side API endpoints

### External Integrations

- **Spotify Web API** - Artist data, images, and metadata
- **Advanced matching algorithms** with confidence scoring
- **Rate limiting** and error handling

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **Supabase account** and project
- **Spotify Developer account** and app credentials

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Spotify API Configuration
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Admin Authentication (for legacy API routes if needed)
API_SECRET_KEY=your_secure_api_secret_key
```

### Getting Your Credentials

#### Supabase Setup

1. Go to [supabase.com](https://supabase.com) and create a new project
2. In your project dashboard, go to **Settings > API**
3. Copy your **Project URL** and **anon public** key
4. Copy your **service_role** key (keep this secret!)

#### Spotify Setup

1. Go to [Spotify for Developers](https://developer.spotify.com/)
2. Create a new app in your dashboard
3. Copy your **Client ID** and **Client Secret**
4. Add `http://localhost:3000` to your redirect URIs (for development)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd engeloop-records
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Database Tables

Run the following SQL in your Supabase SQL Editor:

```sql
-- Create artists table
CREATE TABLE IF NOT EXISTS artists (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  artist_name TEXT NOT NULL,
  image_url TEXT,
  spotify_url TEXT,
  apple_music_url TEXT,
  instagram_url TEXT,
  spotify_id TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create demo submissions table
CREATE TABLE IF NOT EXISTS demo_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  artist_name TEXT NOT NULL,
  track_title TEXT NOT NULL,
  genres TEXT[] NOT NULL DEFAULT '{}',
  instagram_handle TEXT,
  spotify_profile_url TEXT,
  additional_info TEXT,
  bpm INTEGER,
  submission_status TEXT DEFAULT 'pending' CHECK (submission_status IN ('pending', 'reviewing', 'approved', 'rejected')),
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE demo_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for service role access
CREATE POLICY "Service role can manage artists" ON artists FOR ALL TO service_role USING (true) WITH CHECK (true);
CREATE POLICY "Service role can manage demo submissions" ON demo_submissions FOR ALL TO service_role USING (true) WITH CHECK (true);
```

### 4. Create Admin User

1. In your Supabase dashboard, go to **Authentication > Users**
2. Click **Add User** and create an admin account
3. After creating the user, update their metadata:

```sql
UPDATE auth.users
SET raw_user_meta_data = jsonb_build_object(
  'role', 'admin',
  'name', 'Admin User'
)
WHERE email = 'your-admin-email@example.com';
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
engeloop-records/
├── src/
│   ├── app/
│   │   ├── admin/           # Admin dashboard
│   │   ├── artists/         # Artist showcase
│   │   ├── playlists/       # Playlist display
│   │   ├── submit/          # Demo submission form
│   │   ├── login/           # Authentication
│   │   ├── api/             # API routes
│   │   └── components/      # Reusable components
│   └── lib/
│       ├── supabase.ts      # Database client
│       ├── spotify.ts       # Spotify API integration
│       └── auth.ts          # Authentication utilities
├── public/                  # Static assets
├── middleware.ts            # Route protection
└── tailwind.config.js       # Styling configuration
```

## 🎯 Key Features

### Artist Management

- **Spotify Integration** - Automatic artist data synchronization
- **Confidence Scoring** - Smart matching algorithms for artist identification
- **Image Management** - Automatic profile image fetching and optimization
- **Social Media Links** - Instagram, Spotify, and Apple Music integration

### Demo Submission System

- **Secure API** - Server-side validation and rate limiting
- **Multi-genre Support** - Flexible genre selection with custom categories
- **Email Notifications** - Automatic confirmation and status updates
- **Admin Review Workflow** - Streamlined submission management

### Admin Dashboard

- **Real-time Analytics** - Submission tracking and artist statistics
- **Spotify Sync Tools** - Bulk artist data updates and management
- **Secure Authentication** - Role-based access control
- **Activity Monitoring** - Comprehensive logging and audit trails

### Security Features

- **Row Level Security** - Database-level access control
- **JWT Authentication** - Secure session management
- **Rate Limiting** - Protection against spam and abuse
- **Input Validation** - Comprehensive server-side validation
- **CSRF Protection** - Built-in Next.js security features

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for consistent formatting
- **Tailwind CSS** for styling

### API Endpoints

#### Public Endpoints

- `GET /api/artists` - Fetch all artists
- `GET /api/playlists/all` - Fetch playlist data
- `POST /api/submit-demo` - Submit demo (with validation)

#### Protected Admin Endpoints

- `POST /api/artists/sync-spotify` - Sync new artists from Spotify
- `POST /api/artists/refresh-data` - Update existing artist data

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy automatically on every push

### Environment Variables for Production

Make sure to set all the environment variables from `.env.local` in your production environment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software for Engeloop Records.

## 📞 Contact

**Engeloop Records**

- Email: info@engelooprecords.com
- Address: Waterpoint Apartments, A6102, SLM 1020, Sliema, Malta
- Website: [https://engelooprecords.com](https://engelooprecords.com)

---

Built with ❤️ for the music community
