const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(cookieParser())
app.use(express.static('public'));

// cookie

app.get('/myName', function (req, res) {
    if (req.cookies.name) {
        res.send(`Hello ${req.cookies.name}`)
    } else {
        res.send(`
            <form action="/trackName" method="GET">
                <input type="text" name="name" placeholder="Please enter your name" required>
                <button type=""submit>送出</button>
            </form>
            `)
    }
})

app.get('/trackName', (req, res) => {
    const userName = req.query.name;
    res.cookie('name', userName, { httpOnly: true });
    res.redirect('/myName');
})


//num.html
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/getData', (req, res) => {
    const { number } = req.body;
    if (!number) {
        res.json({ error: 'Lack of Parameter' });
    } else if (isNaN(Number(number))) {
        res.json({ error: 'Wrong Parameter' })
    } else {
        const num = parseInt(number)
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
        }
        res.json({ result: sum })
    }
})

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})