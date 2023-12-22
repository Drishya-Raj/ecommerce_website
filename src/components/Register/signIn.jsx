import { useNavigate } from 'react-router-dom';
import RegisterForm from "./Registerform";
import { useState } from 'react';

const SignIn = () => {
    const navigate = useNavigate();
    return (
        <div className="signin">
            <RegisterForm
                type="signIn"
                onSuccess={() => {
                    navigate('/home');
                }}
            />
        </div>
    )
}
export default SignIn;