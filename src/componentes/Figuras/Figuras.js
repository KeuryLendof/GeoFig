import React from 'react';
import { useParams } from 'react-router-dom';
import './Figuras.css';
import '../../App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Figuras = () =>{


    const {id} = useParams();

    let cuadrado = React.createElement(
        'form',{
            onSubmit:redireccionar,
            className:'formFigura'
        },
        'article',{
            className: 'gridForm'
        },
            React.createElement('label', {className: 'formLabel'},'Lado (A)'),
            React.createElement('input', {className:"inputFigura", placeholder:"0.0", type:'number'}),
            React.createElement('label', {className: 'formLabel'},'Lado (B)'),
            React.createElement('input', {className:"inputFigura", placeholder:"0.0", type:'number'})
    );

    let triangulo = React.createElement(
        'ul', {
            className: 'myList'
        },
            React.createElement('li', {className: 'li1'},'soy triangulo'),
            React.createElement('li', {className: 'li1'},'soy triangulo'),
            React.createElement('li', {className: 'li1'},'soy triangulo')
    );

    const redireccionar =(e)=>{
       e.preventDefault();

       calculando();
    }

    const calculando=()=>{
        let boton = document.querySelector('button')

        boton.innerText = 'Calculando......'

        setTimeout(() => boton.innerText = 'Calcular',1000)
    }

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
                        <form onSubmit={redireccionar} className='formFigura'>
                            {/* <article className='gridForm'>
                                <label>Lado (A)</label>
                                <input type="number" placeholder="0.0" className="inputFigura" required/>
                                <label>Lado (B)</label>
                                <input type="number" placeholder="0.0" className="inputFigura" required/>
                            </article> */}
                        { 
                            id === 'Cuadrado' ? cuadrado :
                            id === 'Triangulo' ? triangulo :
                            null 
                        } 

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