import { useState } from "react";
import AuthForm from "./AuthForm";
import { signupUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

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
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md">
                <AuthForm
                 title='Signup Page'
                 buttonText='Create user'
                 onSubmit={handleSubmit}
                >
                    {success && <p className="text-green-600 text-sm text-center"> {success} </p>}
                    {error && <p className="text-red-600 text-sm text-center">{error}</p>}

                    {/* { <Label className="block text-sm font-medium mb-1">Email</Label> } */}
                    <Input 
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder='Username'
                        className='space-y-1'
                        required
                    />
                    
                    <Input 
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder='Email'
                        className='space-y-1'
                        required
                    />
                
                    <Input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder='Password'
                        className='space-y-1 mt-2'
                        required
                    />
                    
                </AuthForm>
                <p className='mt-4 text-center text-sm text-gray-600'> Already have an account? {" "}
                    <a href="/login" className="text-red-500 hover:underline">
                        Login Here
                    </a>
                </p>

            </div>
        </div>

    ) 
};

export default SignupUserForm;