const router = require("express").Router();
const Workout = require("../models/workout");

// get for all workouts 
router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});
// Adding a new workout
router.put("/api/workouts/:id", (req,res) => {
    Workout.findByIdAndUpdate(
        req.params.id ,
        {$push: {
            exercises: req.body
        }}
        ).then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});
// adding the workout completed
router.post("/api/workouts", (req,res) => {
    Workout.create(req.body)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});
// range for 7 days limit workout track
router.get("/api/workouts/range", (req,res) => {
    Workout.find({}).limit(7)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});
module.exports = router;