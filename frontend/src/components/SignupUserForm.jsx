import { useState } from "react";
import AuthForm from "./AuthForm";
import { signupUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

function SignupUserForm( {setUser} ){
    const navigate = useNavigate();
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
            const user = await signupUser(form);
            setUser(user);
            setSuccess(true);
            setError(null);
            navigate('/spots');
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