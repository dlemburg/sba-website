import React, {Component} from 'react';
import './section3.css';
import bagels from '../../img/bagels.jpeg';
import computer from '../../img/computer.png';
import family from '../../img/family.png';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';


class Section3 extends Component {

    render(props) {
        return (
            <div>
                <div className="slideshow-header">
                    <div className="slideshow-title">Slideshow</div>
                    <div className="slideshow-subtitle">Swipe right to view &nbsp; <MdArrowForward /></div>
                </div>
                <div className="section-3">
                    {this.props.imgs.map((img, index) => {
                        return (
                            <div key={index} className="img-container align-center">
                                <img key={index} alt="Woops, no img" className="img" src={require(`../../img/slideshow/${img}`)} /> 
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        );
    }
}

export default Section3;

// [computer, bagels, family, computer, bagels, computer, bagels, computer, family]