import React from 'react';
import './Figuras.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Cuadrado = () =>{


    var reactElementUl = React.createElement(
        'ul', {
            className: 'myList'
        },
            React.createElement('li', {className: 'li1'},'one'),
            React.createElement('li', {id: 'li2'},'two'),
            React.createElement('li', {id: 'li3'},'three')
    );

    return(
        <div>
            <Header/>
            <h1>Cuadrado</h1>
            <div>{reactElementUl}</div>
            <Footer/>
        </div>
    )
}


export default Cuadrado;