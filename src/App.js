import './Reset.css';
import './App.css';

import Carousel from './componentes/Carousel/Carousel';
import Route from './componentes/Route/Route';
import Hero from './componentes/Hero/Hero';
import Price from './componentes/Price/Price';

function App() {
  return (
    <div className="App">
      <Hero />
      <Carousel />
      <Route />
      <Price />
    </div>
  );
}

export default App;
