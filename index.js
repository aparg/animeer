/**
 * @name Project_Animeer
 * @author Apar Gautam <opaai@email.com>
 */

const express = require('express')
const app = express()

// Templating Engine
app.set('view engine', 'pug')
app.set('views', './views')


// Process Static Files
app.use(express.static(require('path').join(__dirname, 'public')))

// Office Controller
app.use('/office', require('./controllers/office'))
// Home Controller
app.use('/', require('./controllers/home'))
//Animes controller
app.use('/anime/one-piece', require('./controllers/onepiece'))

 app.listen(8080, () => {
     console.log("Application started listening on port 8080.")
 })