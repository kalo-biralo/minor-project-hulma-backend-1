const Products = require('../models/productModel')
const mongoose = require('mongoose')

const getWorkouts = async (req, res) => {
    const workouts = await Products.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

const getWorkout = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Products.findById(id)
    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body
    try{
        const workout = await Products.create({title, load, reps})
        res.status(200).json(workout)
    }catch (error){
        res.status(400).json({error: error.message})
    }
}

const deleteWorkout = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Products.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

const updateWorkout = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
    }

    const workout = await Products.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}