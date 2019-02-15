Hi, this is my perosnal portfolio. You can find the live version here: https://portfolioryan.herokuapp.com/

It's written in React.js.

I'm currently implementing a blog functionality into my portfolio using RESTful API. It's almost done!

I'm not using Redux-form so everything is in an uncontrolled state, in regards to my form handling.

Known issues:
- The look of the blog will be very ugly. The main focus of the blog is to demonstrate my React and Redux capabilities.
- Blog article is in a single paragraph. I'll have to create a listen handler for specific key strokes to fix this.
- Localstorage stores the entire state

The technologies being used:

- JSON server: Prototyping my API.
- Redux/React-redux: Storing user input into Redux store.
- Lodash: Object handling.
- Axios: HTTP request handling.
- PHP: 
  - Login functionality just for me. It's to prevent unauthorized access to create and/or editing my blog posts.
  - To handle the API requests
  - Connects to my MySQL database
- MySQL: Stores RESTful API and my login info.
- Heroku: To deploy my React app.

Things I want to possibly add:
- Docker/Kurbernetes: Deploy it these way as oppose to using Github pages.
- The look of the blog
- JWT authentication