import { Link } from "react-router-dom";
import './loginForm.css'

import eyeIconImg from '../../assets/images/visibility.png'
import eyeIconOffImg from '../../assets/images/visibility_off.png'

import lockIconImg from '../../assets/images/lock.png';
import userIconimg from '../../assets/images/user.png'


export function LoginForm() {
    return (
            <form className="form">
                <h2 className="title-login">CosItems</h2>
                <div className="field">
                    <img src={userIconimg} />
                    <input type="text" className="input-field" placeholder="Usuário" autoComplete="off" required />
                </div>
                <div className="field">
                    <img src={lockIconImg} className="icon-lock" />
                    <input type="password" className="input-field" placeholder="Senha" required />
                    <img src={eyeIconImg} className="icon-eye" />
                </div>
                <div className="box-btn">
                    <Link className="btn-login" to={'/home'}>Login</Link>
                </div>
                <a href="../recover-password/recover-password.html" className="forgot-password-link">Esqueceu sua senha?</a>
            </form>

    );
}

