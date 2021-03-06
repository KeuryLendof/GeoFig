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

    const [mayor, setMayor] = useState(0);
    const [menor, setMenor] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);


    const calculo =()=>{
        setTimeout(() => setResultado(((mayor+menor)/2)*altura),800)
    }

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Base mayor (B)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setMayor(parseFloat(e.target.value))} required/>
                <label>Base menor (b)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setMenor(parseFloat(e.target.value))} required/>
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

export function Elipse(){

    const [mayor, setMayor] = useState(0);
    const [menor, setMenor] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calculo =()=>{
        setTimeout(() => setResultado(3.14159265*mayor*menor),800)
    }

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Semieje mayor (a)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setMayor(e.target.value)} required/>
                <label>Semieje menor (b)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setMenor(e.target.value)} required/>
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

export function Pentagono(){

    const [longitud, setLongitud] = useState(0);
    const [apotema, setApotema] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calculo =()=>{
        setTimeout(() => setResultado((5*longitud*apotema)/2),800)
    }

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Longitud (l)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setLongitud(parseFloat(e.target.value))} required/>
                <label>Apotema (ap)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setApotema(parseFloat(e.target.value))} required/>
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

export function Hexagono(){

    const [longitud, setLongitud] = useState(0);
    const [apotema, setApotema] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calculo =()=>{
        setTimeout(() => setResultado((6*longitud*apotema)/2),800)
    }

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Longitud (l)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setLongitud(parseFloat(e.target.value))} required/>
                <label>Apotema (ap)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setApotema(parseFloat(e.target.value))} required/>
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

export function Cilindro(){

    const [radio, setRadio] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    //let problema = 2*3.14159265*radio;
    const calculo =()=>{
        setTimeout(() => setResultado(2*3.14159265*radio*(radio+altura)),800)
    }
    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Radio (r)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setRadio(parseFloat(e.target.value))} required/>
                <label>Altura (h)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setAltura(parseFloat(e.target.value))} required/>
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

export function Cono(){

    const [radio, setRadio] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calculo =()=>{
        setTimeout(() => setResultado(3.14159265*(radio * altura)),800)
    }

    return(
        <form onSubmit={redireccionar} className='formFigura'>
             <article className='gridForm'>
                <label>Radio (r)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setRadio(parseFloat(e.target.value))} required/>
                <label>Altura (h)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setAltura(parseFloat(e.target.value))} required/>
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

export function Cuadra(){

    const [lado, setLado] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calculo =()=>{
        setTimeout(() => setResultado(6*lado**2),800)
    }
    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Lado (a)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setLado(e.target.value)} required/>
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

export function Esfera(){

    const [radio, setRadio] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calculo =()=>{
        setTimeout(() => setResultado(4*3.14159265*radio**2),800)
    }
    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Radio (r)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setRadio(e.target.value)} required/>
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

export function Heptagono(){

    
    const [longitud, setLongitud] = useState(0);
    const [apotema, setApotema] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calculo =()=>{
        setTimeout(() => setResultado((7*longitud*apotema)/2),800)
    }

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Longitud (l)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setLongitud(parseFloat(e.target.value))} required/>
                <label>Apotema (ap)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setApotema(parseFloat(e.target.value))} required/>
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

export function Octagono(){
    
    const [longitud, setLongitud] = useState(0);
    const [apotema, setApotema] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calculo =()=>{
        setTimeout(() => setResultado((8*longitud*apotema)/2),800)
    }

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Longitud (l)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setLongitud(parseFloat(e.target.value))} required/>
                <label>Apotema (ap)</label>
                <input type="number" step="any" placeholder="0.0" className="inputFigura" onChange={e=> setApotema(parseFloat(e.target.value))} required/>
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