/* import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import firebase from '../../firebase';
import { AuthContext } from "../../Auth";

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async e => {
            e.preventDefault();
            const {email, password } = e.target.elements;
            try{
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                    history.push('/');

            } catch (error){
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <h1>Log in </h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                    <input name='email' type='email' placeholder="Email"/>
                </label>
                <label>
                    Password 
                    <input name="password" type="password" placeholder="Password" />

                </label>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default withRouter(Login); */