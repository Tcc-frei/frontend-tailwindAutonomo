import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import AboutUs from './pages/aboutUs'
import Contact from './pages/contact'
function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation