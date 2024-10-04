import './Footer.css'
import callImg from '../../assets/images/call.png';
import mailImg from '../../assets/images/mail.png';




export function Footer() {

    return (
        <footer className="footer">


            <div className="footer-content">
                <div className="footer-title">
                    <h2>CosItems</h2>
                </div>

                <div className="sections">
                    <div className="footer-section about-us">
                        <h3>Sobre nós</h3>
                        <p>
                            Lorem ipsum dolor sit amet. Aut magnam nihil aut ipsum omnis aut porro maxime eos voluptas tempora.
                            Et dicta sapiente et quia iste et ipsam modi ex quaerat soluta.
                        </p>
                    </div>

                    <div className="footer-section categories">
                        <h3>Categorias</h3>
                        <ul>
                            <li>Blusas e Camisas</li>
                            <li>Calças</li>
                            <li>Vestidos</li>
                            <li>Saias</li>
                            <li>Casacos e Jaquetas</li>
                            <li>Shorts</li>
                            <li>Acessórios (Cintos, Lenços, etc.)</li>
                        </ul>
                    </div>

                    <div className="footer-section contact-us">
                        <h3>Contato</h3>
                        <p>
                            <img src={callImg} alt='imagem de um telefone' /> +55 (99) 99999-9999
                        </p>
                        <p>
                            <img src={mailImg} alt='imagem de uma carta de email' /> cositemsfakemail@gmail.com
                        </p>

                    </div>
                </div>
            </div>


            <div className="footer-bottom">
                <p>© 2024 All Rights Reserved. By CosItems</p>
            </div>
        </footer>
    )
}
