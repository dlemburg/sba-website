import React, {Component} from 'react';
import './card.css';

class Card extends Component {

    render(props) {
        return (
            <div className="card">
              {this.props.title &&  <div className="card-title">{this.props.title}</div>}
              <div className="card-body row">
                    {this.props.children}
              </div>
            </div>

        );
    }
}

export default Card;