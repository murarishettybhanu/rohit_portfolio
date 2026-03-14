import { BrowserRouter, Routes, Route } from 'react-router-dom'
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/case-study/honc" element={<Layout><HoncCaseStudy /></Layout>} />
        <Route path="/case-study/doorpe" element={<Layout><DoorpeCaseStudy /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
