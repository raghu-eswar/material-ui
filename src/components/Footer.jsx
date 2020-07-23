import React from 'react';
import '../styles/footer.css'
import {Link} from 'react-router-dom';

function Footer(props) {
    return (
        <footer>
            <div>{props.footerContent.map(content=>{
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
export default Footer;