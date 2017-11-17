const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema

// create ninja Schema & model
const ArticleSchema = new Schema({
    title: {
        type: String,
       
    },
    content: {
        type: String
    },
    img: {
        type: String,
        default: "No image inserted"
    }
   
});

const Article = mongoose.model('article', ArticleSchema);

module.exports = Article;
