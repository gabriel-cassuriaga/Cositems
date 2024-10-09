import { Link } from "react-router-dom";

import './RegisterForm.css'


import eyeIconImg from '../../assets/icons/registro/visibility.png'
import lockIconImg from '../../assets/icons/registro/lock.png'
import userIconImg from '../../assets/icons/registro/user.png'
import mailIconImg from '../../assests/icons/registro/mail.png'

export function RegisterForm() {
    return (
        <form className="formRegister">
            <h2 className="title-register">CosItems</h2>
            <div className="field">
                <img src={userIconImg}/>
                <input type="text" className="input-field" placeholder="Username" autoComplete="off" required/>
            </div>
            <div className="field">
                <img src={mailIconImg}/>
                <input type="text" className="input-field" placeholder="Email" autoComplete="off"  required/>
            </div>
            <div className="field">
            <img src={eyeIconImg} className="icon-eye"/>
                <input type="password" className="input-field" placeholder="Senha" required />
                <img src={lockIconImg} className="icon-lock"/>
            </div>
            <div className="box-btn">
                <button className="btn-register">Registre</button>
            </div>
            <Link className="login-link" to={"/LoginForm"}>Já Possuo Conta</Link>
        </form>
    )
}