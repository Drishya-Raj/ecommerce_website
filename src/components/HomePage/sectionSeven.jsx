import Button from "../button";
import TextInput from "../textInput";

const Seven = () => {

    return (
        <div className="seven">
            <h3>Subscribe on our newsletter</h3>
            <p>Get daily news on upcoming offers from many suppliers all over the world</p>
            <div  className="inputsection">
                <TextInput
                    type= "text"
                    placeholder= "Email"
                    className ="input"
                />    
                <Button className="subscribe" value="Subscribe"/>
            </div>
        </div>
    )
}
export default Seven;