import React, {Component} from 'react';
import './section3.css';
import bagels from '../../img/bagels.jpeg';
import computer from '../../img/computer.png';
import family from '../../img/family.png';


class Section3 extends Component {

    render(props) {
        debugger;
        return (
            <div className="section-3">
                {this.props.imgs.map((x, index) => {
                    return (
                        <img key={index} alt="Woops, no img" className="initial-img" src={x} /> 
                    )
                })
                }
            </div>
        );
    }
}

export default Section3;

// [computer, bagels, family, computer, bagels, computer, bagels, computer, family]