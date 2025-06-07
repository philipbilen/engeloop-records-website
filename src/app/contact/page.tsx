import Link from "next/link";
import StandardHero from "@/app/components/StandardHero"; // Import StandardHero
import StandardFooter from "@/app/components/StandardFooter"; // Import StandardFooter
import { Button } from "../components/ui/Button";
import { Mail, MessageSquare, MapPin, Clock } from "lucide-react"; // Optional: for icons

export default function ContactPage() {
  return (
    <div>
      {/* Standardized Hero Section */}
      <StandardHero
        title="GET IN TOUCH"
        subtitle="We're here to help and answer any question you might have. We look forward to hearing from you!"
        backgroundColor="gradient" // Or "gray" if you prefer the original subtle background
      />

      {/* Contact Information Section - Refactored with Tailwind CSS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8 sm:p-10 border border-gray-100">
            <h2 className="text-3xl font-work-sans font-semibold mb-8 text-gray-900 text-center sm:text-left">
              Contact Details
            </h2>

            <div className="space-y-8 mb-10">
              {/* General Inquiries */}
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-engeloop-orange mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-work-sans font-semibold mb-1 text-gray-900">
                    General Inquiries
                  </h3>
                  <p className="text-gray-500 mb-0.5">
                    Email:{" "}
                    <a
                      href="mailto:info@engelooprecords.com"
                      className="text-engeloop-orange hover:underline"
                    >
                      info@engelooprecords.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-400">
                    Response time: 24-48 hours
                  </p>
                </div>
              </div>

              {/* Demo Submissions */}
              <div className="flex items-start gap-4">
                <MessageSquare className="w-6 h-6 text-engeloop-orange mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-work-sans font-semibold mb-1 text-gray-900">
                    Demo Submissions
                  </h3>
                  <p className="text-gray-500 mb-0.5">
                    Use our submission form for the fastest review.
                  </p>
                  <p className="text-sm text-gray-400">
                    Response time: 7-14 business days
                  </p>
                </div>
              </div>

              {/* Business Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-engeloop-orange mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-work-sans font-semibold mb-1 text-gray-900">
                    Business Address
                  </h3>
                  <p className="text-gray-500">
                    Waterpoint Apartments, A6102
                    <br />
                    SLM 1020, Sliema, Malta
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-engeloop-orange mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-work-sans font-semibold mb-1 text-gray-900">
                    Business Hours
                  </h3>
                  <p className="text-gray-500">
                    Monday - Friday: 9:00 AM - 6:00 PM CET
                    <br />
                    Weekend: By appointment only
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
              <Link
                href="/submit"
                className="w-full sm:w-auto flex-grow sm:flex-grow-0 text-center bg-gray-900 text-white px-6 py-3 rounded-md font-medium no-underline transition-all duration-200 hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Submit Demo
              </Link>
              <a
                href="mailto:info@engelooprecords.com"
                className="w-full sm:w-auto flex-grow sm:flex-grow-0 text-center border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium no-underline transition-all duration-200 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-md"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
      <StandardFooter
        title="Submit Your Demo"
        description="Ready to share your music? Use our streamlined submission process to get your tracks reviewed by our team."
        buttonText="Submit Demo"
        buttonHref="/submit"
        backgroundColor="cream"
        buttonVariant="secondary"
      />
    </div>
  );
}
