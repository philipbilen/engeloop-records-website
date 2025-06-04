'use client'

export default function AdminPage() {
  return (
    <div>
      {/* Header Section */}
      <section style={{ padding: '60px 16px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                fontWeight: '700',
                color: '#111827',
                margin: 0,
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
              }}
            >
              Admin Dashboard
            </h1>
            <div
              style={{
                fontSize: '0.875rem',
                color: '#6b7280',
              }}
            >
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section style={{ padding: '80px 16px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              marginBottom: '64px',
            }}
          >
            {[
              {
                title: 'Pending Submissions',
                number: '12',
                description: 'Tracks awaiting review',
                color: '#3b82f6',
              },
              {
                title: 'Active Contracts',
                number: '8',
                description: 'Signed agreements',
                color: '#10b981',
              },
              {
                title: 'Upcoming Releases',
                number: '3',
                description: 'Scheduled this month',
                color: '#8b5cf6',
              },
              {
                title: 'Total Artists',
                number: '15',
                description: 'In our roster',
                color: '#f59e0b',
              },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  padding: '24px',
                  border: '1px solid #f3f4f6',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'translateY(-2px)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'translateY(0)')
                }
              >
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: '16px',
                    color: '#111827',
                  }}
                >
                  {stat.title}
                </h3>
                <p
                  style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: stat.color,
                    marginBottom: '8px',
                  }}
                >
                  {stat.number}
                </p>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#6b7280',
                  }}
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Actions & Recent Activity */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '32px',
              marginBottom: '64px',
            }}
          >
            {/* Quick Actions */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                padding: '24px',
                border: '1px solid #f3f4f6',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: '#111827',
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                }}
              >
                Quick Actions
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <button
                  style={{
                    width: '100%',
                    backgroundColor: '#000',
                    color: 'white',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = '#374151')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = '#000')
                  }
                >
                  Review New Submissions
                </button>
                <button
                  style={{
                    width: '100%',
                    border: '1px solid #d1d5db',
                    color: '#374151',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    fontWeight: '500',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#9ca3af'
                    e.currentTarget.style.backgroundColor = '#f9fafb'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#d1d5db'
                    e.currentTarget.style.backgroundColor = 'white'
                  }}
                >
                  Generate Contract
                </button>
                <button
                  style={{
                    width: '100%',
                    border: '1px solid #d1d5db',
                    color: '#374151',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    fontWeight: '500',
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#9ca3af'
                    e.currentTarget.style.backgroundColor = '#f9fafb'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#d1d5db'
                    e.currentTarget.style.backgroundColor = 'white'
                  }}
                >
                  Schedule Release
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                padding: '24px',
                border: '1px solid #f3f4f6',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: '#111827',
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                }}
              >
                Recent Activity
              </h3>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {[
                  {
                    activity: 'New submission from Artist Name',
                    time: '2 hours ago',
                  },
                  {
                    activity: 'Contract signed by Another Artist',
                    time: '1 day ago',
                  },
                  { activity: 'Release uploaded to Ditto', time: '3 days ago' },
                ].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: '12px',
                      borderBottom: index < 2 ? '1px solid #f3f4f6' : 'none',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.875rem',
                        color: '#6b7280',
                      }}
                    >
                      {item.activity}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: '#9ca3af',
                      }}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Development Notice */}
          <div
            style={{
              backgroundColor: '#fef3c7',
              border: '1px solid #fbbf24',
              borderRadius: '8px',
              padding: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div style={{ marginLeft: '12px' }}>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#92400e',
                    margin: 0,
                  }}
                >
                  🚧 <strong>Development Mode:</strong> This admin dashboard is
                  currently in development. Full functionality including
                  contract management, submission workflow, and database
                  integration will be added in upcoming phases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
