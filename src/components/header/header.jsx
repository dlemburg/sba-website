import React, {Component} from 'react';

import './header.css';
import MenuIcon from '../menu-icon/menu-icon.jsx';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render(props) {
        return (
            <div className="header row">
                <div className="col-6">{/*<MenuIcon /> */} <a href={this.props.myWebsiteUrl}>dl-technology</a></div>
                <div className="col-6 text-right"><button onClick={() => this.props.openPopover()} className="btn btn-outline">Contact</button></div>
            </div>
        );
    }
}

export default Header;