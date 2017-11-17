import React, { Component } from 'react';
import $ from 'jquery';
import { Navbar, Jumbotron, Button , ButtonToolbar ,DropdownButton ,MenuItem} from 'react-bootstrap';

class PostArticle extends Component {
constructor(props){
    super(props);
    this.state = {
      newArticleContent : '',
      newTitle : '',
      newImage : '',
       file: '',
      imagePreviewUrl: '',
      actionTab:true
    };

  }

componentWillMount(){
  window.scrollTo(0, 0)
  }

addArticleContent(e){
  this.setState({
    newArticleContent : e.target.value,
  })
}
addTitle(e){
  this.setState({
    newTitle : e.target.value,
  })
}

sendArticleContent(e ){
  e.preventDefault(e);

}

_handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.newTitle);
    if(this.state.newTitle != "" && this.state.file!= "" && this.state.newArticleContent != ""){
    var formData = new FormData();
    formData.append("title", this.state.newTitle);
    formData.append("newImage", this.state.file);
    formData.append("content", this.state.newArticleContent);


    fetch('http://localhost:4000/api/newArticle',{
    method : "POST" ,
    body : formData ,

       }).then(function(data){
          /*return data.json();*/
      }).then( json => {
          /*console.log(json);*/
      });
    }else{
      alert("All fields required")
    }
}

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  changeView(e){
    console.log(this.state.actionTab)
   if(e.target.innerText == "Post"){
    this.setState({
      actionTab : true
      });
   }else{
    this.setState({
      actionTab : false
      });
   }
  }

  chooseImage(e){
    e.preventDefault();
    $('input[type=file]').trigger('click');
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }

    if(this.state.actionTab){
      var $postAction = (
       <div>
        <div className="post-dec">
         <h1 className="post-h">
          New Article
        </h1>
          <form onSubmit={this._handleSubmit.bind(this)}>
            <div className="form-group post-form">
              <input placeholder="Title" className='titleInput form-control' value={this.state.newTitle} onChange={this.addTitle.bind(this)} />
              <textarea className='form-control article-input' placeholder="Article Content" value={this.state.newArticleContent} onChange={this.addArticleContent.bind(this)} />

              <input className="hidden" type="file" onChange={this._handleImageChange.bind(this)} />
              <button className="btn btn-default select-image" bsStyle="" onClick={this.chooseImage.bind(this)}>Select Image</button>
            </div>
             <div className="form-group post-form">
                <button className="btn btn-success save-post" bsStyle="" type="submit" onClick={this._handleSubmit.bind(this)}>SAVE</button>
              </div>
          </form>


        </div>
        <div className="fake-border">
          <h1>Preview</h1>
          <div>
            <div className="titleDiv">
            <h1 className="artTitles">{this.state.newTitle}</h1>
            </div>
            <div className="row artBox">
                <div className="col-sm-3 col-md-6 col-lg-4">
                  {$imagePreview}
                </div>
                <div className="col-sm-9 col-md-6 col-lg-8 text-content"> {this.state.newArticleContent}</div>
            </div>
          </div>
        </div>
      </div>
      );
    }else{
       var $postAction = (
       <div>asdasd</div>
       )
    }

    return (
      <div className="container-fluid main-content post-content">
        <div className="post-tabs">
            <span onClick={this.changeView.bind(this)} className="post-tab">Post</span> <span onClick={this.changeView.bind(this)} className="post-tab delete-tab">Delete</span>
          </div>
          {$postAction}
      </div>
    );


  }
}

export default PostArticle;
