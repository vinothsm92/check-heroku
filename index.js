const express = require('express');
//bring in mongoose dependency that we installed
const mongoose = require('mongoose');
//bring in mongo uri from mlab
const mongoURI =
'mongodb://vinothsm:vinoth1@ds151293.mlab.com:51293/sample';
//monnect mongodb
mongoose.connect(
mongoURI,
{
useMongoClient: true
}
);
const app = express();
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '\\public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/loggedin', function (req, res) {

    res.send(1);

});

const port = 5000;
app.listen(port, () => {
console.log(`app started on port ${port}`);
});
