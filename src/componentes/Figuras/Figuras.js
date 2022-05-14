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
                <h1>{id}</h1>
                { 
                    id === 'Cuadrado' ? cuadrado :
                    id === 'Triangulo' ? triangulo :
                    null 
                }
            </main>
            <Footer/>
        </div>
    )
}


export default Figuras;