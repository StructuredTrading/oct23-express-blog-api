# oct23-express-blog-api

## Models to make

### Blog

- Title
- Content
- User (posted by)
- Entry date
- Like
- Image upload
- Category
- Tags/keywords
- Audit history
  - user
  - timestap
  
### Users

- username
- blog post view history

### Comments
Join table in SQL, but subdocument in Mongoose that lives in Blog posts
- user id
- comment content
- like

### Action Log
- user id
- route visted
- timestamp
- result