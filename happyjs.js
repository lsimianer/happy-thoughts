var mysql = require("mysql");
var env = require(".env").config();

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  database: process.env.DB_PASSWORD,
  database: "happy db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // connection.end();
  connection.query("SELECT * FROM fav_songs",function(err,results){
    console.log(results);
    for (let i = 0; i < results.length; i++) {
      const element = results[i];
        console.log(element.title,"\n")
        console.log(element.id,"\n")
        console.log(element.artist,"\n")

    }

      connection.end();

  })
});


// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
// connection.end();