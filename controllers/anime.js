/**
 * @name AnimeController
 * @author Apar Gautam <apargtm@gmail.com>
 */

const  express = require('express')
const router = express.Router()

const animes = require('../models/animes')


router.get('/:slug', (req, res) => {

    // Check if slug parameter is in keys of animes (check if anime exists)
    if (Object.keys(animes).includes(req.params.slug)) {

        // Get slug anime
        var anime = animes[req.params.slug]

        res.render('pages/anime',{
            title : anime.name,
            hero: anime.hero,
            writer : anime.writer
        })

    }else {

        //Anime doesn't exist
        res.end('Error 404: Anime not found!')

    }


})

module.exports = router;
