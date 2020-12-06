const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const members = require("../../members");
const Person = require("../../models/people");

router.get("/", async (req, res) => {
  try {
    const persons = await Person.find();
    if (!persons) throw Error("No Persons");
    res.status(200).json(persons);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(
      members.filter((member) => {
        return member.id === parseInt(req.params.id);
      })
    );
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

router.post("/", async (req, res) => {
  const newMember = new Person({
    name: req.body.name,
    email: req.body.email,
    active: true,
  });

  try {
    const person = await newMember.save();
    if (!person) throw Error("Something went wrong saving the item");
    res.status(200).json(person);
  } catch (error) {
    res.status(400).json({ msg: error.messge });
  }
});

module.exports = router;
