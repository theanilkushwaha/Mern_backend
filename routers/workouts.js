const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const{
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}=require('../Controllers/workoutController');  //object de structuring


// getting all workouts

router.get('/', getWorkouts)

// getting single
router.get('/:id', getWorkout)


//posting the workouts

router.post('/', createWorkout);

// deleting the workout
router.delete('/:id', deleteWorkout);

//updating 
router.patch('/:id',updateWorkout)


module.exports = router;