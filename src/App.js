import './Reset.css';
import './App.css';

import Carousel from './componentes/Carousel/Carousel';
import MapSection from './componentes/MapSection/MapSection';
import HeroSection from './componentes/HeroSection/HeroSection';
import ValuesSection from './componentes/ValuesSection/ValuesSection';
import CtaSection from './componentes/CtaSection/CtaSection';
import VideoSection from './componentes/VideoSection/VideoSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Carousel />
      <MapSection />
      <ValuesSection />
      <CtaSection />
      <VideoSection />
    </div>
  );
}

export default App;
