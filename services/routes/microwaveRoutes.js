
var express = require("express");
var Microwave = require('../models/microwaveModel');

const microwaveRouter = express.Router();
microwaveRouter.route('/')
    .get((req, res) => {
        Microwave.find({}, (err, microwaves) => {
            res.json(microwaves)
        })  
    })
    microwaveRouter.route('/:microwaveId')
    .get((req, res) => {
        Microwave.findById(req.params.bookId, (err, microwave) => {
            res.json(microwave)
        })  
    })