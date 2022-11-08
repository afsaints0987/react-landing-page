import Navigation from './components/Navigation'
import ParticlesConfig from './components/ParticlesConfig'
import Hero from './components/Hero'
import Divider from './components/Divider'
import Divider2 from './components/Divider2'
import Divider3 from './components/Divider3'
import Plan from './components/Plan'
import Services from './components/Services'
import FreeTrial from './components/FreeTrial'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <ParticlesConfig/>
      <Navigation/>
      <Hero/>
      <Divider/>
      <Divider2/>
      <Divider3/>
      <Services/>
      <Plan/>
      <FreeTrial/>
      <Footer/>
    </div>
  );
}

export default App;
