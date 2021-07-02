import React from 'react'
import { BrowserRouter as Router,NavLink, Route } from "react-router-dom";
import Contact from './Contact';
import Details from './Details';
import Main from './Main';
import Photos from './Photos';
import logo from '../images/logo.png'
import '../styles/Navbar.css'

class Navbar extends React.Component {

    render() {
        return (
        <div className="Nav-container">
            <img className="logo" src={logo} alt="logo"></img>
             <Router>
                <ul>
                 <li>
                    <NavLink className="NavLink" activeClassName="selected" exact to="/" Component={Main}>Strona Główna</NavLink>
                 </li>
                 <li>
                    <NavLink className="NavLink" activeClassName="selected"  to="/galeria" Component={Photos}>Galeria</NavLink>
                 </li>
                 <li>
                    <NavLink className="NavLink" activeClassName="selected"  to="/szczegoly" Component={Details}>Szczegóły</NavLink>
                 </li>
                 <li>
                    <NavLink  className="NavLink" activeClassName="selected" to="/kontakt" Component={Contact}>Kontakt</NavLink>
                 </li>
                </ul> 
                 <Route exact path="/" component={Main} />
                 <Route path="/galeria" component={Photos} />
                 <Route path="/szczegoly" component={Details} />
                 <Route path="/kontakt" component={Contact} />
             </Router>
        </div>
        )

    }
}

export default Navbar