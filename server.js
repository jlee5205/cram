const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())
// app.use(express.urlencoded())
app.use('/api/users', require('./routes/users'));

app.get('/', (req, res) => {
    res.json({info: 'Hello, World'})
})

app.listen(PORT, () => {
    console.log('Server running on port 3000')
});