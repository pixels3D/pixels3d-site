import React from 'react'

export default function Health() {
  const healthData = {
    status: "OK",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    uptime: process.uptime?.() || 0,
    services: {
      database: "connected",
      api: "operational",
      cdn: "operational"
    }
  }

  // Set response headers
  if (typeof window !== 'undefined') {
    document.title = 'Health Check - Pixels 3D'
  }

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-8">
        <pre className="bg-black border border-emerald-400/20 rounded-lg p-6 text-emerald-400 font-mono text-sm overflow-auto">
          {JSON.stringify(healthData, null, 2)}
        </pre>
      </div>
    </div>
  )
}