import { useState } from 'react';
import AuthForm from './AuthForm';
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

function LoginUserForm( {setUser} ) {
    const navigate = useNavigate();

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
            const user  = await loginUser(form);
            setUser(user);
            setError(false);
            navigate("/spots");
            // setForm({email:'', password:''})
        } catch (err) {
            setError("Login failed. Please try again.");
            setSuccess(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md">
                <AuthForm
                 title='Login Page'
                 buttonText='login'
                 onSubmit={handleSubmit}
                >
                    {success && <p className="text-green-600 text-sm text-center"> {success} </p>}
                    {error && <p className="text-red-600 text-sm text-center">{error}</p>}

                        {/* <label className="block text-sm font-medium mb-1">Email</label> */}
                    <input 
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder='Email'
                        className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                        required
                    />
                
                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder='Password'
                        className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
                        required
                    />
                    
                </AuthForm>
                <p className='mt-4 text-center text-sm text-gray-600'> Don't have an account? {" "}
                    <a href="/signup" className="text-red-500 hover:underline">
                        Sign Up
                    </a>
                </p>

            </div>
        </div>

    )
};

export default LoginUserForm;