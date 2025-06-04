"use client";

import { Upload, ChevronDown, X, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  artistName: string;
  trackTitle: string;
  genres: string[];
  instagramHandle: string;
  spotifyProfileUrl: string;
  additionalInfo: string;
  bpm: string;
}

interface SubmissionResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: string[];
  submissionId?: string;
}

export default function SubmitPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    artistName: "",
    trackTitle: "",
    genres: [],
    instagramHandle: "",
    spotifyProfileUrl: "",
    additionalInfo: "",
    bpm: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitResponse, setSubmitResponse] =
    useState<SubmissionResponse | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const genres = [
    { value: "afro-house", label: "Afro House" },
    { value: "deep-house", label: "Deep House" },
    { value: "organic-house", label: "Organic House" },
    { value: "melodic-house", label: "Melodic House" },
    { value: "downtempo", label: "Downtempo" },
    { value: "electronica", label: "Electronica" },
    { value: "experimental", label: "Experimental" },
    { value: "other", label: "Other" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const handleGenreToggle = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      genres: prev.genres.includes(value)
        ? prev.genres.filter((g) => g !== value)
        : [...prev.genres, value],
    }));
  };

  const removeGenre = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      genres: prev.genres.filter((g) => g !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);

    try {
      // Prepare submission data
      const submissionData = {
        ...formData,
        bpm: formData.bpm ? parseInt(formData.bpm) : undefined,
        instagramHandle: formData.instagramHandle || undefined,
        spotifyProfileUrl: formData.spotifyProfileUrl || undefined,
        additionalInfo: formData.additionalInfo || undefined,
      };

      const response = await fetch("/api/submit-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result: SubmissionResponse = await response.json();

      if (result.success) {
        setSubmitResponse(result);
        setSubmitted(true);
      } else {
        setSubmitResponse(result);
        if (result.details && Array.isArray(result.details)) {
          setErrors(result.details);
        } else if (result.error) {
          setErrors([result.error]);
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrors(["Failed to submit demo. Please try again."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      artistName: "",
      trackTitle: "",
      genres: [],
      instagramHandle: "",
      spotifyProfileUrl: "",
      additionalInfo: "",
      bpm: "",
    });
    setSubmitted(false);
    setSubmitResponse(null);
    setErrors([]);
  };

  // Success screen
  if (submitted && submitResponse?.success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full text-center border border-white/20">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-4">
            Demo Submitted Successfully! 🎉
          </h1>
          <p className="text-gray-300 mb-6">
            {submitResponse.message ||
              "Thank you for your submission. We'll review your demo and get back to you within 7-14 business days."}
          </p>
          {submitResponse.submissionId && (
            <p className="text-sm text-gray-400 mb-6">
              Reference ID: {submitResponse.submissionId}
            </p>
          )}
          <button
            onClick={resetForm}
            className="bg-engeloop-orange hover:bg-engeloop-orange/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Submit Another Demo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Elegant Hero Header with Background */}
      <section
        className="relative pt-32 pb-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(/media/hero-cover.jpg)",
          minHeight: "30vh",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-work-sans font-bold text-white mb-6 tracking-wide">
            SUBMIT YOUR MUSIC
          </h1>
          <div className="w-24 h-1 bg-engeloop-orange mx-auto mb-6"></div>
          <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Thanks for your interest in Engeloop Records! Please use this form
            to submit your demo and a few basic details. If we feel there´s a
            fit, we´ll be in touch.
          </p>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-8 text-white">
            <path
              fill="currentColor"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-hero-softgray rounded-t-3xl shadow-inner">
        <div className="max-w-2xl mx-auto">
          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-red-200 font-semibold mb-2">
                    Please fix the following errors:
                  </h4>
                  <ul className="text-red-200 text-sm space-y-1">
                    {errors.map((error, index) => (
                      <li key={index}>• {error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Details - Compact Grid */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                Contact Details
                <span className="text-red-500 ml-1">*</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900/20 focus:outline-none"
                />
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900/20 focus:outline-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                    *
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900/20 focus:outline-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                    *
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="artistName"
                    value={formData.artistName}
                    onChange={handleInputChange}
                    required
                    placeholder="Artist Name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900/20 focus:outline-none"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                    *
                  </span>
                </div>
              </div>
            </div>

            {/* Track Upload - Compact */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                Upload your track
                <span className="text-red-500 ml-1">*</span>
              </h2>

              <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center transition-colors duration-200 cursor-pointer hover:border-gray-400">
                <Upload className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-1">
                  Click to choose a file or drag here
                </p>
                <p className="text-xs text-gray-500">Size limit: 10 MB</p>
                <input
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  id="audio-upload"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                <strong>Note:</strong> File upload is coming soon. For now,
                please include a SoundCloud, Dropbox, or WeTransfer link in the
                additional information section below.
              </p>
            </div>

            {/* Track Details - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  name="trackTitle"
                  value={formData.trackTitle}
                  onChange={handleInputChange}
                  required
                  placeholder="Track Title"
                  className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900/20 focus:outline-none"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                  *
                </span>
              </div>

              {/* Compact Multi-Select Genre */}
              <div className="relative">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm text-left bg-white transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900/20 focus:outline-none flex items-center justify-between min-h-[42px]"
                  >
                    <div className="flex-1 pr-2">
                      {formData.genres.length === 0 ? (
                        <span className="text-gray-500">Select genres...</span>
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {formData.genres.slice(0, 2).map((value) => {
                            const genre = genres.find((g) => g.value === value);
                            return (
                              <span
                                key={value}
                                className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs"
                              >
                                {genre?.label}
                                <span
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeGenre(value);
                                  }}
                                  className="hover:text-gray-600 cursor-pointer"
                                >
                                  <X size={12} />
                                </span>
                              </span>
                            );
                          })}
                          {formData.genres.length > 2 && (
                            <span className="text-xs text-gray-500">
                              +{formData.genres.length - 2} more
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                      {genres.map((genre) => (
                        <button
                          key={genre.value}
                          type="button"
                          onClick={() => handleGenreToggle(genre.value)}
                          className={`w-full px-3 py-2 text-left text-sm transition-colors duration-150 flex items-center justify-between first:rounded-t-md last:rounded-b-md ${
                            formData.genres.includes(genre.value)
                              ? "bg-gray-100 text-gray-900"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <span>{genre.label}</span>
                          {formData.genres.includes(genre.value) && (
                            <div className="w-3 h-3 bg-gray-900 rounded-sm flex items-center justify-center">
                              <svg
                                className="w-2 h-2 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <span className="absolute right-10 top-2.5 text-red-500">
                  *
                </span>
              </div>
            </div>

            {/* BPM Field */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  BPM (optional)
                </label>
                <input
                  type="number"
                  name="bpm"
                  value={formData.bpm}
                  onChange={handleInputChange}
                  min="60"
                  max="200"
                  placeholder="120"
                  className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900/20 focus:outline-none"
                />
              </div>
            </div>

            {/* Social Links - Compact Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram Handle (optional)
                </label>
                <input
                  type="text"
                  name="instagramHandle"
                  value={formData.instagramHandle}
                  onChange={handleInputChange}
                  placeholder="@username"
                  className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900/20 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Spotify Profile URL (optional)
                </label>
                <input
                  type="url"
                  name="spotifyProfileUrl"
                  value={formData.spotifyProfileUrl}
                  onChange={handleInputChange}
                  placeholder="https://open.spotify.com/artist/..."
                  className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900/20 focus:outline-none"
                />
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information (optional)
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={3}
                placeholder="Tell us about your track, inspiration, or include a link to your demo (SoundCloud, Dropbox, WeTransfer, etc.)..."
                className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm resize-y transition-all duration-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900/20 focus:outline-none"
              />
            </div>

            {/* Compact Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white py-3 px-6 rounded-md font-medium text-sm border-none cursor-pointer transition-all duration-200 hover:bg-gray-700 hover:-translate-y-0.5 hover:shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Submitting..." : "Submit for Review"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
