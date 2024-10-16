import './Footer.css'
import callImg from '../../assets/icons/footer/call.png';
import mailImg from '../../assets/icons/footer/mail.png';

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
                            Somos uma loja online especializada em Cosplays artesanais com amplo foco na experiência agradável e em oferecer uma solução na alta procura dos produtos do mundo geek!
                        </p>
                    </div>

                    <div className="footer-section categories">
                        <h3>Categorias</h3>
                        <ul>
                            <li>Cosplays completos</li>
                            <li>Calças</li>
                            <li>Camisas personalizadas</li>
                            <li>Saias</li>
                        </ul>
                    </div>

                    <div className="footer-section contact-us">
                        <h3>Contato</h3>
                        <p>
                            <img src={callImg} alt='imagem de um telefone' /> +55 (99) 99999-9999
                        </p>
                        <p>
                            <img src={mailImg} alt='imagem de uma carta de email' /> cositems@gmail.com
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
