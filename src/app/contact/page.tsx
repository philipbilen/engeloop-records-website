import Link from 'next/link'

export default function ContactPage() {
  return (
    <div>
      {/* Header Section */}
      <section style={{ padding: '60px 16px', backgroundColor: '#f9fafb' }}>
        <div
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
              fontWeight: '700',
              color: '#111827',
              marginBottom: '16px',
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              lineHeight: '1.6',
            }}
          >
            Get in touch with Engeloop Records
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section style={{ padding: '80px 16px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              padding: '32px',
              border: '1px solid #f3f4f6',
            }}
          >
            <h2
              style={{
                fontSize: '1.875rem',
                fontWeight: '600',
                marginBottom: '24px',
                color: '#111827',
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
              }}
            >
              Get In Touch
            </h2>
            
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                marginBottom: '32px',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#111827',
                  }}
                >
                  General Inquiries
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '4px' }}>
                  Email: info@engelooprecords.com
                </p>
                <p style={{ color: '#6b7280' }}>
                  Response time: 24-48 hours
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#111827',
                  }}
                >
                  Demo Submissions
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '4px' }}>
                  Use our submission form for fastest review
                </p>
                <p style={{ color: '#6b7280' }}>
                  Response time: 7-14 business days
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#111827',
                  }}
                >
                  Business Address
                </h3>
                <p style={{ color: '#6b7280' }}>
                  Waterpoint Apartments, A6102<br />
                  SLM 1020, Sliema, Malta
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#111827',
                  }}
                >
                  Business Hours
                </h3>
                <p style={{ color: '#6b7280' }}>
                  Monday - Friday: 9:00 AM - 6:00 PM CET<br />
                  Weekend: By appointment only
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/submit"
                style={{
                  backgroundColor: '#000',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.2s ease',
                }}
              >
                Submit Demo
              </Link>
              <a
                href="mailto:info@engelooprecords.com"
                style={{
                  border: '1px solid #d1d5db',
                  color: '#374151',
                  padding: '12px 24px',
                  borderRadius: '6px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.2s ease',
                }}
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}