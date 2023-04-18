const express = require("express");
const router = require("express").Router();
const db = require("../db/index.js");
const Celeb = require('../models/celebrity.model');

// all your routes here

router.get("/celebrities/create", (req, res) => res.render("celebrities/new-celebrity"));
router.get("/celebrities", (req, res)=>{
    Celeb.find().then((celebrities) =>{
        res.render("celebrities/celebrities", {celebrities})
    })
})

router.post("/celebrities/create", (req,res) =>{
    const newCel = req.body
    Celeb.create(newCel).then(res.render("complete"))
    .catch((err) =>res.render("celebrities/new-celebrity") )

})

router.get("/celebrities", (req,res) =>{
    Celeb.find().then((celebrities) =>{
        res.render("celebrities/celebrities", {celebrities})
    })
})

module.exports = router;
