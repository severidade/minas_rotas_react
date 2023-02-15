import './Reset.css';
import './App.css';

import Carousel from './componentes/Carousel/Carousel';
import Route from './componentes/Route/Route';
import Hero from './componentes/Hero/Hero';
import ValuesSection from './componentes/ValuesSection/ValuesSection';
import CtaSection from './componentes/CtaSection/CtaSection';
import VideoSection from './componentes/VideoSection/VideoSection';

function App() {
  return (
    <div className="App">
      <Hero />
      <Carousel />
      <Route />
      <ValuesSection />
      <CtaSection />
      <VideoSection />
    </div>
  );
}

export default App;
