const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors')
app.use(cors())
app.use(express.json());

const users = [
    { id: 1, name: 'Adnan', email: 'adnan@gmail.com' },
    { id: 2, name: 'Hossain', email: 'hossain@gmail.com' },
    { id: 3, name: 'Shojol', email: 'shojol021@gmail.com' }
]

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length + 1
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => console.log(`running on port ${port}`))