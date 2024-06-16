const express =  require('express');
const Workout = require('../models/workoutModel.js');
const router = express.Router();

// import controller module
const {createWorkout,getWorkout,getWorkouts} = require('../controllers/workoutController.js');

//GET all workouts
router.get('/',getWorkouts);

//GET a single  workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout)

//DELETE a  workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'DELETE a  Workout'})
})

//UPDATE a new workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'UPDATE a new Workout'})
})


module.exports = router