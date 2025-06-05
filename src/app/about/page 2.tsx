import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
      {/* Header Section */}
      <section className="py-15 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-section-title font-work-sans font-bold text-gray-900 mb-4">
            About Engeloop Records
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Discover the story behind our passion for Afro House and Deep House music
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Our Story Card */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-3xl font-work-sans font-semibold mb-4 text-gray-900">
              Our Story
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed text-large">
              Based in Sliema, Malta, Engeloop Records is a boutique record
              label specializing in Afro House and Deep House music. We&aposre
              passionate about discovering and promoting exceptional
              electronic music that moves both body and soul.
            </p>
            <p className="text-gray-500 leading-relaxed text-large">
              Our mission is to provide artists with professional recording
              agreements, global distribution through platforms like Ditto
              Music, and the promotional support needed to reach audiences
              worldwide. We believe in building long-term relationships with
              our artists and helping them develop their unique sound.
            </p>
          </div>

          {/* What We Offer Card */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-3xl font-work-sans font-semibold mb-6 text-gray-900">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* For Artists */}
              <div>
                <h3 className="text-xl font-work-sans font-semibold mb-3 text-gray-900">
                  For Artists
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-500 text-base flex items-start">
                    <span className="text-engeloop-orange mr-2">•</span>
                    Professional recording agreements
                  </li>
                  <li className="text-gray-500 text-base flex items-start">
                    <span className="text-engeloop-orange mr-2">•</span>
                    Global digital distribution
                  </li>
                  <li className="text-gray-500 text-base flex items-start">
                    <span className="text-engeloop-orange mr-2">•</span>
                    Mastering services
                  </li>
                  <li className="text-gray-500 text-base flex items-start">
                    <span className="text-engeloop-orange mr-2">•</span>
                    Promotional support
                  </li>
                  <li className="text-gray-500 text-base flex items-start">
                    <span className="text-engeloop-orange mr-2">•</span>
                    Metadata management
                  </li>
                </ul>
              </div>

              {/* Our Focus */}
              <div>
                <h3 className="text-xl font-work-sans font-semibold mb-3 text-gray-900">
                  Our Focus
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-500 text-base flex items-start">
                    <span className="text-engeloop-orange mr-2">•</span>
                    Afro House
                  </li>
                  <li className="text-gray-500 text-base flex items-start">
                    <span className="text-engeloop-orange mr-2">•</span>
                    Deep House
                  </li>
                  <li className="text-gray-500 text-base flex items-start">
                    <span className="text-engeloop-orange mr-2">•</span>
                    Quality over quantity
                  </li>
                  <li className="text-gray-500 text-base flex items-start">
                    <span className="text-engeloop-orange mr-2">•</span>
                    Artist development
                  </li>
                  <li className="text-gray-500 text-base flex items-start">
                    <span className="text-engeloop-orange mr-2">•</span>
                    Global reach
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-3xl font-work-sans font-semibold mb-6 text-gray-900">
              Contact Information
            </h2>
            
            <div className="space-y-3 mb-6">
              <p className="text-large">
                <span className="font-semibold text-gray-900">Label:</span>
                <span className="text-gray-500 ml-2">Engeloop Records</span>
              </p>
              <p className="text-large">
                <span className="font-semibold text-gray-900">Address:</span>
                <span className="text-gray-500 ml-2">
                  Waterpoint Apartments, A6102, SLM 1020, Sliema, Malta
                </span>
              </p>
              <p className="text-large">
                <span className="font-semibold text-gray-900">Email:</span>
                <span className="text-gray-500 ml-2">info@engelooprecords.com</span>
              </p>
              <p className="text-large">
                <span className="font-semibold text-gray-900">Business Hours:</span>
                <span className="text-gray-500 ml-2">
                  Monday - Friday, 9:00 AM - 6:00 PM CET
                </span>
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Submissions
              </h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Ready to submit your music? Use our submission form for the
                fastest review process. We typically respond within 7-14
                business days.
              </p>
              <Link
                href="/submit"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-medium no-underline transition-all duration-200 hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Submit Your Music
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}