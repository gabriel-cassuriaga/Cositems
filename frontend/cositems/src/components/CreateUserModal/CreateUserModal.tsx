import { useEffect, useState } from "react";
import { useUserDataMutate } from "../../hooks/users/useUserDataMutate";
import { UserData } from "../../interfaces/UserData";
import './CreateUserModal.css'

interface InputProps {
    label: string;
    value: string | number;
    updateValue(value: any): void;
}

interface ModalProps {
    closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </div>
    );
};

export function CreateUserModal({ closeModal }: ModalProps) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { mutate, isSuccess } = useUserDataMutate();

    const submit = () => {
        const userData: UserData = {
            username,
            email,
            password
        };
        mutate(userData);
    };

    useEffect(() => {
        if (isSuccess) {
            closeModal();
        }
    }, [isSuccess, closeModal]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <button className="close-button" onClick={closeModal}>x</button>
                <h2>Cadastro de Usuário</h2>
                <form className="input-container" onSubmit={e => { e.preventDefault(); submit(); }}>
                    <Input label="Nome de Usuário" value={username} updateValue={setUsername} />
                    <Input label="Email" value={email} updateValue={setEmail} />
                    <Input label="Senha" value={password} updateValue={setPassword} />
                    <button type="submit" className="btn-secondary">Criar</button>
                </form>
            </div>
        </div>
    );
}
