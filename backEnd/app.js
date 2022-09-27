const express = require('express')
const app = express()
var cors = require('cors')
const port = 3001

const router  = require('./Routers/user_r');


app.use(cors());
app.use(express.json())

app.use('/persons',router);
app.use('/persons',router);
app.use('/persons',router);
app.use('/persons',router);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})