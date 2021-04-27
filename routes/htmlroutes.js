const router = require("express").Router();
const path = require("path");

// homepage renderer
router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
// exercise form page renderer
router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
// stats/ graphics page renderer
router.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


module.exports = router;