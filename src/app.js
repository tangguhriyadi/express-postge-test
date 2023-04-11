const express = require('express');
const setupDb = require('./db/db-setup')

setupDb()

const app = express()
app.use(express.json())

app.get('/', () => 'Wellcome !')


app.listen(3000, () => console.log('server running on port 3000'))