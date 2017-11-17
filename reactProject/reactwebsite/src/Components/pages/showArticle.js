import React, { Component } from 'react';



class ShowArticle extends Component {
 constructor(props) {
    super(props);
    this.state = {
    	koda :{id: "",
	    	  title : "",
	    	img : "",
	    	content : ""}
    };
  }

componentWillMount(){
    console.log(this.props.match.params.id);
    fetch('http://localhost:4000/api/selectedArticle/'+this.props.match.params.id ).then(function(data){
            return data.json();
        }).then( json => {           
            this.setState({
            	koda : {
            		id: json._id,
				    title : json.title,
				    img : "http://localhost:4000/images/"+ json.img,
				    content : json.content
				    }
            })
    });

  }



  render() {
  	return (
        <div className="container-fluid main-content post-content">
      		<div className="titleDiv">
            <h1 className="artTitles">{this.state.koda.title}</h1>
          </div>
          <div className="row artBox artBoxS">
              <div >
                <img  className="prevImg" src={this.state.koda.img} />
              </div>  
              <div className=" text-content"> {this.state.koda.content}</div>
              
          </div>
        </div>
    );
  	
  }
}

export default ShowArticle;
