'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BsGoogle } from "react-icons/bs";
import { toast } from "react-toastify";

const LoginPage = () => {
     const onSubmit = async (e)=>{
     e.preventDefault();
     const formData = new FormData(e.currentTarget)
     const user = Object.fromEntries(formData.entries())
    const {data,error} = await authClient.signIn.email({
     email: user.email,
     password: user.password,
    })
    if(data){
     toast.success('Login Success')
     redirect('/')
    }
    if(error){
     toast.error('Invalid Email or Password')
    }
}
    return (
        <div className="space-y-5 mt-[35px]">
            <p className="text-center font-bold text-2xl">Login Your Account</p>
            <div className="flex flex-col items-center">
                <Form onSubmit={onSubmit} className="border p-5 shadow rounded-md flex w-96 flex-col gap-4" >
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button  variant="outline" className={`w-full rounded-md bg-purple-800 text-white rounded-md py-2.5 hover:bg-purple-700`} type="submit">

                            Login
                        </Button>

                    </div>
                    <div>
                        <p className="text-center text-gray-600 font-semibold dark:text-gray-400">OR</p>
                        <Button variant="primary" className="flex gap-2 rounded-none w-full items-center mt-[7px]"><BsGoogle /> Login With Google</Button>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <p className="text-gray-600 dark:text-white">Not Have
                            an Account?</p>
                        <Link href={'/register'}>
                            <p className="dark:text-purple-400 text-purple-600 
font-semibold">Please Register</p>
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;