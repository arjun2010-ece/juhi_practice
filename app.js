const nodeexpress = require("express");
// const morgan = require("morgan");

// this is how to use .env file
// require('dotenv').config();

// const postRoutes = require("./routes/post");


const app = nodeexpress();

// app.use(morgan("dev"));
// app.use(postRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})