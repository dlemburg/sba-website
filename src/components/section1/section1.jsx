import React, {Component} from 'react';
import './section1.css';

class Section1 extends Component {

    render(props) {
       
        return (
            <div className="section-1">
                <div className="title-container"><span className="title">{this.props.title}</span> <div><span className="subtitle">{this.props.subtitle}</span></div></div>
                <div className="section-1-container">
                    <div className="card width-80 align-center">
                        <img className="section-1-img" src={this.props.imgSrc} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Section1;