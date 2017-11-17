import React, { Component } from 'react';
import Articles from './../componentWidgets/articles';
import Footer from './../footerComponent/footer';
import { Navbar, Jumbotron, Button , ButtonToolbar} from 'react-bootstrap';




class Homepage extends Component {
	
  render() {
    return (
      <div className="container-fluid main-content">
       
          <button  bsStyle="primary">Choose file</button>
         
        <div className="center-object">
        	<Articles  />
        </div>
        <Footer /> 
      </div>
      
    );
  }
}

export default Homepage;
