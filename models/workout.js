const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: true,
                trim: true
            },
            name: {
                type: String,
                required: true,
                unique: true
            },
            distance: {
                type: Number
            },
            duration: {
                type: Number
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },

        }
    ]
})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;