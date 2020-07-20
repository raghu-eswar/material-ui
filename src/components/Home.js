import React, { Component } from 'react'
import '../styles/home.css'
import Article from '../components/Article.js'
import Content from '../components/Content.js'

class Home extends Component {

    render() {
        return ( 
            <main>
                <section>
                    <Article></Article>
                </section>
                <div id="home-content">
                    <Content></Content>
                </div>
           </main>
        );
    }
}

export default Home;