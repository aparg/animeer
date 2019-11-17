/**
 * @name Project_Animeer
 * @author Apar Gautam <opaai@email.com>
 */

const express = require('express')
const app = express()

//Adding Body Parser
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// Templating Engine
app.set('view engine', 'pug')
app.set('views', './views')


// Process Static Files
app.use(express.static(require('path').join(__dirname, 'public')))

// Office Controller
app.use('/office', require('./controllers/office'))
//Animes controller
app.use('/anime', require('./controllers/anime'))
//Request controller
app.use('/request', require('./controllers/request'))
// Home Controller
app.use('/', require('./controllers/home'))

 app.listen(3000, () => {
     console.log("Application started listening on port 3000.")
 })