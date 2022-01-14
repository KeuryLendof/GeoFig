import "./Principal.css"


const Principal = () =>{

    //https://www.flaticon.es/packs/shapes-6?word=geometrica

    return(
        <div>
            <article class="hero-image">
                <div>
                    <h1>Calcular el area de las figuras geometricas</h1>
                </div>
            </article>
            <br></br>
            <br></br>
            <div className="contenedorPrincipal">
                <main>
                    <div className="card">
                        <img src={require('../../assets/images/cuadrado.png')}/>
                        <h4>Cuadrado</h4>
                        <a href="/cuadrado">Calcular Area</a>
                    </div>

                    <div className="card">
                        <img src={require('../../assets/images/triangulo.png')}/>
                        <h4>Triangulo</h4>
                        <a href="">Calcular Area</a>
                    </div>

                    <div className="card">
                        <img src={require('../../assets/images/circulo.png')}/>
                        <h4>Circulo</h4>
                        <a href="">Calcular Area</a>
                    </div>

                    <div className="card">
                        <img src={require('../../assets/images/rectangulo.png')}/>
                        <h4>Rectangulo</h4>
                        <a href="">Calcular Area</a>
                    </div>

                    <div className="card">
                        <img src={require('../../assets/images/rombo.png')}/>
                        <h4>Rombo</h4>
                        <a href="">Calcular Area</a>
                    </div>

                    <div className="card">
                        <img src={require('../../assets/images/trapecio.png')}/>
                        <h4>Trapecio</h4>
                        <a href="">Calcular Area</a>
                    </div>

                    <div className="card">
                        <img src={require('../../assets/images/elipse.png')}/>
                        <h4>Elipse</h4>
                        <a href="">Calcular Area</a>
                    </div>

                    <div className="card">
                        <img src={require('../../assets/images/pentagono.png')}/>
                        <h4>Pentagono</h4>
                        <a href="">Calcular Area</a>
                    </div>

                    <div className="card">
                        <img src={require('../../assets/images/hexagono.png')}/>
                        <h4>Hexagono</h4>
                        <a href="">Calcular Area</a>
                    </div>
                    
                </main>
            </div>
        </div>
    )
}


export default Principal;