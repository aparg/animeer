/**
 * @name onepieceAnime
 * @author Apar Gautam<apargtm@gmail.com>
 */

const  express = require('express')
const router = express.Router()

const animes= require('../models/animes')


router.get('/',(req,res) =>{
    res.render('pages/onepiece',{
        title : 'One Piece',
        g1 : 'Adventure',
        g2 : 'Shounen',
        g3 : 'Superpower',
        writer : 'Eichiro Oda'
    })
}
)

module.exports = router;
