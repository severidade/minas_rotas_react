import './Reset.css';
import './App.css';

import Carousel from './componentes/Carousel/Carousel';
import Route from './componentes/Route/Route';
import Head from './componentes/Head/Head';

function App() {
  return (
    <div className="App">
      <Head />
      <Carousel />
      <Route />
    </div>
  );
}

export default App;
