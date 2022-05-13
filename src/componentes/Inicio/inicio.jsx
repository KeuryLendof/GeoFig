import react from "react";
import imagenP from '../../assets/images/abstracto.png'
import './inicio.css'


const inicio =()=>{



    return(
        <div className="productive contenedorInicio">


            <div className="productive_text">

                <h3 className="productive_title">Calcular el area de las figuras geometricas</h3>

                <p className="productive_paragraph">ApiCrypto provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, ApiCrypto tracks community growth, open-source code development, major events and on-chain metrics.</p>

                <a href="#" className="productive_cta">
                    Ir a calcular
                </a>
            </div>

            <section className="imagen">
                <img src={imagenP} alt="" />
            </section>

        </div>
    )
}

export default inicio;