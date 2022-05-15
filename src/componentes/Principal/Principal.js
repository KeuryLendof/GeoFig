import "./Principal.css"


const Principal = ({figuras, buscar}) =>{

    const filtro = figuras.filter((dato)=>
        dato.nombre.toLowerCase().includes(buscar.toLowerCase())
    )

    const redireccionar = (id) => {
        window.location.href=`/figuras/${id}`;
    }

    return(
        <div className="contenedorPrincipal">

            <main>

                {filtro.map((f)=>{
                    return(
                        <section className="card" onClick={()=>redireccionar(f.nombre)}>
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