import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from './Alert';
import Button from './button';
import TextInput from './textInput';
import { loginUser } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';

const SignIn = () => {
    const loginuser = useSelector((state) => state.isAuthenticated);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState();
    const [emailAlert, setEmailAlert] = useState('');
    const [passwordAlert, setPasswordAlert] = useState('');

    const onLogin = (e) => {
        e.preventDefault();

        if (password === '' || email === '') {
            setError('Please enter all required fields');
            setShowAlert(true);
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate('/home');
                dispatch(loginUser(email, password, true));
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                dispatch(loginUser(email, password, false));
                setShowAlert(true);
            });
    };

    const closeAlert = () => {
        setShowAlert(false);
    };

    const validateEmail = () => {
        let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        (!emailPattern.test(email)) ? setEmailAlert('** Enter a valid email id **') : setEmailAlert('');

    };

    const validatePassword = () => {
        const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+-=|\\]).{8,32}$/;

        (!passwordRegex.test(password)) ? setPasswordAlert('** Enter valid  Password ***') : setPasswordAlert('');
    };


    const textInputs = [
        {
            id: 1,
            type: "email",
            placeholder: "Email address",
            onChange: (e) => setEmail(e.target.value),
            value: email,
            onInput: validateEmail,
            className: "input",
            alert: emailAlert
        },
        {
            id: 2,
            type: "password",
            placeholder: "Enter Password",
            onChange: (e) => setPassword(e.target.value),
            value: password,
            onInput: validatePassword,
            className: "input",
            alert: passwordAlert
        }
    ]

    return (
        <div className="signin">
            {showAlert && (
                <Alert message={{ maincolor: 'red', title: 'Error', text: error }} onClose={closeAlert} />
            )}
            <div className="form1">
                <form>
                    <h2>Let's Get Started, Login here !</h2>
                    {textInputs.map((item) => (
                        <ul key={item.id}>
                            <label>{item.label}</label><br /><br />
                            <TextInput
                                type={item.type}
                                placeholder={item.placeholder}
                                onChange={item.onChange}
                                value={item.value}
                                onInput={item.onInput}
                                className={item.className}
                            />
                            <span className="error" style={{ color: item.alert ? 'red' : 'green' }}>
                                {item.alert}
                            </span>
                        </ul>

                    ))}


                    <Link to="/homepage">
                        <Button onClick={onLogin} value="Login" />
                    </Link>

                    <ul>
                        <p>
                            Not having an account yet? {' '}
                            <Link to="/signUp">
                                Sign up
                            </Link>
                        </p>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default SignIn;

