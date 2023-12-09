import React,{ useEffect, useState } from "react";
import Button from "./button";
import user from '../assets/images/user.png';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername } from '../Redux/action';
import { useNavigate } from "react-router";
import { Alert } from "./Alert";

const LoginPage = () => {
    const username = useSelector((state) => state.username);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [alert, setAlert] = useState();
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        dispatch(setUsername(username));
    }, [dispatch])

    const logOut = () => {
        // console.log("Logging out");
        // setAlert("Do you want to log out? Click again to proceed");
        // { showAlert ? (setShowAlert(false)) : setShowAlert(true) }
        // if (showAlert) {
        //     navigate('/signUp');
        // }
        navigate('/signUp');
    }
   
    return (
        <div className="loginContainer">
            {showAlert && <Alert message={{ maincolor: 'green', text: alert }} />}
            <div className="flex-container">
                <div className="imgContainer">
                    <img src={user} alt="profile" />
                </div>
                <p>Hi <b>{username},</b> <br />Let's get started.</p>
            </div>
            <ul>
                <Button className="joinbutton" value="Join now" />
                <Button className="loginbutton" value="Log Out" onClick={logOut} />
            </ul>

        </div>
    )

}
export default LoginPage;