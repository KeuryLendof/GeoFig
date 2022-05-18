import React from 'react';
import { useParams } from 'react-router-dom';
import './Figuras.css';
import '../../App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Cuadrado, Triangulo, Circulo, Rectangulo, Rombo, Trapecio, Elipse, Pentagono, Hexagono, Cilindro, Cono, Cuadra, Esfera, Heptagono, Octagono } from '../Inputs/inputs';


const Figuras = () =>{


    const {id} = useParams();

    const prueba={
        Cuadrado:{
            descripcion:'Soy el cuadrado',
            img: require('../../assets/images/cuadrado.png')
        },
        Triangulo:{
            descripcion:'Soy el triangulo',
            img: require('../../assets/images/triangulo.png')
        }
    }

    return(
        <div className='App'>
            <Header/>
            <main className='figurasContainer'>

                <section className="publicidad">
                   {prueba.Cuadrado.descripcion}
                </section>

                <section className='subContenedorFiguras'>
                    <h1>Área de un {id}</h1>
                    <p>Ingresa el ancho y largo para calcular. Utiliza punto como separador decimal.</p>
                    <article className="figuraImg">
                        <img src={require(`../../assets/images/${id}.png`)}/>
                    </article>
                    <article className="figuraInput">
                        {
                            id === 'cuadrado' ? <Cuadrado/> :
                            id === 'triangulo' ? <Triangulo/> :
                            id === 'circulo' ? <Circulo/> :
                            id === 'rectangulo' ? <Rectangulo/> :
                            id === 'rombo' ? <Rombo/> :
                            id === 'trapecio' ? <Trapecio/> :
                            id === 'elipse' ? <Elipse/> :
                            id === 'pentagono' ? <Pentagono/> :
                            id === 'hexagono' ? <Hexagono/> :
                            id === 'cilindro' ? <Cilindro/> :
                            id === 'cono' ? <Cono/> :
                            id === 'cuadra' ? <Cuadra/> :
                            id === 'esfera' ? <Esfera/> :
                            id === 'heptagono' ? <Heptagono/> :
                            id === 'octagono' ? <Octagono/> :
                            null 
                        }
                    </article>
                </section>
            </main>
            <Footer/>
        </div>
    )
}


export default Figuras;