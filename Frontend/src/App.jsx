import { BrowserRouter } from 'react-router'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Services from './components/Services'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
import Index from './pages/Index'

function App() {

  return (
    <>
      {/* <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer /> */}
<Index/>
  </>


  )
}

export default App
