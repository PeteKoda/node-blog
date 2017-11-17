import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
//components
import Header from './Components/headerComponent/header';
import Homepage from './Components/pages/homePage';
import SideBarRight from './Components/pages/sideBarRight';
import ShowArticle from './Components/pages/showArticle';
import PostArticle from './Components/pages/postArticle';

//includes
import './css/stylesheets/index.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }
  componentDidMount(){

  }
  render() {

    return (
      <Router>
      <div className="App">
          <Header />
          <button className="btn-default">sdasd</button>

        <Route exact path="/"  component={Homepage}/>
        <Route exact path="/"  component={SideBarRight}/>
        <Route path="/article/:id" component={ShowArticle}/>
        <Route path="/post" component={PostArticle}/>
                  
      </div>
      </Router>
    );
  }
}

export default App;
