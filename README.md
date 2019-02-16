Hi, this is my perosnal portfolio. You can find the live version here: https://portfolioryan.herokuapp.com/

It's written in React.js.

I'm currently implementing a blog functionality into my portfolio using RESTful conventions. It's almost done!

I'm not using Redux-form so everything is in an uncontrolled state, in regards to form handling.

Known issues:
- Blog article is in a single paragraph. 
- Localstorage stores an array of objects within the array.
- The backend isn't setup on production side, so you'll see nothing on the blog component.

The technologies being used:

- JSON server: Prototyping the API
- Redux/React-redux
- Lodash: Object handling
- Axios: HTTP request handling
- PHP: 
  - Login functionality: It's to prevent unauthorized access to create and/or editing my blog posts.
  - Handles the HTTP requests
  - Handles transactions between client and database
- MySQL: Stores RESTful API and my login info.
- Heroku: Deployment of React app.
- Semantic UI and Bootstrap: Styling the blog.

Things I want to possibly add:
- Docker/Kurbernetes: Deploy it these way as oppose to using Heroku.
- JWT authentication