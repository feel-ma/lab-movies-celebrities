// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const express = require("express");
const router = require("express").Router();
const db = require("../db/index.js");
const Movie = require('../models/movie.model');
const Celebrities = require('../models/celebrity.model');

// all your routes here

router.get("/newMovie", (req, res) => {
    Celebrities.find().then((celeb) =>{
        res.render("movies/new-movie.hbs", {celeb})

    })

    
});

router.post("/newMovie", (req,res) =>{
    const newMov = req.body
    Movie.create(newMov).then(res.render("complete"))
    .catch((err) =>res.render("celebrities/new-celebrity") )

})

router.get("/celebrities", (req,res) =>{
    Celeb.find().then((celebrities) =>{
        res.render("celebrities/celebrities", {celebrities})
    })
})


module.exports = router;