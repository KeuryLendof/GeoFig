import "./Principal.css"


const Principal = ({figuras}) =>{


    return(
        <div className="contenedorPrincipal">

            <main>

                {figuras.map((f)=>{
                    return(
                        <section className="card">
                            <img src={f.imagen}/>
                            <h3>{f.nombre}</h3>
                        </section>
                    )
                })}
                
            </main>

        </div>
    )
}


export default Principal;