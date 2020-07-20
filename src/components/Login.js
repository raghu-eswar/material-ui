import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/login.css';

class Login extends Component {
    render() {
        return ( 
            <main id="login">
                <div id="login-form">
                    <h2>LOGIN</h2>
                    <div className="form-input">
                        <input type="email" placeholder="Email" className="form-input-field" required
                            pattern="^([a-zA-Z]+[a-zA-Z0-9\.-]+[a-zA-Z0-9]+)@([a-zA-Z]+).([a-z]){2,3}(.[a-z]{2,3})?$"
                            title="should be like --user name--@--domine name--"/>
                    </div>
                    <div className="form-input">
                        <input type="password" name="password" placeholder="Password" class="form-input-field" required
                            pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$"
                            title="must have at least 1 symbol and 1 number and 1 capital letter "/>
                    </div>
                    <div className="form-submit">
                        <Link to="/" className="form-submit-button">Log in</Link>
                    </div>
                </div>
            </main>
        );
    }
}

export default Login;