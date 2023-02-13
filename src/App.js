import './Reset.css';
import './App.css';

import Carousel from './componentes/Carousel/Carousel';
import Route from './componentes/Route/Route';
import Hero from './componentes/Hero/Hero';
import Rates from './componentes/Rates/Rates';
import CallToAction from './componentes/CallToAction/CallToAction';

function App() {
  return (
    <div className="App">
      <Hero />
      <Carousel />
      <Route />
      <Rates />
      <CallToAction />
      
    </div>
  );
}

export default App;
