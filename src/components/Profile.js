import React, { Component } from 'react';
import '../styles/profile.css';

class Profile extends Component {

    constructor() {
        super();
        this.state = {user:null}    
    }

    componentDidMount() {
        fetch(`https://reqres.in/api/users/${window.atob(this.props.match.params.id)-0}`)
        .then(res => res.json())
        .then(data => this.setState({user:data}));
    }

    componentDidUpdate() {
        this.autoSize()
    }

    autoSize() {
        this.refs["about"].style.height = `${this.refs["about"].scrollHeight+5}px`
    }

    render() {
        if (this.state.user == null){
            return <div id="profile"><div className="loader"></div></div>
        }
        return (
            <div id="profile">
                <div id="profile-data">
                    <div id="profile-data-image"><img src={this.state.user.data.avatar} alt=""/></div>
                    <div id="profile-data-mail"><span>email</span><span>:</span><input defaultValue={this.state.user.data.email} className="blocked-input-field"></input></div>
                    <div id="profile-data-first-name"><span>first name</span><span>:</span><input defaultValue={this.state.user.data.first_name} className="blocked-input-field"></input></div>
                    <div id="profile-data-last-name"><span>last name</span><span>:</span><input defaultValue={this.state.user.data.last_name} className="blocked-input-field"></input></div>
                    <div id="profile-data-company-name"><span>company</span><span>:</span><input defaultValue={this.state.user.ad.company} className="blocked-input-field"></input></div>
                    <div id="profile-data-about"><span>about</span><span>:</span><textarea ref="about" defaultValue={this.state.user.ad.text} className="blocked-input-field"></textarea></div>
                </div>
            </div>
        );
    }

}

export default Profile;