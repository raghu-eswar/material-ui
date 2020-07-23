import React, { Component } from 'react';
import Subscriptions from './Subscription.jsx'
import '../styles/content.css'

class Content extends Component {
    render() {
        return ( 
           <div id="content">
               {this.props.subscriptions.map(subscription =>
                <Subscriptions subscription={subscription}> </Subscriptions>)}
           </div>
            
        );
    }
}

export default Content;