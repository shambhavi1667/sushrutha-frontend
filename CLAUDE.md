# Sushrutha AI — Frontend Project Context

## What This Is
Two-sided Ayurvedic diagnostic web platform.
Patients self-scan at home. Doctors manage patients and walk-in sessions.
This is a WEBSITE — not a mobile app. Works in any browser.

## Tech Stack
- React 18 + Vite
- React Router v6
- Tailwind CSS v3
- Axios (all API calls)
- Socket.IO Client v4 (live ESP32 pulse + notifications)
- Chart.js v4 + react-chartjs-2
- Leaflet v1.9 + react-leaflet v4
- qrcode.react (QR claim flow)
- i18next + react-i18next (English now, Kannada later)

## Design System
Dark warm Ayurvedic theme.

### Colors (CSS variables + Tailwind classes)
- bg: #0D0B08 (main background)
- surface: #1C1712 (cards)
- border: #2E2820 (borders)
- turmeric: #E8A020 (primary CTA, buttons)
- sandalwood: #C4845A (secondary, hover)
- neem: #4A7C59 (success, sensor connected, mild severity)
- kumkum: #C0392B (severe alerts, errors)
- cream: #F5EDD6 (primary text)
- muted: #A89880 (secondary text)
- hint: #6B5E50 (placeholder, labels)

### Fonts
- Cormorant Garamond — display/headings only (serif)
- DM Sans — all UI, body, buttons (sans-serif)
- JetBrains Mono — numbers, BPM, dosha percentages

### Component Rules
- Cards: bg-surface, border border-border, rounded-card (12px)
- Primary button: bg-turmeric text-bg rounded-full font-sans
- Secondary button: border border-turmeric text-turmeric rounded-full
- All pages: min-h-screen bg-bg text-cream font-sans
- Grain texture overlay on body via CSS
- Faint mandala motif in hero sections

## Two User Roles
### Patient
- Registers as "I'm here for myself" (never called "Patient" in UI)
- Self-scans at home: symptoms + tongue photo + voice + optional ESP32
- Views dosha results with severity-based content
- Finds doctors on map, shares report, messages doctor

### Doctor  
- Registers as "BAMS Doctor"
- Admin manually sets doctors.verified=TRUE in Supabase
- Path A: receives shared reports from website patients
- Path B: creates walk-in sessions for clinic patients

## Severity System (CRITICAL — affects Results.jsx entirely)
After SVM returns dosha scores:
- mild: dominant < 55% → full recipe + 3 yoga + diet + forecast + soft doctor suggestion (neem green banner)
- moderate: dominant 55-69% → 2 herbs + 2 yoga + general diet + amber banner + doctor map prominent
- severe: dominant >= 70% → general tip only + red banner + fullscreen doctor map + no recipe/yoga

## Key Rules — Never Break These
1. Never hardcode any URL — always from import.meta.env.VITE_API_URL
2. Never read localStorage directly — always through useAuth() hook
3. Never use fetch() — always use the axios instance from src/api/axios.js
4. Every async action must have loading state and error handling
5. Every list must handle empty state
6. All pages must be mobile responsive
7. No phone numbers or emails ever shown between patient and doctor
8. Role-based routing enforced in App.jsx — wrong role redirects to /unauthorized

## API Base URL
Development: http://localhost:8000
Production: from VITE_API_URL env variable

## Backend Routes Reference
- POST /auth/register
- POST /auth/login
- POST /vision (tongue photo)
- POST /voice (audio file)
- POST /diagnose (runs all ML in parallel)
- GET /recipe/{dosha}
- GET /forecast/{user_id}
- WS /ws/pulse (ESP32 live BPM)
- POST /scans/{id}/share
- GET /doctor/patients
- POST /doctor/walkin
- POST /guest/claim
- POST /messages
- GET /messages/{thread_id}
- GET /clinics
- GET /notifications

## Folder Structure
src/
  api/axios.js
  components/ (15 components)
  context/AuthContext.jsx
  hooks/ (useAuth, useCamera, useWebSocket)
  pages/patient/ (Scan, Results, Profile)
  pages/doctor/ (DoctorDashboard, DoctorWalkin, DoctorPatient, DoctorMessages, DoctorAnalytics)
  pages/shared/ (Messages, Notifications)
  pages/ (Home, RoleSelect, Login, Signup, Claim, NotFound, Unauthorized)
  utils/decodeJWT.js
