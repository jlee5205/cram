import { useEffect, useState } from "react";
import { getUsers, createUser } from "../api/usersApi";

import CreateUserForm from "../components/CreateUserForm";

function UsersPage(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
        .then(data => setUsers(data))
        .catch(err => console.error(err))
    }, []);

    const handleCreateUser = async (user) => {
        console.log("user handler being called");
        try {
            const newUser = await createUser(user);
            setUsers(prev => [...prev, newUser]);
        } catch(err){
            console.error("Create failed", err);
        }
    }
    return (
        <>
            <h1> "UsersPage"</h1>
            <CreateUserForm onCreate={handleCreateUser}/>
        </>
    )
}

export default UsersPage;