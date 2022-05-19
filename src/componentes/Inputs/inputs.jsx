import { useState } from "react";

const redireccionar =(e)=>{
    e.preventDefault();

    calculando();
}

const calculando=()=>{
    let boton = document.querySelector('button')

    boton.innerText = 'Calculando......'

    setTimeout(() => boton.innerText = 'Calcular',1000)

    setTimeout(() => Resultado(),1000)
}

const Resultado=()=>{
    let result = document.querySelector('.resultado')

    result.style.display = 'block';
}

const cerrarResultado=()=>{
    let result = document.querySelector('.resultado')

    result.style.display = 'none';
}

export function Cuadrado(){

    const [lado, setLado] = useState(0);
    const [resultado, setResultado] = useState(0);


    const calculo =()=>{
        setTimeout(() => setResultado(lado*lado),800)
    }

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Lado (A)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e => setLado(e.target.value)} required/>
            </article>

            <article className='botonCalcular'>
                <button onClick={calculo}>
                    Calcular
                </button>
            </article>

            <article className="resultado">
                <span>
                    <img src={require('../../assets/images/check.png')} alt=""/>
                </span>
                <span className="msg">Área = {resultado}</span>
                <div className="close-btn" onClick={cerrarResultado}>
                    <span>
                        x
                    </span>
                </div>
            </article>
        </form>
    )
}

export function Triangulo(){

    const [base, setBase] = useState(0);
    const [altura, setAltura] = useState(0)
    const [resultado, setResultado] = useState(0);

    const calculo =()=>{
        setTimeout(() => setResultado((base*altura)/2),800)
    }

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Base (b)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e => setBase(e.target.value)} required/>
                <label>Altura (h)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setAltura(e.target.value)} required/>
            </article>

            <article className='botonCalcular'>
                <button onClick={calculo}>
                    Calcular
                </button>
            </article>

            <article className="resultado">
                <span>
                    <img src={require('../../assets/images/check.png')} alt=""/>
                </span>
                <span className="msg">Área = {resultado}</span>
                <div className="close-btn" onClick={cerrarResultado}>
                    <span>
                        x
                    </span>
                </div>
            </article>
        </form>
    )
}

export function Circulo(){

    const [radio, setRadio] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calculo =()=>{
        setTimeout(() => setResultado(3.14159265*radio**2),800)
    }

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Radio (r)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=>setRadio(e.target.value)} required/>
            </article>

            <article className='botonCalcular'>
                <button onClick={calculo}>
                    Calcular
                </button>
            </article>

            <article className="resultado">
                <span>
                    <img src={require('../../assets/images/check.png')} alt=""/>
                </span>
                <span className="msg">Área = {resultado.toFixed(2)}</span>
                <div className="close-btn" onClick={cerrarResultado}>
                    <span>
                        x
                    </span>
                </div>
            </article>
        </form>
    )
}

export function Rectangulo(){

    const [largo, setLargo] = useState(0);
    const [ancho, setAncho] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calculo =()=>{
        setTimeout(() => setResultado(ancho*largo),800)
    }
    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Largo (a)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setLargo(e.target.value)} required/>
                <label>Ancho (b)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setAncho(e.target.value)} required/>
            </article>

            <article className='botonCalcular'>
                <button onClick={calculo}>
                    Calcular
                </button>
            </article>

            <article className="resultado">
                <span>
                    <img src={require('../../assets/images/check.png')} alt=""/>
                </span>
                <span className="msg">Área = {resultado.toFixed(2)}</span>
                <div className="close-btn" onClick={cerrarResultado}>
                    <span>
                        x
                    </span>
                </div>
            </article>
        </form>
    )
}

export function Rombo(){

    const [menor, setMenor] = useState(0);
    const [mayor, setMayor] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calculo =()=>{
        setTimeout(() => setResultado((menor*mayor)/2),800)
    }
    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Diagonal Menor (d)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=>setMenor(e.target.value)} required/>
                <label>Diagonal Mayor (D)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=>setMayor(e.target.value)} required/>
            </article>

            <article className='botonCalcular'>
                <button onClick={calculo}>
                    Calcular
                </button>
            </article>

            <article className="resultado">
                <span>
                    <img src={require('../../assets/images/check.png')} alt=""/>
                </span>
                <span className="msg">Área = {resultado.toFixed(2)}</span>
                <div className="close-btn" onClick={cerrarResultado}>
                    <span>
                        x
                    </span>
                </div>
            </article>
        </form>
    )
}

export function Trapecio(){

    
    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Base mayor (B)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
                <label>Base menor (b)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
                <label>Altura (h)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}

export function Elipse(){

    
    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Semieje mayor (a)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
                <label>Semieje menor (b)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}

export function Pentagono(){

    
    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Longitud (l)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
                <label>Apotema (ap)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}

export function Hexagono(){

    
    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Longitud (l)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
                <label>Apotema (ap)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}

export function Cilindro(){

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Radio (r)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
                <label>Altura (h)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}

export function Cono(){

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Radio (r)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
                <label>Altura (h)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}

export function Cuadra(){

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Lado (a)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}

export function Esfera(){

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Radio (r)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}

export function Heptagono(){

    
    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Longitud (l)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
                <label>Apotema (ap)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}

export function Octagono(){

    
    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Longitud (l)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
                <label>Apotema (ap)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}