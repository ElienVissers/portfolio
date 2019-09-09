const express = require('express');
const app = express();
const hb = require('express-handlebars');

app.engine('handlebars', hb());
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + "/public"));

app.use(function(req, res, next) {
  var domains = req.subdomains;

//   if (/* condition */) {
//     // your code
//     req.url = '/something' + req.url;
//   }
//   else {
//     // your code
//     return res.redirect(somewhere);
//   }
//
//   next();
// 
// });

app.get('/', (req, res) => {
    res.render('underconstructionTemplate', {
        layout: 'main'
    });
});

app.listen(process.env.PORT || 8080, () => console.log('Listening!'));
