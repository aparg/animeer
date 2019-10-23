/**
 * @name HomeController
 * 
 * Controller for Home Page
 */

const express = require('express')
const router = express.Router()

// Animes model
var animes = require('../models/animes')

router.get('/', (req, res) => {
    res.render('pages/home', { animes: animes, title: "Home Page" })
})

module.exports = router