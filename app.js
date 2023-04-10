const express= require('express');
const app= express();
const path= require('path');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
 
app.set('view engine', 'ejs');
app.set('views',__dirname, '/View');

app.use(require('./Routes/menu.routes.js'))




app.get('/', (req, res) => {
    res.send('Hola mundo')
})



//Mostrar Puerto-----------------------------------
app.listen(port, () => {
    console.log(`Express listen on port ${port}!`);
});