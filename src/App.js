import './Reset.css';
import './App.css';

import Carousel from './componentes/Carousel/Carousel';
import MapSection from './componentes/MapSection/MapSection';
import Hero from './componentes/Hero/Hero';
import ValuesSection from './componentes/ValuesSection/ValuesSection';
import CtaSection from './componentes/CtaSection/CtaSection';
import VideoSection from './componentes/VideoSection/VideoSection';

function App() {
  return (
    <div className="App">
      <Hero />
      <Carousel />
      <MapSection />
      <ValuesSection />
      <CtaSection />
      <VideoSection />
    </div>
  );
}

export default App;
