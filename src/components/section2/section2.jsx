import React, {Component} from 'react';
import './section2.css';
import Card from '../card/card.jsx';
import MdCheck from 'react-icons/lib/md/check';
import LineSpacer from '../line-spacer/line-spacer.jsx';
import family from '../../img/family.png';


class Section2 extends Component {

    render(props) {
       
        return (
            <div className="section-2">
                <div className="width-80 align-center">
                    <Card title="The User Application">
                        <div className="col-6 col-sm-12"><img src={family} /></div>
                        <div className="col-6 col-sm-12">
                        { this.props.userAppArr.map((x, index) => {
                            return (
                                <div key={index} className="row">
                                    <div className="col-2"><MdCheck className="md-check"/></div>
                                    <div className="col-10"><span>{x}</span></div>
                                </div>
                            )
                            }) 
                        }
                        </div>
                    </Card>
                    <LineSpacer />
                    <Card title="The Admin Application">
                        <div className="col-6 col-sm-12"><img src={family} /></div>

                        <div className="col-6 col-sm-12">
                        { this.props.adminAppArr.map((x, index) => {
                            return (
                                <div key={index} className="row">
                                    <div className="col-2"><MdCheck className="md-check"/></div>
                                    <div className="col-10"><span>{x}</span></div>
                                </div>
                            )
                            }) 
                        }
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Section2;