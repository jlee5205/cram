import { useState } from 'react';
import AuthForm from './AuthForm';
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardAction, CardFooter, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

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
        <div className="min-h-screen flex items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-sm" >Login to your account</CardTitle>
                    <CardDescription className='text-neutral-500'>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                    {/* <CardAction>
                        <Button variant="link">Sign Up</Button>
                    </CardAction> */}
                <CardContent>
                    <AuthForm
                        onSubmit={handleSubmit}
                    >
                        {success && <p className="text-green-600 text-sm text-center"> {success} </p>}
                        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
    {/* 
                        { <Label className="block text-sm font-medium mb-1">Email</Label> } */}
                        <div className="flex flex-col gap-2">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input 
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder='Email'
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                    name="password"
                                    type="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder='Password'
                                    required
                                />
                                <a
                                href="#"
                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                Forgot your password?
                                </a>
                            </div>
                        </div>
                        
                    </AuthForm>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <p className='mt-4 text-center text-sm text-gray-600'> Don't have an account? {" "}
                        <a href="/signup" className="text-red-500 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </CardFooter>
            </Card>
        </div>
        

    ) 
};

export default LoginUserForm;