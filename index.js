const express = require('express');

const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const chatServer = require('http').Server(app);
const chatSocket = require('./config/chat_sockets').chatSockets(chatServer);
chatServer.listen(9000, (err) => {
    console.log('chat server is listening on port 9000');
});



app.use(express.static('./assets'));
app.use(expressLayouts);
// extract styles and scripts from subpages to layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes/index'));
app.listen(port, function(err){
    if(err){
        console.error(`Error in running the server: ${err}`);
        return;
    }else{
        console.log(`Server is up & running on port: ${port}`);
    }
});