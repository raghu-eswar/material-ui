import React from 'react';
import '../styles/subscription.css'

function Subscriptions (props) {
    let caption = (props.subscription.isPopular)? "most popular" : "";
    let discription = `${props.subscription.usersIncluded} users included
                        ${props.subscription.storage} GB of storage
                        Help center access
                        ${props.subscription.support}`;
    return (
        <div className="subscription-option">
            <div id="title">{props.subscription.title}
                <div>{caption}</div>
            </div>
            <div id="price">&#36;{props.subscription.price}<sub>/mo</sub></div>
            <div id="discription">
                <p>{discription}</p>
            </div>
            <div id="select-option">
                {props.subscription.button}
            </div>
        </div>
    );
}

export default Subscriptions;