# Aatheria Website

A modern, single-page company website for **Aatheria** — an Australian hospitality technology company based in Melbourne.

## Tech Stack
- **React 18** + **Vite 4**
- **EmailJS** (`@emailjs/browser`) — contact form → Gmail, no backend needed
- Pure CSS (no external UI libraries)
- Google Fonts: Cormorant Garamond + DM Sans

## Getting Started

```bash
npm install   # installs all deps including @emailjs/browser
npm run dev   # start dev server
npm run build # production build
```

## Connecting the Contact Form to Gmail

See **EMAILJS_SETUP.md** for the full guide. Quick version:

1. Sign up free at emailjs.com
2. Connect Gmail → get a Service ID
3. Create an email template → get a Template ID
4. Grab your Public Key from Account settings
5. Open `src/App.jsx` and replace the three constants at the top of Contact:
   ```js
   const EMAILJS_SERVICE_ID  = 'service_abc123'
   const EMAILJS_TEMPLATE_ID = 'template_xyz789'
   const EMAILJS_PUBLIC_KEY  = 'user_XXXXXXXXXXXXXXX'
   ```

## Contact Form Features
- Client-side validation with inline error messages
- Loading spinner during submission
- Success / error feedback cards
- No backend — works on GitHub Pages

## Design System
- Fonts: Cormorant Garamond + DM Sans
- Colors: Deep Navy #0B1526 · Gold #C9A84C · Cream #F9F6F0
