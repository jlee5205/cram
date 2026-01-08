import { useState } from "react";
import AuthForm from "./AuthForm";
import { signupUser } from "../api/authApi";

function SignupUserForm( {onCreate} ){
    const [form, setForm] = useState({
       username: '',
       email: '',
       password: '',
    });

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

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
            await signupUser(form);
            alert("User created!");
            setSuccess(true);
            setError(null);
        } catch(err){
            console.log("error", err);
            setError("Signup failed. Please try again.");
            setSuccess(false);
        }
    }

    return (
        <AuthForm title="Sign Up" buttonText="Create User" onSubmit={handleSubmit}>
            {success && <p className="success">Signup successful! 🎉</p>}
            {error && <p className="error">{error}</p>}
            <input name="username" value={form.username} onChange={handleChange} placeholder="username"/>
            <input name="email" value={form.email} onChange={handleChange} placeholder="email"/>
            <input name="password" value={form.password} onChange={handleChange} placeholder="password"/>
        </AuthForm>
        // <form onSubmit={handleSubmit}>

        // </form>
    )
};

export default SignupUserForm;