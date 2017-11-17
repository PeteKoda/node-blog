const express = require ('express');
const router = express.Router();
const Article = require('../models/article');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/')
  },
  filename: function (req, file, cb) {
    if(file.mimetype == "image/jpeg"){
        var fileType = ".jpg";
    }else if(file.mimetype == "image/png"){
         var fileType = ".png";
    }else if(file.mimetype == "image/gif"){
         var fileType = ".gif";
    }else{
        return 
    }
    cb(null, file.fieldname + '-' + Date.now() + fileType)

  }
})

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// get a list of article from the db
router.get('/articles', function(req, res, next){
    Article.find({}).then(function(articles){
        res.send(articles);
    });    
});

const upload = multer({storage : storage}).single('newImage')

router.post('/newArticle', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
        res.send(err);
      console.log ("An error occurred when uploading");
      return
    }
    req.body.img = req.file.filename;
    console.log(req.body);
    Article.create(req.body).then(function(article){
        console.log(article);
        res.send(article);
    })
  })
})

router.get('/selectedArticle/:id', function(req, res, next){
    Article.findById({_id : req.params.id}).then(function(article){
        res.send(article);
    });    
});


// add a new article to the db
router.post('/articles', function(req, res, next){
    Article.create(req.body).then(function(article){
        res.send(article);
    }).catch(next);
});

// update a article in the db
router.put('/article/:id', function(req, res, next){
    Article.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Article.findOne({_id: req.params.id}).then(function(article){
            res.send(article);
        });
    }).catch(next);
});

// delete a article from the db
router.delete('/article/:id', function(req, res, next){
    Article.findByIdAndRemove({_id: req.params.id}).then(function(article){
        res.send(article);
    }).catch(next);
});

module.exports = router;
