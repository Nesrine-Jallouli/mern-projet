const express = require("express");
const router = express.Router();
const Offre = require("../models/Offre");

//@Api http:localhost:7000/api/offres
//@desc Add new Offre
//@access public
router.post("/", (req, res) => {
  const newOffre = new Offre({ ...req.body });
  newOffre
    .save()
    .then((offre) => res.status(200).json(offre))
    .catch((err) => res.send(err));
});

//@Api http:localhost:7000/api/offres
//@desc Get All Offres
//@access public
router.get("/", (req, res) => {
  Offre.find()
    .then((offres) => res.status(200).json(offres))
    .catch((err) => res.send(err));
});

//@Api http:localhost:7000/api/offres
//@desc Get offres By Id
//@access public
router.get("/:_id", (req, res) => {
  // let id = req.params._id
  let { _id } = req.params;
  Offre.find({ _id })
    .then((offre) => res.send(offre))
    .catch((err) => res.send(err));
});

//@Api http:localhost:7000/api/offres
//@desc Delete Offre By Id
//@access public
router.delete("/:_id", (req, res) => {
  let { _id } = req.params;
  Offre.findByIdAndDelete({ _id })
    .then(() => res.send("Offre has been deleted"))
    .catch((err) => res.send(err));
});

//@Api http:localhost:7000/api/offres
//@desc Update Offre By Id
//@access public
router.put("/:_id", (req, res) => {
  let { _id } = req.params;
  Offre.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
    .then(() => res.send("Offre has been updated"))
    .catch((err) => res.send(err));
});

module.exports = router;
