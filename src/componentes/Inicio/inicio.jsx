import react from "react";
import imagenP from '../../assets/images/abstracto.png'
import './inicio.css'


const inicio =()=>{



    return(
        <div className="productive contenedorInicio">

            <section className="texto">
                <h3>Calcular el area de las figuras geometricas</h3>
            </section>

            <section className="imagen">
                <img src={imagenP} alt="" />
            </section>

        </div>
    )
}

export default inicio;