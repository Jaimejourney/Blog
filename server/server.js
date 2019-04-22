const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.use(express.static('./public'));


app.get('/downloads',(req,res) =>{
    console.log("object");
    res.json("test");
})

app.get('/downloadFile', function (req, res) {
    var file = path.join(__dirname, 'resume(YiiaiZhu).pdf');
    res.download(file,'resume.pdf', function (err) {
        if (err) {
            console.log("Error");
            console.log(err);
        } else {
            console.log("Success");
        }
    });
 });

 

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));