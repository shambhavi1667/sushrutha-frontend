import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RoleSelect() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="relative min-h-screen bg-bg text-cream font-sans flex flex-col overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: 'rgba(13, 11, 8, 0.80)' }} />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center px-8 py-5">
        <div className="absolute inset-0 bg-bg" style={{ opacity: 0.6 }} />
        <button
          onClick={() => navigate('/')}
          className="relative font-display text-turmeric text-xl tracking-widest uppercase"
        >
          Sushrutha AI
        </button>
        <button
          onClick={() => navigate('/')}
          className="relative text-muted hover:text-cream text-sm font-sans cursor-pointer transition-colors duration-200"
        >
          Back
        </button>
      </nav>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center gap-10 pt-24 pb-16">

        <div>
          <h1 className="font-display text-5xl md:text-6xl text-cream font-normal tracking-wide mb-2">
            Who are you?
          </h1>
          <p className="font-sans text-sm text-muted tracking-wide">
            Tell us how you'll be using Sushrutha AI today.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">

          {/* Patient card */}
          <div
            className="bg-surface rounded-card p-8 w-72 cursor-pointer transition-all duration-300"
            style={{
              border: hovered === 'patient' ? '1px solid #E8A020' : '1px solid #2E2820',
              transform: hovered === 'patient' ? 'scale(1.05)' : 'scale(1)',
              boxShadow: hovered === 'patient' ? '0 0 30px rgba(232, 160, 32, 0.15)' : 'none',
            }}
            onClick={() => navigate('/signup', { state: { role: 'patient' } })}
            onMouseEnter={() => setHovered('patient')}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="text-4xl mb-4">🌿</div>
            <h2 className="font-display text-2xl text-cream font-normal mb-2">
              I'm here for myself
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed mb-6">
              Check your dosha from home.{' '}
              Tongue, voice, and pulse analysis.
            </p>
            <span className="text-xs text-hint font-sans tracking-widest uppercase">
              For individuals
            </span>
          </div>

          {/* Doctor card */}
          <div
            className="bg-surface rounded-card p-8 w-72 cursor-pointer transition-all duration-300"
            style={{
              border: hovered === 'doctor' ? '1px solid #C4845A' : '1px solid #2E2820',
              transform: hovered === 'doctor' ? 'scale(1.05)' : 'scale(1)',
              boxShadow: hovered === 'doctor' ? '0 0 30px rgba(196, 132, 90, 0.15)' : 'none',
            }}
            onClick={() => navigate('/signup', { state: { role: 'doctor' } })}
            onMouseEnter={() => setHovered('doctor')}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="text-4xl text-sandalwood mb-4">✦</div>
            <h2 className="font-display text-2xl text-cream font-normal mb-2">
              I'm a BAMS Doctor
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed mb-6">
              Manage your patients and walk-in clinic sessions with AI assistance.
            </p>
            <span className="text-xs text-hint font-sans tracking-widest uppercase">
              For verified BAMS practitioners
            </span>
          </div>

        </div>

        {/* Login link */}
        <p className="font-sans text-sm text-muted">
          Already have an account?{' '}
          <span
            className="text-turmeric hover:text-sandalwood cursor-pointer transition-colors duration-200"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}
