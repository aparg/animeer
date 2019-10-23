/**
 * @name OfficeController
 * 
 * Controller for Office Page
 */

const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('pages/office')
})

module.exports = router