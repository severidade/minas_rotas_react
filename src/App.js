import './Reset.css';
import './App.css';

import Carousel from './componentes/Carousel/Carousel';
import Route from './componentes/Route/Route';
import Hero from './componentes/Hero/Hero';
import Rates from './componentes/Rates/Rates';

function App() {
  return (
    <div className="App">
      <Hero />
      <Carousel />
      <Route />
      <Rates />
      
    </div>
  );
}

export default App;
