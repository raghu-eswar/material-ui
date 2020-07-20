import React, { Component } from 'react';
import Subscriptions from '../components/Subscriptions.js'
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
                    title:"Free",
                    price:0,
                    usersIncluded:10,
                    storage:2,
                    support:"Priority email support",
                    isPopular:true,
                    button:<button>GET STARTED</button>
                },
                {   
                    title:"Free",
                    price:0,
                    usersIncluded:10,
                    storage:2,
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