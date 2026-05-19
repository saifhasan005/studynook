'use client'
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { BsGoogle } from "react-icons/bs";

const RegisterPage = () => {
    return (
        <div className="space-y-5 mt-[35px]">
            <p className="text-center font-bold text-2xl">Please Register Your Account</p>
            <div className="flex flex-col items-center">
                <Form className="border p-5 shadow rounded-md flex w-96 flex-col gap-4" >
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter Your Name"></Input>
                    </TextField>
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
                    name="image"
                    type="text"
                    >
<Label>Image</Label>
<Input placeholder="https://images.unsplash.com/photo-1497366"></Input>
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
                        <Button variant="outline" className={`w-full rounded-md bg-purple-800 text-white rounded-md py-2.5 hover:bg-purple-700`} type="submit">

                            Register Now
                        </Button>

                    </div>
                    <div>
                        <p className="text-center text-gray-600 font-semibold dark:text-gray-400">OR</p>
                        <Button variant="outline" className="flex gap-2 rounded-none w-full items-center mt-[7px]"><BsGoogle /> Sign Up With Google</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default RegisterPage;