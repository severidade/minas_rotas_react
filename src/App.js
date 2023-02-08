import './Reset.css';
import './App.css';

import Carousel from './componentes/Carousel/Carousel';
import Route from './componentes/Route/Route';
import Hero from './componentes/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Hero />
      <Carousel />
      <Route />
    </div>
  );
}

export default App;
