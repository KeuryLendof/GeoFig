
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
                <label>Lado (B)</label>
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
                <label>Lado (A)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Lado (B)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Lado (C)</label>
                <input type="number" placeholder="0.0" className="inputFigura" required/>
                <label>Lado (D)</label>
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