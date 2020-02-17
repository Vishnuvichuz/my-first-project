const express=require('express');
const app = express();
const port=3000;

app.get('/home',(req,res) => (res.send(`Welcome to Paravoor Mall`)));
app.listen(port, ()=> {console.log(`Server running on ${port}`)});
