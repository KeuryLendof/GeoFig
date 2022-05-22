import "./Footer.css"


const Footer = ()=>{



    return(
        <footer className="footer" id="contact">

            <h2>Contact Me</h2>

            <form className="formContacto"
                name="formulario-contacto"
                action="https://formsubmit.co/lendofkeury@gmail.com"
                method="post"
            >
                <input type="email" name="email" placeholder="Email" className="join_inputt" required/>

                <textarea id="texto" name="mensaje" placeholder="Mensaje" required></textarea>

                <button>
                    <img src={require('../../assets/images/gmail (2).png')} alt=''/>
                    Enviar
                </button>
            </form>

            <section>

                <div className="footer__social">
                    <a href="https://github.com/KeuryLendof" target='_blank' rel="noreferrer" className="footer__media"><img src={require('../../assets/images/github (3).png')} className="footer__img" alt=""/></a>
                    <a href="https://twitter.com/KeuryLendof1" target='_blank' rel="noreferrer" className="footer__media"><img src={require('../../assets/images/gorjeo (2).png')} className="footer__img" alt=""/></a>
                    <a href="https://www.linkedin.com/in/keury-lendof-599b82185/" target='_blank' rel="noreferrer" className="footer__media footer__media--last"><img src={require('../../assets/images/linkedin (1).png')} className="footer__img" alt=""/></a>
                </div>

            </section>

        </footer>
    )
}


export default Footer;