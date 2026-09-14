import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Books from './pages/Books'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f7f2e9]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App