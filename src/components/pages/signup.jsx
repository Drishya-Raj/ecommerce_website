import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { setEmailId, setPassword, setUsername } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import TextInput from "../textInput";
import { loginUser } from "../../Redux/action";
import { Alert } from "../modal/Alert";
import Button from "../button";

const SignUp = () => {
    const loginuser = useSelector((state) => state.isAuthenticated);

    const [username, setUserNames] = useState('');
    const [password, setPasswords] = useState('');
    const [email, setEmails] = useState('');
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [emailAlert, setEmailAlert] = useState('');
    const [passwordAlert, setPasswordAlert] = useState('');
    const [usernameAlert, setUsernameAlert] = useState('');
    const [showPassword, setShowPassword] = useState();
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        dispatch(setEmailId(email));
        dispatch(setPassword(password));

    }, [dispatch]);

    const handleClick = async (e) => {
        e.preventDefault();

        if (username === '' || password === '' || email === '') {
            setError("Please enter all required fields");
            validateUsername();
            validateEmail();
            validatePassword();

            { showAlert ? (setShowAlert(false)) : setShowAlert(true) }
            return;
        }

        dispatch(setUsername(username));
        dispatch(setEmailId(email));
        dispatch(setPassword(password))
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User created successfully:", user);
            dispatch(loginUser(username, email, password, true));
            console.log("sigup authentication page =", loginUser)
            navigate("/signIn");

        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === "auth/email-already-in-use") {
                setError("Email is already in use. Please use a different email.");
                { showAlert ? (setShowAlert(false)) : setShowAlert(true) }
                dispatch(loginUser(email, password, false));

            }
            // else {
            //     console.error("Error creating user:", errorCode, errorMessage);
            //     dispatch(loginUser(email, password, false));
            // }
        }
    }
    const validateUsername = () => {
        const usernameRegex = /^[a-zA-Z]+$/;
        (!usernameRegex.test(username)) ? setUsernameAlert(' Enter a valid username ') : setUsernameAlert('');
    }
    const validateEmail = () => {
        let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        (!emailPattern.test(email)) ? setEmailAlert(' Enter a valid email id ') : setEmailAlert('');
    };

    const validatePassword = () => {
        if (password !== '') {
            const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+-=|\\]).{8,32}$/;

            (!passwordRegex.test(password)) ? setPasswordAlert('Enter valid  Password ') : setPasswordAlert('');
        }
        else {
            return false;
        }
    };
    const onVisibility = () => {
        setShowPassword(!showPassword);
    }

    const textinputs = [
        {
            id: 1,
            type: "text",
            placeholder: "Enter username",
            className: "input",
            value: username,
            onChange: (e) => setUserNames(e.target.value),
            alert: usernameAlert,
            onInput: validateUsername
        },

        {
            id: 2,
            type: "text",
            placeholder: "Enter email",
            value: email,
            onChange: (e) => setEmails(e.target.value),
            className: "input",
            alert: emailAlert,
            onInput: validateEmail
        },
        {
            id: 3,
            type: showPassword ? "text" : "password",
            placeholder: "Enter password",
            value: password,
            onChange: (e) => setPasswords(e.target.value),
            className: "inputpwd",
            onInput: validatePassword,
            alert: passwordAlert,

        },

    ]
    return (
        <div className="signup">
            {showAlert && <Alert message={{ maincolor: '#e91616;', title: 'Error', text: error }} />}
            <form>
                <h2>Register Now</h2>
                <br />
                {textinputs.map((item) => (
                    <ul key={item.id}>
                        <br />
                        <TextInput
                            type={item?.type}
                            placeholder={item?.placeholder}
                            value={item?.value}
                            onChange={item?.onChange}
                            className={item?.className}
                            onClick={item?.onClick}
                            onInput={item?.onInput}
                            checked={item?.checked}
                        />
                        <span className="material-symbols-outlined">{item.icon}</span>
                        {item?.value ? (<><span className="error" style={{ color: item.alert ? 'red' : 'green', position: 'absolute' }}>
                            {item?.alert}
                        </span>
                        </>) : null}
                        <br />
                    </ul>
                ))}
                <br />
                <span>
                    <input type="checkbox" value={showPassword} onChange={onVisibility} />
                    Show Password
                </span><br />
                <Button className="submit" value="Sign Up" onClick={handleClick} /><br />
                <h4>Already have an account ?</h4><br />
                <Link to='/signIn'>
                    <TextInput
                        type="submit"
                        value="Sign In"
                        className="submit"
                    />
                </Link>
            </form>
        </div>
    )
}
export default SignUp;