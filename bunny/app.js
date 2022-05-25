const express = require('express')
const app = express()

const ejs = require('ejs');

// Compile the source code
// const compiledFunction = pug.compileFile('start.pug');

app.get('/', function (req, res) {
    // console.log("req");
    var message = "You ROCK!<br>";
    message += (process.env.APP_SECRET ? "I have a secret: "+process.env.APP_SECRET : "I don't have any secrets") + "<br>"

    let variables={}
    Object.getOwnPropertyNames(process.env).forEach(
        function(val, idx, array){
            // message+=val + " = " + process.env[val] + "<br>"
            variables[val] = process.env[val]
            
        }
    )

    let options={}
    ejs.renderFile('templates/start.html', {variables:variables}, options, function(err, str){
        // str => Rendered HTML string
        console.log("compiled response ", err)
        res.send(str)
    });

    // res.send(compiledFunction({message:message}))
})

Object.getOwnPropertyNames(process.env).forEach(
    function(val, idx, array){
        console.log(val + " = " + process.env[val])
        
    }
)

    app.listen(3000, () => console.log('Server ready'))
