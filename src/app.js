const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Wellcome to my API')
})

app.listen(3000)