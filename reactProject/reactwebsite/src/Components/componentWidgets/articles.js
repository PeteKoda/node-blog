import React, { Component } from 'react';

import ArticleStructure from './../componentWidgets/articleStructure';


class Articles extends Component {

   constructor(props){
    super(props);
    this.state = {
      articles: [] ,
      koda: []
    }

  

  }


  componentWillMount(){

      fetch('http://localhost:4000/api/articles').then(function(data){
                    return data.json();
      }).then( json => {   
      var asd = json.map(data => {
        data.img = "http://localhost:4000/images/"+ data.img;
       if(data.content!= null){
        if(data.content.lenth > 460){
          data.content = data.content.substring(0, 460)+"...";
        }
       }
       
      })

      this.setState({
        koda : json
       })    
      console.log(this.state.koda);
      });

  }
  

  componentDidMount(){
   
	}

  render() {
   var koda;  
    

    koda = this.state.koda.map(data => {
      return (

         <ArticleStructure  key={data._id} articles={data} />

     
    );
    });

    return (
      <div>
          {koda}
      </div>
);
   
  }




}

export default Articles;
