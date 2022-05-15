import "./Footer.css"


const Footer = ()=>{



    return(
        <footer className="footer">

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