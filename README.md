# Personal Portfolio Website - Dinh Quang Thanh

A modern, interactive frontend portfolio website showcasing my projects, skills, and experience as a Frontend Developer Intern.

## 🛠 Tech Stack

- **Framework**: React 19, Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, CSS Variables (Custom Theme System)
- **Routing**: React Router v6
- **Animation**: Framer Motion (Page Transitions & Micro-interactions), HTML5 Canvas (WebGL-inspired Hero Background)
- **Form Handling & Validation**: React Hook Form, Zod
- **Icons**: Lucide React, React Icons

## 🚀 How to Run the Project

Prerequisites: Node.js (v18+ recommended).

1. Clone the repository:
   ```bash
   git clone https://github.com/quagthanh/portfolio.git
   cd portfolio/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   *The website will be available at `http://localhost:5173`.*

## ✨ Features Implemented

- **Routing (5 Separate Routes)**: Implemented React Router v6 with distinct pages (`/`, `/resume`, `/skills`, `/projects`, `/contact`) and a custom `404 Not Found` page. Includes an automatic `ScrollToTop` component on route change.
- **Advanced Animations**: 
  - Complex Canvas physics animation (Interactive Neon Waves dodging the mouse) in the Hero section.
  - Page transition animations (Fade & Scale, Slide) using Framer Motion `<AnimatePresence>`.
  - Micro-interactions on buttons, active navbar underline (`layoutId`), and scroll-reveal (`whileInView`).
- **Data-Driven Architecture**: All data (Projects, Skills, Experience, Personal Info) is isolated in `src/data/`, keeping components clean and strictly mapping data to UI.
- **Project Filter & Search**: The Projects page features real-time search by name and filtering by technology tags (React, Node.js, etc.).
- **Form Validation & UX States**: The Contact form implements strict validation using Zod (Email format, Min characters). Features realistic UX states (Submit loading, Disable button, Success message feedback) without using native alerts.
- **Theme Support & Accessibility**:
  - Full Light/Dark mode toggle with dynamic CSS variables.
  - Fully responsive on Mobile, Tablet, and Desktop.
  - Keyboard accessibility (Hamburger menu toggle, focus states) and semantic HTML tags.
  - Performance optimized with `loading="lazy"` on all image assets.

## 🔗 Links & Screenshots

- **Live Demo:** [https://porfolio-phi-livid.vercel.app/](https://porfolio-phi-livid.vercel.app/)
- **GitHub Repository:** [https://github.com/quagthanh/portfolio](https://github.com/quagthanh/portfolio)

### Screenshots

*(You can replace the paths below with actual screenshots of your website)*

**1. Hero Section (Canvas Interactive Background & Dark Mode)**
![Hero Section Screenshot](./public/screenshot-hero.png)

**2. Projects Page (Data-Driven Filter & Search)**
![Projects Section Screenshot](./public/screenshot-projects.png)

**3. Contact Form (Zod Validation & Light Mode)**
![Contact Form Screenshot](./public/screenshot-contact.png)
