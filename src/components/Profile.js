import React, { Component } from 'react';
import '../styles/profile.css';

class Profile extends Component {

    constructor() {
        super();
        this.state = {user:null}    
    }

    UNSAFE_componentWillMount() {
        fetch(`https://reqres.in/api/users/${window.atob(this.props.match.params.id)-0}`)
        .then(res => res.json())
        .then(data => this.setState({user:data}));
    }

    render() {
        if (this.state.user == null){
            return <div className="loader"></div>
        }
        return (
            <div id="profile">
                {console.log(this.state.user)}
                <div id="profile-data">
                    <div><span>email</span><input value={this.state.user.data.email} className="blocked-input-field"></input></div>
                    <div><span>first name</span><input value={this.state.user.data.first_name} className="blocked-input-field"></input></div>
                    <div><span>last name</span><input value={this.state.user.data.last_name} className="blocked-input-field"></input></div>
                    <div><span>company</span><input value={this.state.user.ad.company} className="blocked-input-field"></input></div>
                    <div><span>about</span><textarea value={this.state.user.ad.text} className="blocked-input-field"></textarea></div>
                </div>
            </div>
        );
    }

}

export default Profile;