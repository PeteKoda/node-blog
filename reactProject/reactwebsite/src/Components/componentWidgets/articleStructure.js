import React, { Component } from 'react';
import uuid from 'uuid';
import {
  Link
} from 'react-router-dom';
import { Redirect } from 'react-router';


class ArticleStructure extends Component {
  constructor(props){
    super(props);
  
  }

    componentWillMount(props){
       
    }
  componentWillReceiveProps(){
      
  }

  render(props) {

    return (
      <div className="Articles" >
          <div className="titleDiv">
            <h1 className="artTitles">{this.props.articles.title}</h1>
          </div>
          <div className="row artBox">
              <div className="col-sm-3 col-md-6 col-lg-4">
                <img  className="artImages" src={this.props.articles.img} />
              </div>  
              <div className="col-sm-9 col-md-6 col-lg-8 text-content"> {this.props.articles.content}</div>
              <Link  to={`/article/${this.props.articles._id}`} key={this.props.articles._id} >
              <span className="read-more">READ MORE</span>
              </Link>
          </div>
      </div>
    );
  }
}

export default ArticleStructure;
