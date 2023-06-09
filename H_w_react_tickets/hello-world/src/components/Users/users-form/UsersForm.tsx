import React, { useState } from "react";
import { IUser } from "../../interfaced/users.dao"
import './userForm.scss'

interface IProps {
    updateUsersList: (user: IUser) => void;
    closeModalWindow: () => void;
}

const UsersListItem = (props: IProps) => {
    const { updateUsersList, closeModalWindow } = props;

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const handleFirstName = (event: React.FormEvent<HTMLInputElement>) => {
        setFirstName(event.currentTarget.value);
    }

    const handleLastName = (event: React.FormEvent<HTMLInputElement>) => {
        setLastName(event.currentTarget.value);
    }

    const handleEmail = (event: React.FormEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    }

    const generateId = (): string => {
        return `${Math.round(Math.random() * 10e9)}+${email || ''}`
    }

    const createUser = (event: React.SyntheticEvent) => {
        event.preventDefault();
        updateUsersList({
            id: generateId(),
            firstName: firstName,
            lastName: lastName,
            age: 30,
            email: email
        });
        closeModalWindow();
    }

    return (
        <form action="" className="user-form">
            <div className="user-form__header">
                <h1>Create New User</h1>
                <span onClick={closeModalWindow}>X</span>
            </div>
            <div className="user-form__content">
                <input type="text" placeholder="First Name" onChange={handleFirstName} />
                <input type="text" placeholder="Last Name" onChange={handleLastName} />
                <input type="text" placeholder="E-Mail" onChange={handleEmail} />
            </div>
            <div className="user-form__footer">
                <button onClick={createUser}>Create</button>
                <button onClick={closeModalWindow}>Cancel</button>
            </div>
        </form>
    );
}

export default UsersListItem;