import React from 'react';
import '../styles/article.css'

function Article(props) {
    let message = `Quickly build an effective pricing table for your potential
                    customer with this layout. it's built with default
                    Material-UI components with little customization.`;
    return ( 
        <article>
            <p id="heading">Pricing</p>
            <p>{message}</p>
        </article>
    );
}

export default Article;