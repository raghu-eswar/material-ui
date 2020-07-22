import React, { Component } from 'react';
import '../styles/profile.css';

class Profile extends Component {

    constructor() {
        super();
        this.state = {user:null,inputClass:"blocked-input-field"}  
        this.enableEdit = this.enableEdit.bind(this)
        this.saveProfile = this.saveProfile.bind(this)
    }

    componentDidMount() {
        console.log(this.props)
        fetch(`https://reqres.in/api/users/${window.atob(this.props.match.params.id)-0}`)
        .then(res => res.json())
        .then(data => this.setState({user:data}));
    }

    componentDidUpdate() {
        this.autoSize()
    }

    autoSize() {
        this.refs["about"].style.height = `${this.refs["about"].scrollHeight+5}px`
        this.refs["about"].parentElement.style.height = `${this.refs["about"].scrollHeight+5}px`
    }

    enableEdit() {
        this.setState({inputClass:null})
    }

    saveProfile() {
        this.setState(prevState => {
            let user = Object.assign({}, prevState.user);
            user.data.email = this.refs["email"].value;
            user.data.first_name = this.refs["first-name"].value;
            user.data.last_name = this.refs["last-name"].value;
            user.ad.company = this.refs["company"].value;
            user.ad.text = this.refs["about"].value;
            return { user, inputClass:"blocked-input-field"};
          })
    }

    render() {
        if (this.state.user == null){
            return <div id="profile"><div className="loader"></div></div>
        }
        return (
            <div id="profile">
                <div id="profile-data">
                    <div id="profile-data-image"><img src={this.state.user.data.avatar} alt=""/></div>
                    <div id="profile-data-mail"><span>email</span><span>:</span><input ref="email" defaultValue={this.state.user.data.email} className={this.state.inputClass}></input></div>
                    <div id="profile-data-first-name"><span>first name</span><span>:</span><input ref="first-name" defaultValue={this.state.user.data.first_name} className={this.state.inputClass}></input></div>
                    <div id="profile-data-last-name"><span>last name</span><span>:</span><input ref="last-name" defaultValue={this.state.user.data.last_name} className={this.state.inputClass}></input></div>
                    <div id="profile-data-company-name"><span>company</span><span>:</span><input ref="company" defaultValue={this.state.user.ad.company} className={this.state.inputClass}></input></div>
                    <div id="profile-data-about"><span>about</span><span>:</span><textarea ref="about" defaultValue={this.state.user.ad.text} className={this.state.inputClass}></textarea></div>
                    <div id="profile-options"><button id="profile-edit" onClick={this.enableEdit}>Edit</button>
                        <span></span>
                        <button id="profile-save" onClick={this.saveProfile}>Save</button></div>
                </div>
            </div>
        );
    }

}

export default Profile;