import React, { Component } from 'react';
import Subscriptions from './Subscription.js'
import '../styles/content.css'

class Content extends Component {
    constructor() {
        super();
        this.state = {
            subscriptions: [
                {
                    title:"Free",
                    price:0,
                    usersIncluded:10,
                    storage:2,
                    support:"Email support",
                    isPopular:false,
                    button:<button>SIGN UP FOR FREE</button>
                },
                {   
                    title:"Pro",
                    price:15,
                    usersIncluded:20,
                    storage:10,
                    support:"Priority email support",
                    isPopular:true,
                    button:<button>GET STARTED</button>
                },
                {   
                    title:"Enterprise",
                    price:30,
                    usersIncluded:50,
                    storage:30,
                    support:"Phone & email support",
                    isPopular:false,
                    button:<button>CONTACT US</button>
                }
            ]
        }
    }
    render() {
        return ( 
           <div id="content">
               {this.state.subscriptions.map(subscription =>
                <Subscriptions subscription={subscription}> </Subscriptions>)}
           </div>
            
        );
    }
}

export default Content;