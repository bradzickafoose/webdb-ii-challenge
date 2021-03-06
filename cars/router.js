const express = require("express");
const router = express.Router();
const knex = require("../data/dbConfig");

// CREATE Car
router.post("/", async (req, res) => {
  const car = req.body;

  await knex
    .insert(car)
    .into("cars")
    .then(() => res.status(200).json({
      message: `${car.make} ${car.model} added successfully.`, car
    }))
    .catch(error => res.status(400).json({
      message: "Error adding car to the car database.",
      reason: error.message
    }));
});

// READ Cars
router.get("/", async (req, res) => {
  await knex
    .select("*")
    .from("cars")
    .then(cars => res.status(200).json(cars))
    .catch(error => res.status(400).json({
      message: "Error retrieving cars from database.",
      reason: error.message
    }));
});

// UPDATE Car
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const car = req.body;

  await knex
    .select({ id })
    .from("cars")
    .update(car)
    .then(() => res.status(200).json({
      message: `The ${car.make} ${car.model} has been updated.`, id, car
    }))
    .catch(error => res.status(500).json({
      message: "Error updating car.",
      reason: error.message
    }));
});

// DELETE Car

module.exports = router;
