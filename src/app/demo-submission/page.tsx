'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function DemoSubmission() {
  const [formData, setFormData] = useState({
    artistName: '',
    email: '',
    trackTitle: '',
    genre: '',
    bpm: '',
    artistPitch: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { error } = await supabase.from('demo_submissions').insert([
        {
          artist_name: formData.artistName,
          email: formData.email,
          track_title: formData.trackTitle,
          genre: formData.genre,
          bpm: formData.bpm ? parseInt(formData.bpm) : null,
          artist_pitch: formData.artistPitch,
        },
      ])

      if (error) throw error

      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting demo:', error)
      alert('Error submitting demo. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Demo Submitted!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your submission. We'll review your demo and get back
            to you within 2-3 weeks.
          </p>
          <button
            onClick={() => {
              setSubmitted(false)
              setFormData({
                artistName: '',
                email: '',
                trackTitle: '',
                genre: '',
                bpm: '',
                artistPitch: '',
              })
            }}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Submit Another Demo
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 text-center">
            <h1 className="text-3xl font-bold mb-2">🎵 Submit Your Demo</h1>
            <p className="text-purple-100">
              Share your music with Engeloop Records
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Artist Name */}
            <div>
              <label
                htmlFor="artistName"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Artist Name *
              </label>
              <input
                type="text"
                id="artistName"
                name="artistName"
                value={formData.artistName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your artist or producer name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            {/* Track Title */}
            <div>
              <label
                htmlFor="trackTitle"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Track Title *
              </label>
              <input
                type="text"
                id="trackTitle"
                name="trackTitle"
                value={formData.trackTitle}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Name of your track"
              />
            </div>

            {/* Genre and BPM Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="genre"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Genre
                </label>
                <select
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select Genre</option>
                  <option value="house">House</option>
                  <option value="techno">Techno</option>
                  <option value="electronic">Electronic</option>
                  <option value="ambient">Ambient</option>
                  <option value="trance">Trance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="bpm"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  BPM
                </label>
                <input
                  type="number"
                  id="bpm"
                  name="bpm"
                  value={formData.bpm}
                  onChange={handleInputChange}
                  min="60"
                  max="200"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="120"
                />
              </div>
            </div>

            {/* Artist Pitch */}
            <div>
              <label
                htmlFor="artistPitch"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Tell Us About Yourself
              </label>
              <textarea
                id="artistPitch"
                name="artistPitch"
                value={formData.artistPitch}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tell us about your music, influences, and why you'd like to work with Engeloop Records..."
              />
            </div>

            {/* Note about file upload */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Demo File:</strong> For now, please include a
                SoundCloud, Dropbox, or WeTransfer link in your message above.
                File upload feature coming soon!
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Demo'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
