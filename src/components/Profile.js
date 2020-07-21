import React, { Component } from 'react';

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
        return (
            <div></div>
        );
    }

}

export default Profile;