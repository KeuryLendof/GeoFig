import './App.css';
import Header from './componentes/Header/Header';
import Principal from './componentes/Principal/Principal';
import Footer from './componentes/Footer/Footer';
import Inicio from './componentes/Inicio/inicio';
import Rutas from './componentes/Rutas';

function App() {
  return (
    <div className="App">
      <Header />
      <Inicio />
      <Principal />
      <Footer />
    </div>

    
  );
}

export default App;
