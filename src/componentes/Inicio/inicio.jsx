import react from "react";
import imagenP from '../../assets/images/abstracto.png'
import './inicio.css'


const inicio =()=>{



    return(
        <div className="productive contenedorInicio">


            <div className="productive_text">

                <h3 className="productive_title">Calcular el area de las figuras geometricas</h3>

                <p className="productive_paragraph">ApiCrypto provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, ApiCrypto tracks community growth, open-source code development, major events and on-chain metrics.</p>

                <a href="#figuras" className="productive_cta">
                    Ir a calcular
                    <svg className="productive_arrow"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z"
                            fill="currentColor"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z"
                            fill="currentColor"
                        />
                    </svg>
                </a>
            </div>

            <section className="imagen">
                <img src={imagenP} alt="" />
            </section>

        </div>
    )
}

export default inicio;