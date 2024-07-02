const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

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