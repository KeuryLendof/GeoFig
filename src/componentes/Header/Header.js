import { Component } from 'react'
import "./Header.css"


class Header extends Component{


    componentDidMount(){
        const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        })
    }

    render(){
        return(
            <div className="contenedorHeader">
                <header>
                    <a href='/' class="brand-title">
                        <img src={require('../../assets/images/forma-abstracta.png')} alt/>
                        GeoFig
                    </a>
                    <a href="#" class="toggle-button">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                    </a>
                    <div class="navbar-links">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </header>
            </div>
        )
    }

    
}

export default Header;