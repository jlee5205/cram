import { useState } from "react";
import AuthForm from "./AuthForm";
import { signupUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Card, CardContent, CardAction, CardFooter, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

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
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-sm" >Signup for an account</CardTitle>
                    <CardDescription className='text-neutral-500'>
                        Enter your information below to signup for an account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="w-full max-w-md">
                        <AuthForm
                        title='Signup Page'
                        buttonText='Create user'
                        onSubmit={handleSubmit}
                        >
                            {success && <p className="text-green-600 text-sm text-center"> {success} </p>}
                            {error && <p className="text-red-600 text-sm text-center">{error}</p>}

                            {/* { <Label className="block text-sm font-medium mb-1">Email</Label> } */}
                            <div className="flex flex-col gap-2">
                                <div className="grid gap-1">
                                    <Label htmlFor="username">Username</Label>
                                    <Input 
                                        name="username"
                                        value={form.username}
                                        onChange={handleChange}
                                        placeholder='Username'
                                        required
                                    />
                                </div>
                         
                                <div className="grid gap-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input 
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder='Email'
                                        required
                                    />
                                </div>
                            
                                <div className="grid gap-1">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        name="password"
                                        type="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder='Password'
                                        required
                                    />
                                </div>
                              
                            </div>
                            
                        </AuthForm>
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <p className='mt-4 text-center text-sm text-gray-600'> Already have an account? {" "}
                        <a href="/login" className="text-red-500 hover:underline">
                            Login Here
                        </a>
                    </p>
                </CardFooter>
            </Card>
        </div>

    ) 
};

export default SignupUserForm;