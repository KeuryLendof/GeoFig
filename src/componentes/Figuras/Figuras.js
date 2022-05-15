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
            <main className='productiveFiguras figurasContainer'>
                <section className="figuraInput">
                    <h1>{id}</h1>
                    {/* { 
                        id === 'Cuadrado' ? cuadrado :
                        id === 'Triangulo' ? triangulo :
                        null 
                    } */}
                    <div className="form__div">
                        <input type="text" className="form__input" placeholder=" "/>
                        <label for="" className="form__label">Email</label>
                    </div>
                    <br/>
                    <div className="form__div">
                        <input type="password" className="form__input" placeholder=" "/>
                        <label for="" className="form__label">Password</label>
                    </div>
                </section>

                <section className="figuraImg">
                    <img src={require('../../assets/images/cuadrado.png')}/>
                </section>
            </main>
            <Footer/>
        </div>
    )
}


export default Figuras;