import { useEffect, useState } from "react";
import { useUserDataUpdate } from "../../hooks/users/useUserDataUpdate";
import { UserData } from "../../interfaces/UserData";
import './UpdateUserModal.css'

interface InputProps {
    label: string;
    value: string | number;
    updateValue(value: any): void;
}

interface ModalProps {
    closeModal(): void;
    user: UserData;
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </div>
    );
};

export function UpdateUserModal({ closeModal, user }: ModalProps) {
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password || "");
    const { mutate, isSuccess } = useUserDataUpdate();

    const submit = () => {
        if (!user.id) {
            console.error("User ID is undefined");
            return;
        }

        const updatedUserData: UserData = {
            username,
            email,
            password
        };
        mutate({ id: user.id, data: updatedUserData });
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
                <h2>Atualizar Usuário</h2>
                <form className="input-container" onSubmit={e => { e.preventDefault(); submit(); }}>
                    <Input label="Nome de Usuário" value={username} updateValue={setUsername} />
                    <Input label="Email" value={email} updateValue={setEmail} />
                    <Input label="Senha" value={password} updateValue={setPassword} />
                    <button type="submit" className="btn-secondary">Atualizar</button>
                </form>
            </div>
        </div>
    );
}
