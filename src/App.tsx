import './App.scss'
import Awards from './components/Awards/Awards'
import Hero from './components/Hero/Hero'
import AboutUs from './components/AboutUs/AboutUs';
import Metrics from './components/Metrics/Metrics';
import OurServices from './components/OurServices/OurServices';
import Works from './components/Works/Works';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Hero />
      <Awards />
      <AboutUs />
      <Metrics />
      <OurServices />
      <Works />
      <Footer />
    </div>
  )
}

export default App
