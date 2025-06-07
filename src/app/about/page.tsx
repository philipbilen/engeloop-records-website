// src/app/about/page.tsx

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
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <StandardHero
        title="ABOUT ENGELOOP RECORDS"
        subtitle="Discover the story behind our passion for Afro House and Deep House music"
        description="Based in Sliema, Malta, we're a boutique record label dedicated to discovering and promoting exceptional electronic music that moves both body and soul."
        backgroundImage="/media/studio-background.jpg" // You could use a studio/label image
        backgroundPosition="center"
        textColor="light"
      />

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-section-refined text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4">
                <p className="text-body-refined text-gray-600">
                  Engeloop Records was born from a deep passion for the rhythmic
                  heartbeat of Afro House and the soulful depths of Deep House.
                  Based in the vibrant musical landscape of Malta, we've built
                  our reputation on discovering exceptional talent and providing
                  artists with the platform they deserve.
                </p>
                <p className="text-body-refined text-gray-600">
                  Our mission goes beyond just releasing music—we're committed
                  to building long-term relationships with our artists, helping
                  them develop their unique sound, and connecting them with
                  audiences worldwide through professional distribution and
                  strategic promotion.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-engeloop-orange to-engeloop-highlight rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <Music className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Since 2020</h3>
                  <p className="text-white/90">
                    Curating exceptional electronic music
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-section-refined text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-body-refined text-gray-600 max-w-2xl mx-auto">
              Comprehensive support designed to elevate your music and career
            </p>
          </div>

          {/* Grid of 4 Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Playlist Promotion */}
            <div className="group bg-gradient-to-br from-engeloop-orange/5 to-engeloop-orange/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-engeloop-orange/10">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-engeloop-orange rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Playlist Promotion
                  </h3>
                  <p className="text-caption-refined text-gray-600 leading-relaxed">
                    Placements on our curated playlists, with 113K+ active
                    followers and growing reach across multiple platforms.
                  </p>
                </div>
              </div>
            </div>

            {/* Artwork & Visual Identity */}
            <div className="group bg-gradient-to-br from-engeloop-highlight/5 to-engeloop-highlight/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-engeloop-highlight/10">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-engeloop-highlight rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM12 9c.83 0 1.5-.67 1.5-1.5S12.83 6 12 6s-1.5.67-1.5 1.5S11.17 9 12 9zm5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Artwork & Visual Identity
                  </h3>
                  <p className="text-caption-refined text-gray-600 leading-relaxed">
                    We believe strong visual style adds consistency and meaning
                    across our releases. Our in-house visual team creates
                    connected, recognizable, and well-curated artwork.
                  </p>
                </div>
              </div>
            </div>

            {/* Release Management */}
            <div className="group bg-gradient-to-br from-engeloop-charcoal/5 to-engeloop-charcoal/10 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-engeloop-charcoal/10">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-engeloop-charcoal rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Release Management
                  </h3>
                  <p className="text-caption-refined text-gray-600 leading-relaxed">
                    We handle scheduling, distribution, and delivery, so you can
                    focus on the music. Hands-on support from first demo to
                    post-release promotion.
                  </p>
                </div>
              </div>
            </div>

            {/* Ongoing Support */}
            <div className="group bg-gradient-to-br from-engeloop-cream/30 to-engeloop-beige/30 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-engeloop-cream/20">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-engeloop-orange to-engeloop-highlight rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Ongoing Support
                  </h3>
                  <p className="text-caption-refined text-gray-600 leading-relaxed">
                    We stay involved long-term — not just for one track, but for
                    your growth. Building lasting partnerships that evolve with
                    your artistic journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-section-refined text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-body-refined text-gray-600 max-w-2xl mx-auto">
              Ready to start your journey with us? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-engeloop-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-engeloop-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    General Inquiries
                  </h3>
                  <p className="text-caption-refined text-gray-600 mb-1">
                    <a
                      href="mailto:info@engelooprecords.com"
                      className="text-engeloop-orange hover:underline"
                    >
                      info@engelooprecords.com
                    </a>
                  </p>
                  <p className="text-caption-refined text-gray-500">
                    Response time: 24-48 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-engeloop-highlight/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-engeloop-highlight" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Demo Submissions
                  </h3>
                  <p className="text-caption-refined text-gray-600 mb-1">
                    Use our streamlined submission form
                  </p>
                  <p className="text-caption-refined text-gray-500">
                    Response time: 7-14 business days
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
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

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-engeloop-cream/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-engeloop-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Business Hours
                  </h3>
                  <p className="text-caption-refined text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM CET
                    <br />
                    Weekend: By appointment only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Footer */}
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
