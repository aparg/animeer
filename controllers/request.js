/**
 * @name RequestController
 * 
 * Controller for Request Page
 */

const express = require('express')
const router = express.Router()

// Animes model
var animes = require('../models/animes')

router.get('/', (req, res) => {

    res.render('pages/request')
})

router.post('/', (req, res) => {

    console.log(req.body)
    res.send('Your anme is ' + req.body.fname)

})

module.exports = router