const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an App.
const app = express();


// Update X-Powered-By headers in Express.
// Refer https://blog.praveen.science/getting-rid-of-the-x-powered-by-in-express-js-middle-ware-using-blood-sweat/.
app.use(function (req, res, next) {
  res.header("X-Powered-By", "Blood, sweat, and tears.");
  next();
});

// Serve the static files from public.
app.use( express.static( path.join(__dirname, 'public') ) );

// Include the body-parser middle ware.
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );

// Enable CORS.
app.use( cors() );


// Vote route.
const vote = require("./routes/vote")
// Handle vote routes.
app.use("/vote", vote);

// Set the port.
const port = 3001;
// Listen to incoming connections.
app.listen(port,'0.0.0.0', () => {
  console.log(`Server started on port ${port}.`);
});
