import { useState } from "react";
import UsersList from "./users-list/UsersList";
import UsersForm from "./users-form/UsersForm";
import { IUser } from "../interfaced/users.dao"
import './users.scss'

const Users = () => {
    const storage = localStorage.getItem('users');
    const response = JSON.parse(storage ?? '{}');
    const data = !!Object.keys(response).length ? response : [];

    console.log(data); 

    // const [users, setUsers] = useState<IUser[]>([{ id: '214314213+Ivan@mail.com', firstName: 'Ivan', lastName: 'Ivaniv', age: 23, email: 'Ivan@mail.com' }]);
    const [users, setUsers] = useState<IUser[]>(data as IUser[]);
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    console.log(users);

    const updateUsersList = (newUser: IUser) => {
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        console.log('users', users);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    }

    return (
        <div className="users">
            <UsersList users={users} />
            <button onClick={() => setModalOpen(true)}>Add New User</button>
            {isModalOpen &&
                <UsersForm
                    updateUsersList={updateUsersList}
                    closeModalWindow={() => setModalOpen(false)}
                />
            }
        </div>
    );
}

export default Users;