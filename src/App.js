import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx';
import Section1 from './components/section1/section1.jsx';
import Section2 from './components/section2/section2.jsx';
import Section3 from './components/section3/section3.jsx';
import Popover from './components/popover/popover.jsx';
import Toast from './components/toast/toast.jsx';
import ContactTemplate from './containers/contact/contact.jsx';
import TopImg from './img/slideshow/home-1.png';
import { myWebsiteUrl } from './utils/global';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popover: {
        isOpen: false,
        title: "",
        template: "",
        onDismiss: null
      },
      toast: {
        isOpen: false,
        message: ""
      },
      adminAppArr: [
        "Allows you to load customized content and images into the User Application.", 
        "Allows the owner to set up new and highly flexible reward offerings to thank your most loyal, valued customers.", 
        "The Order-Ahead Dashboard gives you the ability to process orders in advance, helping you stay relevant with new service-industry trends.", 
        "The Process-Order feature allows you to take an order directly from the application, using user-generated barcodes and mobile card ids to complete the transaction.",
        "The Simple Processing feature gives you a quick, efficient way to process an order.",
        "Live, up-to-date transaction information allows you to check business analytics from anywhere."
      ],
      userAppArr: [
        "Connects customers with an interactive application into your small or medium sized service-industry business", 
        "Allows customers to place orders quickly with ease and accurracy in today's fast-paced world.", 
        "Rewards loyal customers with a points system that is easy to track and exciting to earn.", 
        "Entices new customers to become a regular face with the ease of Order-Ahead and attractive reward offerings.",
        "Enables customers to load money onto a mobile card to make paying fast and hassle free; money amounts are larger than average, saving you, the business-owner, in credit-card processing fees",
        "Social Media integration allows you to market your application and business on Twitter, Instagram, and Facebook."
      ],
      imgs: ["home-1.png", "home-2.png", "my-card.png", "barcode-pay.png", "order-ahead.png", "order-ahead-2.png", "order-ahead-3.png", "locations.png", "order-complete.png", "transactions-2.png", "products.png", "categories.png", "product-details.png",
             "order-ahead-dashboard-1.png", "order-ahead-dashboard-2.png", "process-order-2.png", "process-order-12.png", "owner-add-edit.png", "owner-settings.png"]
    }    
  }

    // data, api
  onPopoverDismiss(shouldShowToast, toastMessage, toastDuration = 6000) {
    const callback = () => setTimeout(() => this.closeToast(), 6000);

    // open toast, close popover
    this.setState({
        toast: {isOpen: shouldShowToast ? true : false, message: toastMessage},
        popover: {
          isOpen: false,
          title: "",
          template: "",
          onDismiss: null
      }}, callback);
  }

  openPopover(args) {
    this.setState({
      popover: {
          isOpen: true,
          title: args.title,
          template: args.template,
          onDismiss: args.onDismiss
      }
    })
  }

  closePopover() {
    this.setState({
      popover: {
        isOpen: false,
        title: "",
        template: "",
        onDismiss: null}
    });
  }

  openToast(message) {
    this.setState({toast: {isOpen: true, message}})
  }

  closeToast() {
    this.setState({toast: {isOpen: false, message: ""}})
  }



  render() {
    return (
      <div  className="app-container">
        {/* global */ }
        { this.state.popover.isOpen &&
          <Popover title={this.state.popover.title} onDismiss={this.state.popover.onDismiss}>
              <div>{this.state.popover.template}</div>
          </Popover> }
          { this.state.toast.isOpen &&
          <Toast message={this.state.toast.message}></Toast> }


        { /* main */}
        <main>

          {/* this has Header component, but i saved time */}
          <div className="header row">
              <div className="col-6">{/*<MenuIcon /> */} <a href={myWebsiteUrl}>dl-technology</a></div>
              <div className="col-6 text-right">
                <button 
                  onClick={() => this.openPopover({template: <ContactTemplate onDismiss={this.onPopoverDismiss.bind(this)} />, title: "Contact Me", onDismiss: this.closePopover.bind(this)})} className="btn btn-outline">
                  Contact
                </button>
              </div>
          </div>

          { /*<Header myWebsiteUrl={myWebsiteUrl} openPopover={this.openPopover.bind(this)}/> */ }
          <Section1 imgSrc={TopImg} title="Appetite" subtitle="the small-medium business app" />
          <Section2 userAppArr={this.state.userAppArr} adminAppArr={this.state.adminAppArr} />
          <Section3 imgs={this.state.imgs}/>
          <footer className="footer">
            <div>Property of <a href={myWebsiteUrl}>dl-technology</a></div>
            <div>All Rights Reserved.</div>
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
