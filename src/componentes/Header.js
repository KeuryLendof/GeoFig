import "../App.css"


function Header(){

    return(
        <div className="contenedorHeader">
            <header>
                <div className="logo">
                    <div className="circulo">

                    </div>
                    <p>GeoFig</p>
                </div>
                <nav>
                    <ul>
                        <li><a>Inicio</a></li>
                        <li><a>Nose</a></li>
                        <li><a>Todavia nose</a></li>
                        <li><a>Contacto</a></li>
                    </ul>
                </nav>
                <button className="boton">
                    <div className="linea"></div>
                    <div className="linea"></div>
                    <div className="linea"></div>
                </button>
            </header>
        </div>
    )
}

export default Header;