import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class Header extends Component {
  
  
  constructor(){
    super();
     this.state = {
      curUrl : ""
    }
   

  }

  componentWillMount(){
    if(window.location.href.search("article") < 0){
      this.state.curUrl = "logo" ;
    }else{
      this.state.curUrl = "back" ;
    }
  }

  componentWillReceiveProps(props){
    console.log(window.location.href);
    if(window.location.href.search("article") < 0){
      this.state.curUrl = "logo" ;
    }else{
      this.state.curUrl = "back" ;
    }
  }

  render() {


    return (

      <div id="sidebar">

      	<nav>
          <div className="brand">
          <img className="logo" src="../images/blogger-drew-logo.png" />
            <h2 className="brandName">Blog News</h2>
          </div>
      		<ul>
      			<li className="first">
      				<Link className="sidebar-list" to="/" >Home</Link>
      			</li>
            <li>
             <Link className="sidebar-list" to="/post" >Post</Link>
      			</li>
      		</ul>
      	</nav>


      </div>
    );
  }
}

export default Header;
