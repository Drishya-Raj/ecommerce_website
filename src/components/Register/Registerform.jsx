import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { auth } from "../../firebase";
import { loginUser,setUsername, setEmailId, setPassword } from "../../Redux/action";
import TextInput from "../textInput";
import {  useNavigate } from "react-router-dom";
import Button from "../button";
import { Alert } from "../modal/Alert";
import { view, hide } from "../images";
import Loading from "../Loader";

const RegisterForm = ({ type, onSuccess }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsernames] = useState('');
    const [password, setPasswords] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showPassword, setShowPassword] = useState();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [visible, setVisible] = useState('');
    const [loading, setLoading] = useState(false);
    const isAuthenticated = useSelector((state) => state.isAuthenticated);

    useEffect(() => {
        dispatch(setEmailId(email));
        dispatch(setPassword(password));
        dispatch(setUsername(username));
    }, [dispatch, email, password, username]);

    const validateUsername = () => {
        const usernameRegex = /^[a-zA-Z]+$/;
        (!usernameRegex.test(username)) ? setUsernameError(' Enter a valid username ') : setUsernameError('');
    }
    const validateEmail = () => {
        let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        (!emailPattern.test(email)) ? setEmailError(' Enter a valid email id ') : setEmailError('');
    };

    const validatePassword = () => {
        if (password !== '') {
            if ((password).length < 8) {
                setPasswordError("Be at least 8 characters long");

            } else if (!(/[A-Z]/.test(password))) {
                setPasswordError("contain atleast one uppercase letter");

            } else if ((!(/[a-z]/.test(password)))) {
                setPasswordError("contain atleast one lowercase letter");

            } else if (!(/[0-9]/.test(password))) {
                setPasswordError("contain atleast one number");
            } else {
                setPasswordError('');
                return true;
            }
        }
        return false;
    };

    const toggleVisibility = () => {
        setVisible(!visible);
        setShowPassword(!showPassword);
    }
    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (username === '' || password === '' || email === '') {
            setError("Please enter all required fields");
            validateUsername();
            validateEmail();
            validatePassword();
            setLoading(false);
            { showAlert ? (setShowAlert(false)) : setShowAlert(true) }
            return;
        }
        try {
            let userCredential;
            if (type === 'signIn') {
                userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
            }
            else if (type === 'signUp') {
                userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                dispatch(loginUser({ isAuthenticated: true }));
                // localStorage.setItem(isAuthenticated, JSON.stringify(isAuthenticated));
            }
            dispatch(loginUser({ isAuthenticated: true }));
            // localStorage.setItem(isAuthenticated, JSON.stringify(isAuthenticated));
            setShowAlert(false);
            onSuccess && onSuccess();
        }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === "auth/email-already-in-use") {
                setError("Email is already in use. Please use a different email.");
                setShowAlert(!showAlert);
                dispatch(loginUser({ isAuthenticated: false }));
                localStorage.setItem(isAuthenticated, JSON.stringify(isAuthenticated));
            } else if (errorCode === "auth/network-request-failed") {
                setError("Network error. Please check your internet connection.");
                setShowAlert(!showAlert);
                dispatch(loginUser({ isAuthenticated: false }));
            } else {
                setError(errorMessage);
                setShowAlert(!showAlert);
                dispatch(loginUser({ isAuthenticated: false }));
            }
        }
        finally {
            setLoading(false);
        }
    }
    const textiInputs = [
        {
            id: 1,label: 'Username', type: "text",value: username,placeholder: "Enter Username", className: username ? "input1" : "input",
            onChange: (e) => setUsernames(e.target.value),
            onInput: validateUsername,
            errormsg: usernameError
        },
        {

            id: 2, label: 'Email id', text: "text",className: email ? "input1" : "input",placeholder: "Enter Email", value: email,
            onChange: (e) => setEmail(e.target.value),
            onInput: validateEmail,
            errormsg: emailError
        },
        {
            id: 3,label: 'Password',type: showPassword ? "text" : "password",  placeholder: "Enter Password",value: password,className: password ? "input1" : "input",errormsg: passwordError,
            visible: visible ? view : hide,
            onChange: (e) => setPasswords(e.target.value),
            onInput: validatePassword,
        }
    ]

    return (
        <div className={type === "signIn" ? 'signIn' : 'signup'}>
            {loading && <Loading />}
            {showAlert && <Alert message={{ maincolor: '#e91616;', title: 'Error', text: error }} />}
            <form>
                <h2>{type === 'signIn' ? "Let's Get Started, Login here !" : 'Register Now'}</h2>
                <br />
                {textiInputs.map((item) => (
                    <ul key={item.id}>
                        <div className="flex">
                            <label htmlFor={item.label}>{item.label}</label>
                            {item?.visible && <img src={item.visible} alt="image" width="20px" onClick={toggleVisibility} />}
                        </div>
                        <TextInput
                            type={item.type}
                            placeholder={item.placeholder}
                            className={item.className}
                            onChange={item.onChange}
                            onInput={item.onInput}
                            checked={item.checked}
                        />
                        {item?.value ? (<><span className="error" style={{ color: item.errormsg ? 'red' : 'green', position: 'absolute' }}>
                            {item?.errormsg}
                        </span>
                        </>) : null}
                        <br />
                    </ul>
                ))}
                {type == 'signUp' ?(<Button value="Sign Up" className="submit" onClick={handleClick} />) : (<Button value="Login" className="submit" onClick={handleClick} />)}
                {type === "signUp" ?
                    (<>
                        <h4>Already have an account ?</h4><br />
                        <Button value="Sign In" className="submit" onClick={() => navigate('/signIn')} />
                    </>
                    ) : (
                        <><p>Not having an account ?</p>
                            <Button value="Sign Up" className="submit" onClick={() => navigate('/signUp')} />
                        </>)}
            </form>
        </div>
    )

}
export default RegisterForm;