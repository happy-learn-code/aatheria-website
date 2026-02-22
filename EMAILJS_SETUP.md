# EmailJS Setup Guide

Follow these steps to connect your contact form to Gmail. Takes about 10 minutes.

---

## Step 1 — Create a free EmailJS account

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and sign up (free tier = 200 emails/month)
2. Verify your email

---

## Step 2 — Connect your Gmail

1. In the EmailJS dashboard, go to **Email Services → Add New Service**
2. Choose **Gmail**
3. Click **Connect Account** and authorise with your Gmail (e.g. `hello@aatheria.com.au` or your personal Gmail)
4. Give it a name like `Aatheria Contact`
5. Copy the **Service ID** (e.g. `service_abc123`) — you'll need it shortly

---

## Step 3 — Create an Email Template

1. Go to **Email Templates → Create New Template**
2. Set the **To Email** to your Gmail address
3. Paste the following template content:

**Subject:**
```
New Enquiry from {{from_name}} — Aatheria Website
```

**Body:**
```
You have a new enquiry from the Aatheria website contact form.

Name:     {{from_name}}
Email:    {{from_email}}
Company:  {{company}}

Message:
{{message}}

---
Reply directly to: {{reply_to}}
```

4. Save the template
5. Copy the **Template ID** (e.g. `template_xyz789`)

---

## Step 4 — Get your Public Key

1. Go to **Account → General**
2. Copy your **Public Key** (e.g. `user_XXXXXXXXXXXXXXX`)

---

## Step 5 — Add the keys to the React code

Open `src/App.jsx` and find these three lines near the top of the file (just above the `EMPTY_FORM` constant):

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
```

Replace the placeholder strings with your actual values:

```js
const EMAILJS_SERVICE_ID  = 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'user_XXXXXXXXXXXXXXX'
```

> ⚠️ **Note:** These keys are exposed in the client-side bundle. This is normal and expected for EmailJS.
> To prevent abuse, go to your EmailJS dashboard → **Security** and whitelist your GitHub Pages domain
> (e.g. `https://yourusername.github.io`).

---

## Step 6 — Install & run

```bash
npm install        # installs @emailjs/browser
npm run dev        # test locally
```

Fill in the contact form and check your Gmail inbox. Done! ✅

---

## Step 7 — Deploy to GitHub Pages

```bash
npm run build      # creates the dist/ folder
```

Push `dist/` to your GitHub Pages branch, or use the `gh-pages` npm package:

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Add to `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',   // ← your GitHub repo name
  plugins: [react()],
})
```

Then run:
```bash
npm run deploy
```

Your site will be live at `https://yourusername.github.io/your-repo-name/`
