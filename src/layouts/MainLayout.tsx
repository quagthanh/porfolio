import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { routeFadeScale, routeSlide } from '../animations/variants';

export default function MainLayout() {
  const location = useLocation();

  // Determine transition based on route
  // / -> /projects: Fade + Scale
  // /projects -> /projects/:id: Slide
  
  // If it's project detail page, use slide. Otherwise, use fadeScale.
  const isProjectDetail = location.pathname.match(/^\/projects\/[^/]+$/);
  
  const variants = isProjectDetail ? routeSlide : routeFadeScale;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 w-full mx-auto px-6 md:px-12 lg:px-12" style={{ maxWidth: 'var(--container-width)' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            className="w-full h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
