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

    // For Random Anime

    var array = Object.values(animes) // To get random element, first getting the array of values of animes i.e. converting to array
    var random_anime = array[Math.floor(Math.random()*array.length)] // then selecting an random index using random number gererated from Math.random()
    random_anime.index = Object.keys(animes)[array.indexOf(random_anime)] // additionally, adding the index of the random anime for url generation purpose,, both random anime values and key shall have have index

    res.render('pages/home', { anime: random_anime, title: "Home Page" })
})

module.exports = router