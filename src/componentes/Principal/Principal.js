import "./Principal.css"


const Principal = ({figuras, buscar}) =>{

    const filtro = figuras.filter((dato)=>
        dato.nombre.toLowerCase().includes(buscar.toLowerCase())
    )

    const redireccionar = (id) => {
        // window.location.href=`/figuras/${id}`;
        window.location.href=`/operaciones/${id}`;
    }

    return(
        <div className="contenedorPrincipal">

            <main className="mainPrincipal">

                {filtro.map((f)=>{
                    return(
                        <section className="card" id="figuras" onClick={()=>redireccionar(f.id)}>
                            <div class="ag-courses-item_bg"></div>
                            <img src={f.imagen} alt=""/>
                            <h3>{f.nombre}</h3>
                        </section>
                    )
                })}
                
            </main>

        </div>
    )
}


export default Principal;