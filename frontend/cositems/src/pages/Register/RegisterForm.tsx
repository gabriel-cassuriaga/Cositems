import './RegisterForm.css'

import eyeIconImg from '../../assets/icons/login/visibility.png'
//import eyeIconOffImg from '../../assets/icons/login/visibility_off.png'

import lockIconImg from '../../assets/icons/login/lock.png';
import userIconImg from '../../assets/icons/login/user.png'
import mailIconImg from '../../assets/icons/login/mail.png'



export function RegisterForm() {
    return (
        <form className="form">
            <h2 className="title-login">CosItems</h2>
            <div className="field">
                <img src={userIconImg} />
                <input type="text" className="input-field" placeholder="Usuário" autoComplete="off" required />
            </div>
            <div className="field">
                <img src={mailIconImg} className="icon-mail" />
                <input type="email" className="input-field" placeholder="Email" required />
            </div>
            <div className="field">
                <img src={lockIconImg} className="icon-lock" />
                <input type="password" className="input-field" placeholder="Senha" required />
                <img src={eyeIconImg} className="icon-eye" />
            </div>
            <div className="box-btn">
                <button className="btn-login">Registrar</button>
            </div>
        </form>

    );
}


