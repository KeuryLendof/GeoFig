import { useState } from "react";
import './App.css';
import Header from './componentes/Header/Header';
import Principal from './componentes/Principal/Principal';
import Footer from './componentes/Footer/Footer';
import Inicio from './componentes/Inicio/inicio';

function App() {

  const figuras = [
    {
      id: 1,
      nombre: 'Cuadrado',
      imagen: require('./assets/images/cuadrado.png')
    },
    {
      id: 2,
      nombre: 'Triangulo',
      imagen: require('./assets/images/triangulo.png')
    },
    {
      id: 3,
      nombre: 'Circulo',
      imagen: require('./assets/images/circulo.png')
    },
    {
      id: 4,
      nombre: 'Rectangulo',
      imagen: require('./assets/images/rectangulo.png')
    },
    {
      id: 5,
      nombre: 'Rombo',
      imagen: require('./assets/images/rombo.png')
    },
    {
      id: 6,
      nombre: 'Trapecio',
      imagen: require('./assets/images/trapecio.png')
    },
    {
      id: 7,
      nombre: 'Elipse',
      imagen: require('./assets/images/elipse.png')
    },
    {
      id: 8,
      nombre: 'Pentagono',
      imagen: require('./assets/images/pentagono.png')
    },
    {
      id: 9,
      nombre: 'Hexagono',
      imagen: require('./assets/images/hexagono.png')
    },
    {
      id: 10,
      nombre: 'Cilindro',
      imagen: require('./assets/images/cilindro.png')
    },
    {
      id: 11,
      nombre: 'Cono',
      imagen: require('./assets/images/cono.png')
    },
    {
      id: 12,
      nombre: 'Cuadra',
      imagen: require('./assets/images/cuadra.png')
    },
    {
      id: 13,
      nombre: 'Esfera',
      imagen: require('./assets/images/esfera.png')
    },
    {
      id: 14,
      nombre: 'Heptagono',
      imagen: require('./assets/images/heptagono.png')
    },
    {
      id: 15,
      nombre: 'Octagono',
      imagen: require('./assets/images/octagono.png')
    }
  ]

  const [buscar, setBuscar] = useState('');


  return (
    <div className="App">
      <Header />
      <Inicio />
      <div className="join" id="search">
        <div className="join_container">
          <h2 className="join_title">Busca tus figuras geometricas aqui!</h2>
          <form action="" className="join_form">
            <input type="text" placeholder="Ejemplo 'cuadrado' " className="join_input" onChange={e => setBuscar(e.target.value)} />
          </form>
        </div>
      </div>
      <Principal figuras={figuras}/>
      <Footer />
    </div>

    
  );
}

export default App;
