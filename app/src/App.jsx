//import './App.css'
import Navbar from './components/Navbar.jsx'
import Experience from './pages/Experience'

function App() {

  return (
    <>
      <Navbar />
      <main>
     {/* EXPERIENCIA */}
        <section id="experience" className="section">
          <Experience />
        </section>
      </main>
    </>
  )
}

export default App
