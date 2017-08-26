import React, {Component} from 'react';

import './header.css';
import MenuIcon from '../menu-icon/menu-icon.jsx';

class Header extends Component {
    render(props) {
        return (
            <div className="header row">
                <div className="col-6">{/*<MenuIcon /> */} dl-technology</div>
                <div className="col-6 text-right"><button className="btn btn-outline">Contact</button></div>
            </div>
        );
    }
}

export default Header;