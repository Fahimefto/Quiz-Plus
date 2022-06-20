import Illustration1 from "../Illustration1";
import Form from "../Form";
import classes from "../../styles/Signup.module.css";
import TextInput from "../Textinput";
import Button from "../Button";

export default function Login() {
    return (
        <>
            <h1>Please Login Your account</h1>

            <div class="column">
                < Illustration1 />
                <Form className={`${classes.login} `} >
                    <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <Button>Login</Button>
                    <div className="info">
                        Dont have any account? <a href="signup.html">Register</a> an Account.
                    </div>
                </Form>
            </div>


        </>
    );
}