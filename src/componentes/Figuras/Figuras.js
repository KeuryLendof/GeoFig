import React from 'react';
import { useParams } from 'react-router-dom';
import './Figuras.css';
import '../../App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Figuras = () =>{


    const {id} = useParams();

    let reactElementUl = React.createElement(
        'ul', {
            className: 'myList'
        },
            React.createElement('li', {className: 'li1'},'soy cuadrado'),
            React.createElement('li', {id: 'li2'},'soy cuadrado'),
            React.createElement('li', {id: 'li3'},'soy cuadrado')
    );

    let reactElementU2 = React.createElement(
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
                    id === 'Cuadrado' ? reactElementUl :
                    id === 'Triangulo' ? reactElementU2 : null 
                }
            </main>
            <Footer/>
        </div>
    )
}


export default Figuras;