const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');
//get all workout

getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1}); // write thing jiske basis pe find krna hai ex. load=20
    res.status(200).json(workouts); // 201 for resource created successfully
} 

//get single workout
 
const getWorkout = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findById(id)
  
    if (!workout) {
      return res.status(404).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
  }
  
  


//post all workout

createWorkout = async (req, res) => {
  console.log(req.body)
    try {
        const { title, reps, load } = req.body;

        const workout = await Workout.create({ title, reps, load });
        return res.status(201).json(workout); // 201 for resource created successfully
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ error: error.message }); // 500 for internal server error
    }
}

//deleteing 

const deleteWorkout = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findOneAndDelete({_id: id})
  
    if(!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
  }
  
  // update a workout
  const updateWorkout = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    const workout = await Workout.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!workout) {
      return res.status(400).json({error: 'No such workout'})
    }
  
    res.status(200).json(workout)
  }

module.exports ={
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}