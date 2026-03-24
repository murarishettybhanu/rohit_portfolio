import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import HoncCaseStudy from './pages/HoncCaseStudy'
import DoorpeCaseStudy from './pages/DoorpeCaseStudy'
import './components/Navbar.css'
import './components/Footer.css'
import './pages/Home.css'

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

// Wrapper component to provide location to Routes
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/case-study/honc" element={<Layout><HoncCaseStudy /></Layout>} />
        <Route path="/case-study/doorpe" element={<Layout><DoorpeCaseStudy /></Layout>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/rohit_portfolio/">
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
