const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller');
const app = express();
const port = 3001;

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', mc.getMessage)
app.put('/api/messages/:id', mc.editMessage)
app.post('/api/messages', mc.postMessage)
app.delete('/api/messages/:id', mc.deleteMessage)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})