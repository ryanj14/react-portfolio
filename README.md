Hi, this is my personal portfolio. You can find the live version here: https://portfolioryan.herokuapp.com/

It's written in React.js.

I've created a blog that's in my portfolio. It uses RESTful conventions. You can find it here: https://portfolioryan.herokuapp.com/blog

I'm not using Redux-form so everything is in an uncontrolled state, in regards to form handling.

Known issues:
- Redux stores an empty object after pressing the back button.
- No notifications for email sent or error message.

The technologies being used:

- JSON server: Prototyping the API.
- Redux/React-redux
- Lodash: Object handling.
- Axios: HTTP request handling.
- PHP: 
  - Login functionality: It's to prevent unauthorized access to create and/or editing my blog posts.
  - Handles the HTTP requests
  - Handles transactions between client and database
- MySQL: Development database.
- PostgreSQL: Production database.
- Heroku: Deployment of React app.
- Semantic UI and Bootstrap: Styling the blog.
- PHPMailer
- NPM/Composer

Things I want to possibly add:
- Docker/Kurbernetes: Deploy it these way as oppose to using Heroku.
- JWT authentication