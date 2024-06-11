import {Form} from "react-router-dom";
import {Button} from "react-bootstrap";


// eslint-disable-next-line react/prop-types
export default function UserOption({userId, userName, updateUser}) {

    function handleSubmit() {
        console.log("setting context user to userId " + userId);
        updateUser(userId);
    }

    return (
        <>
            <li>
                <Form>
                    <span>UserId: {userId} - UserName: {userName}</span>

                    <span><Button variant="primary" onClick={handleSubmit}>ME!</Button></span>
                </Form>
            </li>
        </>
    );
}