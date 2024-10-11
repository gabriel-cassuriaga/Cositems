import './RegisterForm.css'

import eyeIconImg from '../../assets/icons/login/visibility.png'
//import eyeIconOffImg from '../../assets/icons/login/visibility_off.png'

import lockIconImg from '../../assets/icons/login/lock.png';
import userIconImg from '../../assets/icons/login/user.png'
import mailIconImg from '../../assets/icons/login/mail.png'

import { UserData } from '../../interfaces/UserData';

import React, { useState } from 'react';
import { useUserDataMutate } from '../../hooks/users/useUserDataMutate';
import { Link } from 'react-router-dom';

export function RegisterForm() {
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { mutate, isSuccess } = useUserDataMutate();


    const submit = () => {
        const userData: UserData = {
            username,
            email,
            password
        };
        mutate(userData);
    };

    return (
        <form className="form">
            <h2 className="title-login">CosItems</h2>
            <div className="field">
                <img src={userIconImg} />
                <input type="text" className="input-field" placeholder="Usuário" autoComplete="off" required value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="field">
                <img src={mailIconImg} className="icon-mail" />
                <input type="email" className="input-field" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="field">
                <img src={lockIconImg} className="icon-lock" />
                <input type="password" className="input-field" placeholder="Senha" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <img src={eyeIconImg} className="icon-eye" />
            </div>
            <div className="box-btn">
                <Link to={"/"}>
                    <button className="btn-login" onClick={submit}>Registrar</button>
                </Link>
            </div>
        </form>

    );
}


