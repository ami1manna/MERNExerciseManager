// file for making function to handle different types of database operations

// importing workout model for schema reference
const Workout = require('../models/workoutModel.js');
// for checking id 
const mongoose = require('mongoose');



// get all workout 
const getWorkouts = async (req,res)=>{
    const workouts = await Workout.find({}).sort({created:-1})

    res.status(200).json(workouts);
}
//get single workout 
const getWorkout = async (req,res)=>{
    const {id} = req.params

    //check wheather id is in specific format
    if(!mongoose.Types.ObjectId.isValid(id)){   
        return res.status(404).json({error:'No such workout'})
    }

    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({error: 'No such workout'});
    }
    res.status(200).json(workout);
}
//create new workout
const createWorkout = async (req,res)=>{
    const {title,load,reps} = req.body;

    let emptyFields =[]
    if(!title) emptyFields.push('title')
    if(!load) emptyFields.push('load')
    if(!reps) emptyFields.push('reps')
    
    if(emptyFields.length > 0 ){
        return res.status(400).json({error:'Please fill in all the fields ',emptyFields});
    }
    // add to doc to db
    try{
        const workout = await Workout.create({title,load,reps});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error:error.message});
    }
    
}
//delete single workout
const deleteWorkout = async(req,res)=>{
    const {id} = req.params
    //check whether id is in specific format
    if(!mongoose.Types.ObjectId.isValid(id)){   
        return res.status(404).json({error:'No such workout'})
    }

    const workout = await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(404).json({error: 'No such workout'});
    }
    res.status(200).json(workout);
    
}
// update a workout
const updateWorkout = async(req,res)=>{
    const {id} = req.params
    //check whether id is in specific format
    if(!mongoose.Types.ObjectId.isValid(id)){   
        return res.status(404).json({error:'No such workout'})
    }

    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })

    if(!workout){
        return res.status(404).json({error: 'No such workout'});
    }
    res.status(200).json(workout);
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}