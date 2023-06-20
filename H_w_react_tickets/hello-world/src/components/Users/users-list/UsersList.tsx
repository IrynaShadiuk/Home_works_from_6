import { IUser } from "../../interfaced/users.dao";
import UsersListItem from "./users-list-item/UsersListItem";

interface IProps {
    users: IUser[];
}

const UsersList = (props: IProps) => {
    const users = props.users;

    return (
        <ul style={{ fontSize: 18, fontStyle: 'italic' }}>
          {!!users.length ? (
            users.map((user) => (
              <UsersListItem
                id={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                age={user.age}
                email={user.email}
                key={user.id}
              />
            ))
          ) : (
            <h1>No Users data</h1>
          )}
        </ul>
      );
    
}

export default UsersList;