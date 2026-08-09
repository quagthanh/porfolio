# Portfolio Website - Dinh Quang Thanh

This is a personal website (Portfolio/CV).

## 🛠 Tech Stack
- **Framework/Library**: React 19, Vite.
- **Language**: TypeScript.
- **Styling**: Tailwind CSS v4, CSS Variables for a structured Design System.
- **Routing**: React Router v6+.
- **Animation**: Framer Motion.
- **Form Handling & Validation**: React Hook Form, Zod.
- **Icons**: Lucide React, React Icons (FontAwesome, Si).

## 🚀 Installation & Setup

Environment requirement: `Node.js` (v18+ recommended).

1. Clone the repository:
```bash
git clone https://github.com/quagthanh/<repo-name>.git
cd <repo-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. The website will be available at `http://localhost:5173`.

To build the project for Production:
```bash
npm run build
```

## ✨ Key Features
- **SPA with Multi-page capabilities**: Utilizing React Router v6 to handle routing between `/` (Home), `/projects` (All Projects), and `/projects/:id` (Project Details).
- **Smooth Scrolling & Active Navbar State**: Hash navigation (`#hash`) smoothly scrolls to sections on the homepage. The Navbar automatically highlights the active section based on the current scroll position.
- **Framer Motion Animations**: 
  - Seamless route transitions.
  - Interactive micro-animations on hover and scroll-reveal fade-ups.
- **Data-Driven Architecture**: The entire website's content (Education, Experience, Skills, Projects) is decoupled and stored in `src/data/`, making it extremely easy to maintain without altering UI components.
- **Filter & Search Projects**: 
  - The `/projects` page features a text-based search (Search by name).
  - Filter projects dynamically based on tech stack tags (e.g., React, Node.js).
- **Contact Form Validation**: 
  - Beautifully designed contact form.
  - Strict validation using Zod (valid Email format, Required fields, Message must be at least 20 characters).
  - Realistic UX states including Submit Loading and Success Feedbacks without using primitive browser `alert()`s.
- **Responsive & Accessibility (a11y)**:
  - 100% optimized for Mobile, Tablet, and Desktop screens.
  - Interactive Sidebar Menu on Mobile.
  - Complete with Semantic HTML tags, `htmlFor` attributes in forms, and `aria-labels` for the best accessible experience.
- **Modern Dark UI**: A Cyber/Developer-inspired color palette (Navy - Mint - Purple) combined with Clean Code practices and an avoidance of inline styling.

## 🔗 Live Demo

*Update your Vercel / Netlify / Github Pages link here.*
- Live Demo: [https://your-portfolio-domain.com](https://your-portfolio-domain.com)

---
*Created by Dinh Quang Thanh.*
