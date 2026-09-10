import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#f7f2e9]">
      <Navbar />
      <Home />
      <Footer/>
    </div>
  )
}

export default App