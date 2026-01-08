import { useState } from 'react';
import AuthForm from './AuthForm';
import { loginUser } from "../api/authApi";

function LoginUserForm() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

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
            await loginUser(form);
            alert("Login Successful!")
            setError(false);
            setForm({email:'', password:''})
        } catch (err) {
            setError("Login failed. Please try again.");
            setSuccess(false);
        }
    }

    return (
        <AuthForm title='Login' buttonText='login' onSubmit={handleSubmit}>
            {success && <p className="success">Signup successful! 🎉</p>}
            {error && <p className="error">{error}</p>}
            <input name="email" value={form.email} onChange={handleChange} placeholder='Email'/>
            <input name="password" type="password" value={form.password} onChange={handleChange} placeholder='Password'/>
        </AuthForm>
    )
};

export default LoginUserForm;