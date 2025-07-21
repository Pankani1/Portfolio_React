import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import { AnimatePresence, motion } from 'framer-motion';
import React, { Suspense, lazy } from 'react';
import Spinner from './components/Spinner';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col antialiased transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Suspense fallback={<Spinner />}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}