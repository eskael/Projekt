import {logger} from 'src/logger'
import {startServer} from 'src/server'
import config from 'src/config'

var express = require("express");
var app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

// logger.info('Hello info!')
//
// startServer({
//    port: config.options.port,
//    corsOptions: config.options.cors,
// })


app.get("/user/:id", (req: any, res: any) => {
    // db.run("CREATE TABLE lorem;");
    // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    // for (var i = 0; i < 10; i++) {
    //     stmt.run("Ipsum " + i);
    // }
    // stmt.finalize();
    // db.close();
    const users = [
        {
            "full_name": "Jan Kowalski",
            "age": 21
        },
        {
            "full_name": "Jan Nowak",
            "age": 25
        },
        {
            "full_name": "Jan Kowalski2",
            "age": 25
        },
        {
            "full_name": "Jan Kowalski3",
            "age": 25
        },
    ];
    res.send(users[req.params.id])
});

app.get("/offer/:id", (req: any, res: any) => {
    let offer_list = [
        {
            "id": 0,
           "title": "Test",
           "text": "Text"
        },
       {
          "id": 1,
          "title": "Test",
          "text": "Text"
       },
       {
          "id": 2,
          "title": "Test",
          "text": "Text"
       },
    ];
    if (req.params.id == "list") {
        res.send(offer_list);
    } else {
        res.send(offer_list[req.params.id]);
    }

});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});