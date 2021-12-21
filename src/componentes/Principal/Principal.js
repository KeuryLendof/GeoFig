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
            <div className="contenedorPrincipal">
                <main>
                    <div className="card">
                        <img src={require('../../assets/images/cuadrado.png')}/>
                        <h4>Cuadrado</h4>
                        <a href="#">Calcular Area</a>
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
                        <img src={require('../../assets/images/triangulo.png')}/>
                        <h4>Login</h4>
                        <a href="">Calcular Area</a>
                    </div>

                    <div className="card">
                        <img src={require('../../assets/images/triangulo.png')}/>
                        <h4>Login</h4>
                        <a href="">Calcular Area</a>
                    </div>

                    <div className="card">
                        <img src={require('../../assets/images/triangulo.png')}/>
                        <h4>Login</h4>
                        <a href="">Calcular Area</a>
                    </div>
                    
                </main>
            </div>
        </div>
    )
}


export default Principal;