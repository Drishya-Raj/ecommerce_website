import { useNavigate } from 'react-router-dom';
import RegisterForm from "./Registerform";

const SignUp = () => {
    const navigate= useNavigate();
    return(
        <div className="signup">
            <RegisterForm
            type="signUp"
            onSuccess={()=>{
                navigate('/signIn');
            }}
            />
        </div>
    )
}
export default SignUp;