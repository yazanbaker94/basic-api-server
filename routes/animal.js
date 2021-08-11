'use strict';

const express = require('express');

const router = express.Router();
const {Animal} = require('../models/index');
// add routes
router.get('/animal', getAnimal);
router.get('/animal/:id', getOneAnimal);

router.post('/animal', createAnimal);
router.put('/animal/:id', updateAnimal);
router.delete('/animal/:id', deleteAnimal);


async function getAnimal(req, res) {
    // get me all data from people
    let animal = await Animal.findAll();
    res.status(200).json(animal);
}

async function getOneAnimal(req, res) {
    const id = parseInt(req.params.id); // req.params is an object 
    let animal = await Animal.findOne({ where: {id: id} });
    res.status(200).json(animal);
}

async function createAnimal(req, res) {
    let newAnimal = req.body;
    let animal = await Animal.create(newAnimal);
    res.status(200).json(animal);
}

async function updateAnimal(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    // find the person
    let found = await Animal.findOne({ where: {id: id} });
    // update the person + save
    let updatedAnimal = await found.update(obj);
    res.status(200).json(updatedAnimal);
}

async function deleteAnimal(req,res) {
    let id = parseInt(req.params.id);
    let deletedAnimal = await Animal.destroy({where: {id: id}});
    res.status(204).json(deletedAnimal);
}



module.exports = router;