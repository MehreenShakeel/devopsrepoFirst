const express = require('express');
const mysql = require('mysql2');
const path = require("path");
const cors = require('cors');

const app = express();
app.use(cors());
const PORT =  3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "devopsrepoFirst")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"devopsrepoFirst","frontend.html"));
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
