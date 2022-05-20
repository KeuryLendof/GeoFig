import { useState } from "react";
import './App.css';
import Header from './componentes/Header/Header';
import Principal from './componentes/Principal/Principal';
import Footer from './componentes/Footer/Footer';
import Inicio from './componentes/Inicio/inicio';

function App() {

  const figuras = [
    {
      id: 'cuadrado',
      nombre: 'Cuadrado',
      imagen: require('./assets/images/cuadrado.png')
    },
    {
      id: 'triangulo',
      nombre: 'Triangulo',
      imagen: require('./assets/images/triangulo.png')
    },
    {
      id: 'circulo',
      nombre: 'Circulo',
      imagen: require('./assets/images/circulo.png')
    },
    {
      id: 'rectangulo',
      nombre: 'Rectangulo',
      imagen: require('./assets/images/rectangulo.png')
    },
    {
      id: 'rombo',
      nombre: 'Rombo',
      imagen: require('./assets/images/rombo.png')
    },
    {
      id: 'trapecio',
      nombre: 'Trapecio',
      imagen: require('./assets/images/trapecio.png')
    },
    {
      id: 'elipse',
      nombre: 'Elipse',
      imagen: require('./assets/images/elipse.png')
    },
    {
      id: 'pentagono',
      nombre: 'Pentagono',
      imagen: require('./assets/images/pentagono.png')
    },
    {
      id: 'hexagono',
      nombre: 'Hexagono',
      imagen: require('./assets/images/hexagono.png')
    },
    {
      id: 'cilindro',
      nombre: 'Cilindro',
      imagen: require('./assets/images/cilindro.png')
    },
    {
      id: 'cono',
      nombre: 'Cono',
      imagen: require('./assets/images/cono.png')
    },
    {
      id: 'cuadra',
      nombre: 'Cubo',
      imagen: require('./assets/images/cuadra.png')
    },
    {
      id: 'esfera',
      nombre: 'Esfera',
      imagen: require('./assets/images/esfera.png')
    },
    {
      id: 'heptagono',
      nombre: 'Heptagono',
      imagen: require('./assets/images/heptagono.png')
    },
    {
      id: 'octagono',
      nombre: 'Octagono',
      imagen: require('./assets/images/octagono.png')
    }
  ]

  const [buscar, setBuscar] = useState('');


  return (
    <div className="App">
      <Header />
      <Inicio />
      <div className="join" id="buscar">
        <div className="join_container">
          <h2 className="join_title">Busca tus figuras geometricas aqui!</h2>
          <form action="" className="join_form">
            <input type="text" placeholder="Ejemplo 'cuadrado' " className="join_input" onChange={e => setBuscar(e.target.value)} />
          </form>
        </div>
      </div>
      <Principal figuras={figuras} buscar={buscar}/>
      <Footer />
    </div>

    
  );
}

export default App;
