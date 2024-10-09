import { Link } from "react-router-dom";

import './RegisterForm.css'

export function RegisterForm() {
    return (
        <form className="formRegister">
            <h2 className="title-register">CosItems</h2>
            <div className="field-username">
                <input type="text" className="input-field" placeholder="Username" autoComplete="off" required/>
            </div>
            <div className="field-email">
                <input type="text" className="input-field" placeholder="Email" autoComplete="off"  required/>
            </div>
            <div className="field-password">
                <input type="password" className="input-field" placeholder="Senha" required />
            </div>
            <div className="box-btn">
                <button className="btn-register">Registre</button>
            </div>
            <Link className="login-link" to={"/LoginForm"}>Já Possuo Conta</Link>
        </form>
    )
}