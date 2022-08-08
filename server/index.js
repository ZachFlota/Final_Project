// server/index.js

const express = require("express");

const PORT = process.env.PORT || 5001;

const app = express();


// endpoint for api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});

