import React, { Component } from 'react';
import '../styles/footer.css'
import {Link} from 'react-router-dom';

class Footer extends Component {
    
    constructor() {
        super();
        this.state = {
            footerContent:[
               {
                    title:"Company",
                    links:["Team", "History", "Contact Us", "Locations"]
                },
               {
                    title:"Fetures",
                    links:["Cool stuff", "Random feature", "Team feature", "Developer stuff", "Another one"]
                },
                {
                    title:"Resources",
                    links:["Resorce", "Resorce name", "Another resorce", "Final resorce"]
                },
               {
                    title:"Legal",
                    links:["Privacy policy", "Terms of use"]
                }
            ]
        }
    }
    render() {
        return (
            <footer>
                <div>{this.state.footerContent.map(content=>{
                    return (
                        <div>
                            <h2>{content.title}</h2>
                            {content.links.map(link=> <Link className="footer-link">{link}</Link>)}      
                        </div>
                    );
                })}
                </div>
                <p>Copyright &copy; Your Website {new Date().getFullYear()}</p>
            </footer>
        );
    }
}
export default Footer;