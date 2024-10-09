import { Link } from "react-router-dom";
import './LoginForm.css'

import eyeIconImg from '../../assets/icons/login/visibility.png'
//import eyeIconOffImg from '../../assets/icons/login/visibility_off.png'

import lockIconImg from '../../assets/icons/login/lock.png';
import userIconImg from '../../assets/icons/login/user.png'


export function LoginForm() {
    return (
        <form className="form">
            <h2 className="title-login">CosItems</h2>
            <div className="field">
                <img src={userIconImg} />
                <input type="text" className="input-field" placeholder="Usuário" autoComplete="off" required />
            </div>
            <div className="field">
                <img src={lockIconImg} className="icon-lock" />
                <input type="password" className="input-field" placeholder="Senha" required />
                <img src={eyeIconImg} className="icon-eye" />
            </div>
            <div className="box-btn">
                <button className="btn-login">Login</button>
            </div>
            <Link className="register-link" to={"/"}>Não tem conta? Registre-se</Link>
            <Link className="forgot-password-link" to={"/"}>Esqueceu a senha?</Link>
        </form>

    );
}


