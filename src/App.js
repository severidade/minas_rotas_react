import './Reset.css';
import './App.css';

import Carousel from './componentes/Carousel/Carousel';
import Route from './componentes/Route/Route';
import Hero from './componentes/Hero/Hero';
import Rates from './componentes/Rates/Rates';
import CallToAction from './componentes/CallToAction/CallToAction';
import VideoSection from './componentes/VideoSection/VideoSection';

function App() {
  return (
    <div className="App">
      <Hero />
      <Carousel />
      <Route />
      <Rates />
      <CallToAction />
      <VideoSection />
    </div>
  );
}

export default App;
