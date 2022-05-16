import React from 'react';
import { useParams } from 'react-router-dom';
import './Figuras.css';
import '../../App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Figuras = () =>{


    const {id} = useParams();

    let cuadrado = React.createElement(
        'ul', {
            className: 'myList'
        },
            React.createElement('li', {className: 'li1'},'soy cuadrado'),
            React.createElement('li', {id: 'li2'},'soy cuadrado'),
            React.createElement('li', {id: 'li3'},'soy cuadrado')
    );

    let triangulo = React.createElement(
        'ul', {
            className: 'myList'
        },
            React.createElement('li', {className: 'li1'},'soy triangulo'),
            React.createElement('li', {className: 'li1'},'soy triangulo'),
            React.createElement('li', {className: 'li1'},'soy triangulo')
    );

    return(
        <div className='App'>
            <Header/>
            <main className='figurasContainer'>

                <section className="publicidad">
                    
                </section>

                <section className='subContenedorFiguras'>
                    <h1>Área de un {id}</h1>
                    <p>Ingresa el ancho y largo para calcular. Utiliza punto como separador decimal.</p>
                    <article className="figuraImg">
                        <img src={require('../../assets/images/cuadrado.png')}/>
                    </article>
                    <article className="figuraInput">
                        {/* { 
                            id === 'Cuadrado' ? cuadrado :
                            id === 'Triangulo' ? triangulo :
                            null 
                        } */}
                        <form className='formFigura'>
                            <article className='gridForm'>
                                <label>Lado (A)</label>
                                <input type="number" placeholder="0.0" className="inputFigura" required/>
                                <label>Lado (B)</label>
                                <input type="number" placeholder="0.0" className="inputFigura" required/>
                            </article>

                            <article className='botonCalcular'>
                                <button>
                                    Calcular
                                </button>
                            </article>
                        </form>
                    </article>
                </section>
            </main>
            <Footer/>
        </div>
    )
}


export default Figuras;