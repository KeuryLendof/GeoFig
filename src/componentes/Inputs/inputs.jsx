
const redireccionar =(e)=>{
    e.preventDefault();

    calculando();
}

const calculando=()=>{
    let boton = document.querySelector('button')

    boton.innerText = 'Calculando......'

    setTimeout(() => boton.innerText = 'Calcular',1000)
}

export function Cuadrado(){

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Lado (A)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}

export function Triangulo(){

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Base (b)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Altura (h)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}

export function Circulo(){

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Radio (r)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}

export function Rectangulo(){

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Largo (a)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Ancho (b)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}

export function Rombo(){

    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Diagonal Menol (d)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Diagonal Mayor (D)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}

export function Trapecio(){

    
    return(
        <form onSubmit={redireccionar} className='formFigura'>
            <article className='gridForm'>
                <label>Base mayor (B)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Base menor (b)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Altura (h)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
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
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Semieje menor (b)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
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
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Apotema (ap)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
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
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Apotema (ap)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
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
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Altura (h)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
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
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Altura (h)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
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
                <input type="number" placeholder="0.0" className="inputFigura" required/>
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
                <input type="number" placeholder="0.0" className="inputFigura" required/>
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
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Apotema (ap)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
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
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Apotema (ap)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
            </article>

            <article className='botonCalcular'>
                <button>
                    Calcular
                </button>
            </article>
        </form>
    )
}