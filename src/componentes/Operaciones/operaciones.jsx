import React from 'react';
import './operaciones.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import { Cuadrado, Triangulo, Circulo, Rectangulo, Rombo, Trapecio, Elipse, Pentagono, Hexagono, Cilindro, Cono, Cuadra, Esfera, Heptagono, Octagono } from '../Inputs/inputs';


function Operaciones() {

    const {id} = useParams();

    return (
        <div className='top-container-operaciones'>
            <div className="circle"></div>
            <Header/>
            <main className='main-operaciones'>

                <section className="operaciones">

                    <h2>Área de <br />un <span>{id}</span></h2>
                    <p>El área de una figura geométrica se refiere a la cantidad de superficie encerrada por su perímetro. Dependiendo de la figura, la fórmula para calcular su área es diferente.</p>
                    
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

                <section className="imagen-operacion">

                    <img src={require(`../../assets/images/${id}.png`)} alt="" className='figura'/>

                </section>
                
            </main>
            {/* <Footer/> */}
        </div>
    )
}

export default Operaciones;
