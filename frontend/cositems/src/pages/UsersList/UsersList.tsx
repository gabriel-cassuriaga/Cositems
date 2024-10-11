import { useState } from 'react';
import { useUserData } from '../../hooks/users/useUserData'

import './UsersList.css';
import { UserData } from '../../interfaces/UserData';
import { CreateUserModal } from '../../components/CreateUserModal/CreateUserModal';
import { UpdateUserModal } from '../../components/UpdateUserModal/UpdateUserModal';
import { useUserDataDelete } from '../../hooks/users/useUserDataDelete';

export function UsersList() {
    const { data: users, isLoading, error } = useUserData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userToUpdate, setUserToUpdate] = useState<UserData | null>(null);

    const { mutate: deleteUser } = useUserDataDelete();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setUserToUpdate(null);
    };

    const openUpdateModal = (user: UserData) => {
        setUserToUpdate(user);
        setIsModalOpen(true);
    };

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro ao carregar produtos.</div>;
    }

    

    return (
        <div className="user-list-container">
            <h1>Lista de usuários</h1>
            <table className="user-list-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <div className="user-actions">
                                    <button className="edit" onClick={() => openUpdateModal(user)}>Editar</button>
                                    <button className="delete" onClick={() => user.id && deleteUser(user.id)}>Deletar</button>
                                    </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="floating-button" onClick={openModal}>+</button>
            {isModalOpen && !userToUpdate && <CreateUserModal closeModal={closeModal} />}
            {isModalOpen && userToUpdate && (
                <UpdateUserModal closeModal={closeModal} user={userToUpdate} />
            )}
        </div>
    );
}