import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bagels from './img/bagels.jpeg';
import computer from './img/computer.png';
import family from './img/family.png';
import Header from './components/header/header.jsx';
import Section1 from './components/section1/section1.jsx';
import Section2 from './components/section2/section2.jsx';
import Section3 from './components/section3/section3.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminAppArr: ["Lorem ipsum dolor sit amet, non augue proin a justo", "Lorem ipsum dolor sit amet, non augue proin a justo", "Lorem ipsum dolor sit amet, non augue proin a justo", "Lorem ipsum dolor sit amet, non augue proin a justo"],
      userAppArr: ["Lorem ipsum dolor sit amet, non augue proin a justo", "Lorem ipsum dolor sit amet, non augue proin a justo", "Lorem ipsum dolor sit amet, non augue proin a justo", "Lorem ipsum dolor sit amet, non augue proin a justo"],
      imgsArr: [computer, bagels, family, computer, bagels, computer, bagels, computer, family]
    }
      
  }

  render() {
    return (
      <main className="app-container">
        <Header />
        <Section1 imgSrc={bagels} title="Appetite" subtitle="the small-medium business app" />
        <Section2 userAppArr={this.state.userAppArr} adminAppArr={this.state.adminAppArr} />
        <Section3 imgs={this.state.imgsArr}/>
        <div className="footer">Footer/legal info</div>
      </main>
    );
  }
}

export default App;
