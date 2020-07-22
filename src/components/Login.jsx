import React, { Component } from 'react';
import '../styles/login.css';
import { Route } from 'react-router-dom';
import api from '../service/api.js';

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {error:""}
    }

    componentDidMount() {
        api.getAllUsers().then((result) => this.setState({userData: result.data}));        
    }

    validate(history) {
        let email = this.refs["email"].value;
        let password = this.refs["password"].value;
        let user = this.state.userData.filter(function(user) {
            return Boolean(user.email === email && user.first_name === password);
        })
        if(user[0]) 
            history.push(`/profile/${window.btoa(" "+user[0].id)+" "}`);
        else 
            this.setState({error:"invalid email or password"});
    }

    render() {
        return ( 
            <main id="login">
                <div id="login-form">
                    <h2>LOGIN</h2>
                    <div className="form-input">
                        <input ref="email" type="email" placeholder="Email" className="form-input-field" required/>
                    </div>
                    <div className="form-input">
                        <input ref="password" type="password" name="password" placeholder="Password" className="form-input-field" required/>
                    </div>
                    <div className="error-message">
                        <p>{this.state.error}</p>
                    </div>
                    <div className="form-submit">
                        <Route render={({ history}) => (<button onClick={this.validate.bind(this, history)}>Log in</button>)} />
                    </div>
                </div>
            </main>
        );
    }

}

export default Login;