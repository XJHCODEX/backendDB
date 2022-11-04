const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, './public', 'index.html'))
// })

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/api/homies', (req, res) => {
    const homies = [
    'John', 
    'Jeremy', 
    'Carlos', 
    'Emmanuel', 
    'Francis', 
    'Marlon', 
    'Alex'
  ]
  res.json(homies)
})

//app.post('/comment', (req, res) => {
//    res.send('received a post request welcome')
//})

//app.post('/', (req, res) => {
    //let data = {userID: 123789456, userName: "Jhernandez"}
    // let getName = () => {
    // }
    // let name = getName
    // res.send(name)  
    // res.send('received a post request')
//})


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
