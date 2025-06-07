// src/app/about/page.tsx

import Image from "next/image";
import StandardHero from "@/app/components/StandardHero";
import StandardFooter from "@/app/components/StandardFooter";
import {
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Music,
  Globe,
  Users,
  Palette,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {" "}
      {/* Set a base background color */}
      {/* ===== 1. Hero Section (Consistent with other pages) ===== */}
      <StandardHero
        title="Curating electronic music that moves both body and soul"
        subtitle="Independent. Afro House. Built on relationships."
        backgroundImage="/media/BringMeLove.jpg"
        backgroundPosition="50% 25%"
        textColor="light"
        titleStyle="refined"
        showCTA={true}
        ctaText="See Our Artists"
        ctaHref="/artists"
        ctaVariant="primary"
      />
      {/* ===== 2. Our Story (Asymmetrical Layout) ===== */}
      {/* This section mimics the 'About The Echoes' layout from your example */}
      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Left Column: Text */}
            <div className="lg:pr-4">
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                <h2 className="text-section-refined text-engeloop-charcoal mb-6">
                  Our Story
                </h2>
                <p className="text-body-refined text-gray-600">
                  Engeloop Records was born from a deep passion for the rhythmic
                  heartbeat of Afro House and the soulful depths of Deep House.
                  Based in the vibrant musical landscape of Malta, we've built
                  our reputation on discovering exceptional talent and providing
                  artists with the platform they deserve.
                </p>
                <p className="mt-8 text-body-refined text-gray-600">
                  Our mission goes beyond just releasing music—we're committed
                  to building long-term relationships with our artists, helping
                  them develop their unique sound, and connecting them with
                  audiences worldwide through professional distribution and
                  strategic promotion.
                </p>
              </div>
            </div>
            {/* Right Column: Image */}
            <div className="relative w-full h-64 sm:h-96 lg:h-full lg:min-h-[32rem] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/media/wena.jpg" // Suggestion: Use an atmospheric "in the studio" or "at a console" shot here
                alt="Engeloop Records studio session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ===== 3. What We Offer (Dark, Themed Section) ===== */}
      {/* Adopting the dark background from your example for a change of pace */}
      <section className="bg-engeloop-charcoal py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-section-refined text-white">What We Offer</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Comprehensive support designed to elevate your music and career
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {/* Feature Item */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="h-12 w-12 rounded-lg bg-engeloop-orange/20 flex items-center justify-center">
                    <Music className="h-6 w-6 text-engeloop-orange" />
                  </div>
                  Playlist Promotion
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    Placements on our curated playlists, with 113K+ active
                    followers and growing reach across multiple platforms.
                  </p>
                </dd>
              </div>
              {/* Feature Item */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="h-12 w-12 rounded-lg bg-engeloop-highlight/20 flex items-center justify-center">
                    <Palette className="h-6 w-6 text-engeloop-highlight" />
                  </div>
                  Artwork & Visual Identity
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    We believe strong visual style adds consistency. Our
                    in-house visual team creates connected and recognizable
                    artwork.
                  </p>
                </dd>
              </div>
              {/* Add the other two features here following the same pattern */}
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white/80" />
                  </div>
                  Release Management
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    We handle scheduling, distribution, and delivery, so you can
                    focus on the music. Hands-on support from demo to release.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <div className="h-12 w-12 rounded-lg bg-engeloop-cream/20 flex items-center justify-center">
                    <Users className="h-6 w-6 text-engeloop-cream" />
                  </div>
                  Ongoing Support
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">
                    We stay involved long-term, not just for one track. We build
                    lasting partnerships that evolve with your artistic journey.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      {/* ===== 4. Get In Touch (Cream/Beige background) ===== */}
      <section className="bg-engeloop-cream/30 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-section-refined text-engeloop-charcoal mb-4">
            Get In Touch
          </h2>
          <p className="text-body-refined text-gray-600 max-w-2xl mx-auto">
            Ready to start your journey with us? We'd love to hear from you.
          </p>
        </div>
        {/* Contact details can remain similar, just styled on the new background */}
        <div className="max-w-4xl mx-auto px-6 mt-16">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
            {/* General Inquiries */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-engeloop-orange/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-engeloop-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  General Inquiries
                </h3>
                <a
                  href="mailto:info@engelooprecords.com"
                  className="text-engeloop-orange hover:underline text-sm"
                >
                  info@engelooprecords.com
                </a>
              </div>
            </div>
            {/* Other contact items... */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-engeloop-charcoal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-engeloop-charcoal" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-caption-refined text-gray-600">
                  Waterpoint Apartments, A6102
                  <br />
                  SLM 1020, Sliema, Malta
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== 5. Final CTA Footer (Consistent) ===== */}
      <StandardFooter
        title="Ready to Work With Us?"
        description="Get in touch to discuss your project, learn about our services, or explore collaboration opportunities with Engeloop Records."
        buttonText="Contact Us"
        buttonHref="/contact"
        backgroundColor="gray"
        buttonVariant="primary"
      />
    </div>
  );
}
