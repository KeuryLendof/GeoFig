import React from 'react';
import { useParams } from 'react-router-dom';
import './Figuras.css';
import '../../App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Cuadrado, Triangulo, Circulo, Rectangulo, Rombo, Trapecio, Elipse, Pentagono, Hexagono, Cilindro, Cono, Cuadra, Esfera, Heptagono, Octagono } from '../Inputs/inputs';


const Figuras = () =>{


    const {id} = useParams();

    return(
        <div className='App'>
            <Header/>
            <main className='figurasContainer'>

                <section className="publicidad">
                   
                </section>

                <section className='subContenedorFiguras'>
                    <h1>Área de un {id}</h1>
                    <p>El área de una figura geométrica se refiere a la cantidad de superficie encerrada por su perímetro. Dependiendo de la figura, la fórmula para calcular su área es diferente.</p>
                    <article className="figuraImg">
                        <img src={require(`../../assets/images/${id}.png`)} alt=""/>
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