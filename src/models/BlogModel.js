/**
- Title
- Content
- User (posted by)
- Created date
- Like 
- Image upload 
- Category/Tags/keywords 
- Audit history
	- user 
	- timestamp 
 */

const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        required: true
    },
    likes: {
        type: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        required: false
    },
    headerImage: {
        type: String, // URL to the file/imag storage provider
        required: false
    },
    tags: { // keywords defined by the blog post author
        type: [String], // ["life", "travel", "photography"]
        required: true
    },
    categories: { // post category defined by website admin/developer 
        type: [String], // ["life", "travel", "photography"]
        enum: ["life", "travel", "photography", "coding"],
        required: true
    },
    editHistory: {
        type: [{user: String, timestamp: Date}],
        required: false
    }
},
{
    timestamps: true,
});


const BlogModel = mongoose.Model("Blog", blogSchema);

module.export = {
    BlogModel
}