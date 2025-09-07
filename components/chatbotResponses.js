// components/chatbotResponses.js
// Expanded, high-coverage Q&A for Gwer Dev assistant with clear explanations for all messages

const responses = {
  // -------------------------
  // CORE GREETINGS & VOICE
  // -------------------------
  "hi": {
    text:
      "👋 Hi — I’m Gwer Dev’s assistant. I explain services, pricing, and how to start a project with Donatus. Tell me what you need: Services, Pricing, Portfolio, or 'how do i start'.",
    suggestions: ["Services", "How do I start?", "Show me portfolio"]
  },
  "hello": {
    text:
      "Hello 👋 — welcome! I help small businesses and vendors get online: websites, marketplaces, booking systems, dashboards, and WhatsApp + payment integrations. What would you like to do?",
    suggestions: ["Services", "Pricing", "Contact Gwer"]
  },
  "hey": "Hey! Ask me about services, pricing, or say 'suggest questions' for ideas.",
  "good morning": "Good morning ☀️! How can I help with your website or automation today?",
  "good afternoon": "Good afternoon — tell me your project idea and I’ll propose next steps.",
  "good evening": "Good evening 🌙! Need a site, a booking tool, or WhatsApp automation?",

  // polite closers
  "thanks": "🙏 You’re welcome! Want a quote, examples, or help starting a project?",
  "thank you": "Anytime — tell me if you'd like a quote, a demo, or to contact Gwer.",
  "bye": "Goodbye 👋 — message me any time. To get a quote say 'I want a quote'.",
  "see you": "See you soon! When ready, tell me your brief and I’ll prepare a proposal.",

  // about / bio
  "about you": "👨‍💻 I’m the assistant for Donatus (Gwer Dev). Donatus is a Django developer building secure web apps, marketplaces, booking platforms, dashboards, and WhatsApp + payment integrations for SMEs and vendors.",
  "who are you": "I’m Gwer Dev’s assistant — here to explain services, pricing, and next steps. Want to see the services list?",
  "gwer dev": "Gwer Dev (Donatus) — Django-focused full-stack developer. He delivers practical, secure solutions for businesses (websites, marketplaces, booking systems, dashboards, APIs).",

  // quick help explicit only
  "suggest questions": {
    text: "💡 Try these questions:",
    suggestions: [
      "What services do you offer?",
      "I want a website — how much?",
      "Tell me about e-commerce / marketplace",
      "How do payments work (Paystack)?",
      "WhatsApp automation",
      "How long does a project take?",
      "Show portfolio",
      "How do I start?"
    ]
  },

  // -------------------------
  // SERVICES LIST (clickable)
  // -------------------------
  "services": {
    text:
`✨ Services (pick one by typing its name or number):
1) Custom Websites & Landing Pages
2) E-commerce Stores & Marketplaces
3) Booking & Reservation Systems
4) Web Applications & Dashboards
5) Website Maintenance & Security

🔹 WhatsApp Business & Automation
6) WhatsApp Chatbot Development
7) WhatsApp API Integration (Business API) & Templates
8) WhatsApp Payments Integration (Paystack/Flutterwave)
9) Automated Notifications (WhatsApp/Email/SMS)
10) WhatsApp Marketing Campaigns

🔹 Software & Engineering Solutions
11) Custom Business Software (inventory, POS, HR)
12) Integration with Existing Tools (accounting, CRM)
13) Data Analytics Dashboards
14) API Development

🔹 Value-Added Services
15) SEO & Google Business Setup
16) UI/UX Design
17) Training & Support
18) Digital Strategy Consulting

Reply with the **name or number** (e.g. '3' or 'booking system') and I’ll explain: what it is, how it helps, price range, timeline, and next steps.`,
    suggestions: ["1) Custom Websites", "2) E-commerce / Marketplace", "6) WhatsApp Chatbot Development", "11) Custom Business Software"]
  },

  // -------------------------
  // DETAILED SERVICES
  // -------------------------
  "1": { text:
`🏢 Custom Websites & Landing Pages
What it is:
Modern responsive landing pages or multi-page websites to represent your brand, promote products, or capture leads.

Features:
- Mobile-friendly, fast-loading, SEO-ready
- Hero section, testimonials, services/products, contact forms
- Admin area for content updates
Benefits:
- Build credibility with Nigerian customers
- Collect leads for WhatsApp or email follow-ups
Price range:
- Landing page: ₦120,000 (≈$100)
- Multi-page website: ₦180,000–₦360,000 (≈$150–$300)
Timeline:
- Landing page: 2–5 days
- Multi-page: 1–2 weeks
Next steps: Send logo, text, and 2 example sites. Reply 'I want a landing page' to start.`,
    suggestions: ["I want a landing page", "Get Quote", "Contact Gwer"]
  },
  "custom websites": "See '1' — I build modern, responsive landing pages and company sites. To start, send logo and key text.",

  "2": { text:
`🛒 E-commerce Stores & Marketplaces
What it is:
Online stores or multi-vendor marketplaces where customers can browse, order, and pay online.

Features:
- Product catalog, categories, size/color variants
- Cart & secure checkout
- Order management, shipping, email/WhatsApp notifications
- Marketplace options: vendor dashboards, escrow payments, payouts
Benefits:
- Sell 24/7 across Nigeria
- Automate notifications and payments
- Scale vendors without extra staff
Price range:
- Single-seller: ₦240,000–₦480,000
- Multi-vendor: ₦480,000 – ₦1,200,000+
Timeline:
- Single-seller: 1–3 weeks
- Multi-vendor: 3–8+ weeks
Next steps: Tell me if single or multi-vendor, number of products, and preferred payment gateway.`,
    suggestions: ["I want an e-commerce site", "Marketplace price", "Payment integration"]
  },
  "e-commerce": "E-commerce stores let you list products, accept payments, and manage orders. Multi-vendor adds seller dashboards and escrow flows.",
  "i want an e-commerce": "Tell me if single or multi-seller, number of products, and preferred payment provider (Paystack/Flutterwave).",

  "3": { text:
`📅 Booking & Reservation Systems
What it is:
Tools for customers to book appointments, events, or services, optionally with payments.

Features:
- Calendar/time-slot booking
- Vendor availability management
- Booking forms, confirmations via email/WhatsApp
- Payment options: deposit, full, or escrow
Benefits:
- Reduce double bookings, no-shows
- Save staff time, improve customer experience
Price range: ₦360,000+
Timeline: 2–5 weeks
Next steps: Tell me industry (salon, events, restaurant), vendor management, and payment preference.`,
    suggestions: ["Booking price", "Booking payment", "Who needs booking"]
  },
  "booking system": "Booking systems help schedule services with optional payments. Ideal for salons, event vendors, and restaurants.",

  "4": { text:
`📊 Web Applications & Dashboards
What it is:
Custom apps to manage inventory, sales, vendors, staff, and analytics.

Features:
- Admin & vendor dashboards
- Reports, CSV exports
- Role-based access control
Benefits:
- Centralize business operations
- Track performance and growth
Price range: ₦360,000 – ₦900,000+
Timeline: 3–6 weeks
Next steps: Share key workflows you want automated (inventory, orders, vendors).`,
    suggestions: ["Dashboard features", "Reporting examples", "Get Quote"]
  },
  "web applications": "Custom apps and dashboards: inventory, CRM, invoicing, and vendor management.",

  "5": { text:
`🛡️ Website Maintenance & Security
What it is:
Ongoing service to keep websites updated, secure, and backed up.

Includes:
- Regular updates, patches
- Backups & restore tests
- Uptime monitoring, SSL setup
- Small content edits & priority fixes
Benefits:
- Protect against hacks, downtime, and data loss
Pricing:
- Basic: ₦60,000/year
- Full support: ₦180,000/year
Timeline: Ongoing`,
    suggestions: ["Maintenance plan", "Get a maintenance quote", "Support options"]
  },
  "website maintenance": "Maintenance keeps your site secure and live: updates, backups, and support included.",

  "6": { text:
`🤖 WhatsApp Chatbot Development
What it is:
Automate FAQs, lead capture, and order collection on WhatsApp.

Features:
- Predefined flows, quick replies
- Lead capture & notifications
- Handoff to human agent
Benefits:
- Fast responses, 24/7 support, reduces manual work
Price range: ₦120,000 – ₦360,000
Timeline: 1–3 weeks
Next steps: Share top FAQs or order flow for sample chatbot.`,
    suggestions: ["Build a chatbot", "WhatsApp automation", "Get Quote"]
  },
  "whatsapp chatbot": "Automates FAQs and orders. Start by listing your common questions and order steps.",

  "7": { text:
`📲 WhatsApp API Integration (Business API)
What it is:
Connect WhatsApp officially to send automated templates, receive messages, and integrate with CRM.

Benefits:
- Automated order confirmations, OTPs
- Centralized messages
- Better reporting & analytics
Price range: ₦90,000 – ₦300,000
Timeline: 1–2 weeks (provider setup may take longer)
Next steps: I can assist with phone setup and template creation.`,
    suggestions: ["Integrate WhatsApp API", "Send templates", "Contact Gwer"]
  },
  "whatsapp api": "Official Business API enables templates, webhooks, and CRM sync. Provider approval required.",

  "8": { text:
`💳 WhatsApp Payments Integration (Paystack/Flutterwave)
How it works:
1) Customer places order via WhatsApp
2) System sends secure payment link
3) Payment confirmed via webhook → order confirmed
Benefits:
- Checkout within WhatsApp
- Secure payments
Price range: ₦120,000 – ₦360,000
Timeline: 1–3 weeks
Next steps: Choose Paystack or Flutterwave; I’ll prepare sample flow.`,
    suggestions: ["WhatsApp payment flow", "Paystack", "Send payment via WhatsApp"]
  },
  "whatsapp payments": "Secure Paystack/Flutterwave links sent via WhatsApp. Payments verified automatically.",

  "paystack": "✅ Paystack: checkout, verification webhooks, payouts. I help setup accounts.",
  "flutterwave": "✅ Flutterwave: similar to Paystack. Choose your gateway.",

  "9": { text:
`📩 Automated Notifications (WhatsApp / Email / SMS)
What it is:
Automatic messages for orders, bookings, payments, reminders.

Benefits:
- Reduce support load
- Keep customers informed
Price: from ₦60,000
Timeline: ~1 week for basic flows`,
    suggestions: ["Add notifications", "WhatsApp notifications", "Email receipts"]
  },
  "automated notifications": "Notifications keep customers updated via WhatsApp, email, or SMS.",

  "10": { text:
`📣 WhatsApp Marketing Campaigns
What it is:
Targeted campaigns through WhatsApp for promotions or engagement (compliant).

Features:
- Broadcast messages, scheduled campaigns
- Promo codes, event reminders
Benefits:
- Direct reach, high open rates
Price: from ₦180,000 depending on list size
Timeline: 1–3 weeks`,
    suggestions: ["Start a campaign", "WhatsApp marketing cost"]
  },
  "whatsapp marketing": "Reach customers directly via campaigns. Opt-ins required for compliance.",

  // -------------------------
  // SOFTWARE & INTEGRATIONS (full answers)
  // -------------------------
  "11": "Custom Business Software — tailored apps (inventory, POS, HR). Price starts at ₦360,000 depending on scope. Includes analysis, design, development, and deployment.",
  "12": "Integration with Existing Tools — connect website/WhatsApp to QuickBooks, CRMs, etc. Price depends on API availability.",
  "13": "Data Analytics Dashboards — visual reports for sales, customers, performance. Helps decision-making; price varies with data complexity.",
  "14": "API Development — custom APIs to connect apps, automation, and third-party tools. Price depends on endpoints and complexity.",

  // -------------------------
  // VALUE-ADDED SERVICES
  // -------------------------
  "15": "SEO & Google Business Setup — on-page SEO, sitemaps, and GMB for local visibility. Price from ₦60,000 depending on scope.",
  "16": "UI/UX Design — clean interfaces and simple journeys. Includes mockups & usability testing. Price from ₦60,000.",
  "17": "Training & Support — live or recorded sessions to manage admin panels. Price depends on hours.",
  "18": "Digital Strategy Consulting — actionable plan combining web, WhatsApp, and marketing. Single-page strategy delivered.",

  // -------------------------
  // COMMON QUESTIONS / FAQ (answers complete)
  // -------------------------
  "how do i start": {
    text:
      `🛠️ How to start:
1) Send brief: type, pages/products, features, examples
2) Receive proposal with price & timeline
3) Approve & pay 30–50% deposit → I start
4) Review → testing → deployment → short training
Send your brief now for a draft proposal.`,
    suggestions: ["I will send a brief", "Get Quote", "Contact Gwer"]
  },
  "i want a quote": "Send project type, features, pages/products, examples. I’ll prepare a proposal and price estimate.",
  "what's included": "Included: responsive design, basic SEO, deployment, source code access, handover session, 1–3 revision rounds.",

  "how much do you charge": {
    text:
      `💰 Pricing guide (starting ranges):
- Landing page: ₦120,000
- Small business site: ₦180,000–₦360,000
- Booking system: ₦360,000+
- Marketplace: ₦480,000 – ₦1,200,000+
- Dashboard/admin: ₦360,000 – ₦900,000
- API integration: ₦60,000+
Final price depends on features. Say 'I want a quote' for tailored pricing.`,
    suggestions: ["Tell me what’s included", "I want a quote"]
  },
  "payment": {
    text:
      `💳 Payments:
- Paystack, Flutterwave, Bank transfer
- Deposit: 30–50% upfront
- Milestones for large projects
- Invoices and receipts provided`,
    suggestions: ["Paystack", "Deposit", "Get Invoice"]
  },

  "how does payment work": `Paystack example:
1) I send link/invoice
2) You pay deposit or full
3) Paystack webhook confirms → I continue
Large projects: escrow flow until delivery confirmation.`,

  "do you accept paystack": "Yes — NGN payments, webhooks, verification. I help setup your Paystack account.",
  "deposit": "Deposits: 30–50% upfront. Large projects: milestone payments. Deposits generally non-refundable once work begins.",
  "refund": "Refunds: case-by-case. Work progress documented to minimize disputes.",
  "warranty": "14-day bug-fix warranty. Extended support via maintenance plan.",
  "revisions": "1–3 revision rounds included. Extra changes billed hourly.",
  "support": "14-day free support. Monthly plans available for updates/backups.",
  "timeline": "Landing page 2–5 days; business site 1–2 weeks; booking/marketplace 2–8+ weeks.",

  // -------------------------
  // TECH & HOSTING
  // -------------------------
  "tech stack": "Backend: Django; Frontend: React/Next.js; DB: PostgreSQL/MySQL. Hosting: Vercel, Render, DigitalOcean. SSL included.",
  "hosting": "I host or deploy to your provider. Hosting fees separate.",
  "deployment": "Staging & production setup; optional CI/CD.",
  "staging environment": "Staging site for testing before live.",
  "backup": "Automated daily/weekly backups; restore tested if needed.",
  "security": "SSL, input validation, rate-limiting, secure payments, role-based access.",
  "performance": "Optimize images, lazy load, cache, CDN for fast load.",
  "scaling": "Caching, DB indexing, Redis/CDN for growing traffic.",

  // -------------------------
  // INDUSTRY EXAMPLES
  // -------------------------
  "fashion e-commerce": "Product variants, size guides, lookbooks, promo codes, returns handling. Start single-seller, expand to multi-vendor.",
  "restaurant ordering": "Menu, cart, pickup/delivery, scheduling, local delivery integration.",
  "event vendor booking": "Vendors list packages, calendar, deposits, confirmations via WhatsApp/email.",
  "digital downloads": "Secure download links after payment, optional license expiry.",

  // -------------------------
  // MIGRATION / REDESIGN
  // -------------------------
  "migrate from wordpress": "I migrate content/images from WordPress to Django. Cleaning may be needed. I provide plan & cost.",
  "redesign website": "Refresh UI/UX while keeping content. Mockups & roadmap provided.",

  // -------------------------
  // ADMIN / CMS / UPDATES
  // -------------------------
  "admin": "All projects include admin to manage pages, products/orders, users. Vendor/staff role-based access available.",
  "can i update my site": "Yes — admin access + guide + training. Managed updates available via support plan.",

  // -------------------------
  // SEO / ANALYTICS / MARKETING
  // -------------------------
  "seo": "On-page SEO: meta tags, sitemaps, friendly URLs. Advanced SEO extra.",
  "google analytics": "Integrate GA with dashboards for visitor tracking.",
  "email marketing": "Mailchimp or similar integrated for automatic lead capture.",

  // -------------------------
  // ADDITIONAL FEATURES
  // -------------------------
  "multi-language": "Language switcher + translations. Requires translated copy & extra admin fields.",
  "mobile app integration": "Backend API endpoints for mobile app use (login, orders, products).",
  "pwa": "Installable web app with offline caching. Good pre-native solution.",
  "push notifications": "Web/mobile push for orders, messages, promos.",

  // -------------------------
  // LEGAL
  // -------------------------
  "nda": "NDA available. Tell me if needed.",
  "contract": "Contracts for larger projects: scope, timeline, payments, deliverables.",
  "gdpr": "EU compliance: cookie consent, data export/delete, privacy controls (extra work).",

  // -------------------------
  // CONTACT / PORTFOLIO
  // -------------------------
  "contact": {
    text: "📧 donatusgwer@gmail.com | 📱 +2348116276112 | Portfolio: https://portfolio-uey9.onrender.com\nI can open WhatsApp or prepare a quote.",
    suggestions: ["Contact Gwer", "Get Quote", "Show portfolio"]
  },
  "contact gwer": "Best: send brief (type, features, pages/products, examples) → I prepare proposal.",

  "portfolio": {
    text: "👨‍💻 Portfolio: https://portfolio-uey9.onrender.com — live sites and case studies. Tell industry for relevant examples.",
    suggestions: ["Show portfolio", "Fashion examples", "Event examples"]
  },
  "show me your portfolio": "Portfolio: https://portfolio-uey9.onrender.com — message your industry to see examples.",

  // -------------------------
  // SHORTCUTS & ALIASES
  // -------------------------
  "i want a website": "Landing page, business site, or e-commerce? Reply '1', '2', or '3'.",
  "i want a marketplace": "Type 'marketplace' or '2'. Tell me single or multi-seller.",
  "i want a booking site": "Type 'booking' or '3'. Specify vendor management.",
  "how long": "Landing page 2–5 days, business site 1–2 weeks, marketplace 3–8+ weeks.",
  "how long does a project take": "See 'how long'. Quote provides exact timeline.",

  // -------------------------
  // TRANSACTIONS / INVOICES
  // -------------------------
  "get invoice": "Provide project name, amount, and email. I prepare invoice.",
  "get quote": "Provide type, features, pages/products, examples. I prepare proposal + price estimate.",

  // -------------------------
  // FALLBACK
  // -------------------------
  "default": {
    text:
      "🤔 I’m not sure about that. Try 'services', 'pricing', 'portfolio', 'how do I start', or 'suggest questions'. Or type service name/number (e.g., 'E-commerce' or '2') and I’ll explain. Paste brief to draft a plan.",
    suggestions: ["Services", "How do I start?", "I want a quote", "Contact Gwer"]
  }
};

export default responses;
