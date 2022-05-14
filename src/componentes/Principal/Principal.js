import "./Principal.css"


const Principal = () =>{

    //https://www.flaticon.es/packs/shapes-6?word=geometrica

    return(
        <div className="contenedorPrincipal">
            <main>
                <a href="" className="card">
                    <img src={require('../../assets/images/cuadrado.png')}/>
                    <h3>Cuadrado</h3>
                </a>

                <a href="" className="card">
                    <img src={require('../../assets/images/triangulo.png')}/>
                    <h3>Triangulo</h3>
                </a>

                <a href="" className="card">
                    <img src={require('../../assets/images/circulo.png')}/>
                    <h3>Circulo</h3>
                </a>

                <a href="" className="card">
                    <img src={require('../../assets/images/rectangulo.png')}/>
                    <h3>Rectangulo</h3>
                </a>

                <a href="" className="card">
                    <img src={require('../../assets/images/rombo.png')}/>
                    <h3>Rombo</h3>
                </a>

                <a href="" className="card">
                    <img src={require('../../assets/images/trapecio.png')}/>
                    <h3>Trapecio</h3>
                </a>

                <a href="" className="card">
                    <img src={require('../../assets/images/elipse.png')}/>
                    <h3>Elipse</h3>
                </a>

                <a href="" className="card">
                    <img src={require('../../assets/images/pentagono.png')}/>
                    <h3>Pentagono</h3>
                </a>

                <a href="" className="card">
                    <img src={require('../../assets/images/hexagono.png')}/>
                    <h3>Hexagono</h3>
                </a>
                
            </main>
        </div>
    )
}


export default Principal;