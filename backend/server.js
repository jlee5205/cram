const express = require('express')
const cors = require('cors');
const app = express();
const PORT = 3000

app.use(cors({
    origin: "http://localhost:3001",
    credentials: true,
}));
app.use(express.json());
// app.use(express.urlencoded())
app.use('/api/users', require('./routes/users'));
app.use('/api/spots', require('./routes/spots'));
app.use('/api/reviews', require('./routes/reviews'));
app.use('/api/auth', require('./routes/auth'));
// app.use("/api/geocode", require('./routes/geocode'));

app.get('/', (req, res) => {
    res.json({info: 'Hello, World'})
});

app.get('/ping', (req, res) => {
    res.json({ ok: true });
});

app.listen(PORT, () => {
    console.log('Server running on port 3000')
});;