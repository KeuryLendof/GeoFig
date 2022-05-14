import React from 'react';
import './Figuras.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Figuras = () =>{


    const id = 'cuadrado'

    let reactElementUl = React.createElement(
        'ul', {
            className: 'myList'
        },
            React.createElement('li', {className: 'li1'},'one'),
            React.createElement('li', {id: 'li2'},'two'),
            React.createElement('li', {id: 'li3'},'three')
    );

    let reactElementU2 = React.createElement(
        'ul', {
            className: 'myList'
        },
            React.createElement('li', {className: 'li1'},'one'),
            React.createElement('li', {className: 'li1'},'two'),
            React.createElement('li', {className: 'li1'},'three')
    );

    return(
        <div>
            <Header/>
            <h1>Cuadrado</h1>
            { 
                id === 'cuadrado' ? reactElementUl :
                 id === 'cuadradoo' ? reactElementU2 : null 
            }
            <Footer/>
        </div>
    )
}


export default Figuras;