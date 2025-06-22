import { BrowserRouter } from 'react-router'
import './App.css'
import Index from './pages/Index'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Services from './components/Services'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {

  return (<>
    <body id="main" className=
      " index-page">

      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
                    <Resume />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </body>

  </>


  )
}

export default App
