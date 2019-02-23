Hi, this is my perosnal portfolio. You can find the live version here: https://portfolioryan.herokuapp.com/

It's written in React.js.

I'm currently implementing a blog functionality into my portfolio using RESTful conventions. It's done!

I'm not using Redux-form so everything is in an uncontrolled state, in regards to form handling.

Known issues:
- Redux stores an empty object after pressing the back button.
- No notifications for email sent or error message.
- Date is not showing in the blog post.

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

Things I want to possibly add:
- Docker/Kurbernetes: Deploy it these way as oppose to using Heroku.
- JWT authentication