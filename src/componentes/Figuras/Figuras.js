import React from 'react';
import { useParams } from 'react-router-dom';
import './Figuras.css';
import '../../App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Cuadrado, Triangulo } from '../Inputs/inputs';


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