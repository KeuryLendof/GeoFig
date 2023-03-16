import imagenP from '../../assets/images/abstract-shape.png'
import './inicio.css'


const inicio =()=>{



    return(
        <main>
        <div className="productive contenedorInicio">


            <div className="productive_text">

                <h3 className="productive_title">Calcular el area de las figuras geometricas</h3>

                <p className="productive_paragraph">GeoFig es un sitio en el cual podras calcular el area de varias figuras geometricas. Ingresa los parámetros y calcula el área de formas geométricas en 2 y 3 dimensiones, de manera rápida y sencilla.</p>

                {/* <a href="#figuras" className="productive_cta">
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
                </a> */}
                <button class="cta">
                    <span class="span">Ir a calcular</span>
                    <span class="second">
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
                    </span> 
                </button>
            </div>

            <section className="imagen">
                <img src={imagenP} alt="" />
            </section>

        </div>
        <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2ABCC8" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,218.7C384,256,480,288,576,293.3C672,299,768,277,864,234.7C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </main>
    )
}

export default inicio;