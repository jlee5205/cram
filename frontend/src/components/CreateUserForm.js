import { useState, useSyncExternalStore } from "react";

function CreateUserForm( {onCreate} ){
    const [form, setForm] = useState({
       username: '',
       email: '',
       password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name] : value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await onCreate(form);
            alert("User created!");
        } catch(err){
            console.log("error", err);
        }
    }
    return (
        <form>
            <input name="username" onChange={handleChange}/>
            <input name="email" onChange={handleChange}/>
            <input name="password" onChange={handleChange}/>
            <button type="submit"> Create User </button>
        </form>
    )
};

export default CreateUserForm;