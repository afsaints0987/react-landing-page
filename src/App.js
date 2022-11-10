import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation'
import ParticlesConfig from './components/ParticlesConfig'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import {AnimatePresence} from 'framer-motion'

function App() {
  return (
    <div className="App">
    <ParticlesConfig/>
    <Navigation/>
    <AnimatePresence>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </AnimatePresence>
    <Footer/>
    </div>
  );
}

export default App;
