// const Entreprise = require("../models/Entreprise");
// const bcrypt = require("bcryptjs");

// require("dotenv").config({ path: "../config/.env" });

// const secretOrKey = process.env.secretOrKey;

// const jwt = require("jsonwebtoken");

// exports.entrepriseRegister = async (req, res) => {
//   const { raisonSocial, email, phoneNumber, password, adress} = req.body;
//   const searchResult = await Entreprise.findOne({ email });
//   console.log(searchResult);
//   if (searchResult) return res.status(404).json({ msg: `Entreprise already exist` });
//   try {
//     const newEntreprise = new Entreprise({
//       raisonSocial,
//       email,
//       phoneNumber,
//       password,
//       adress
//     });
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);
//     newEntreprise.password = hash;
//     await newEntreprise.save();
//     await res.status(201).json({ msg: `Entreprise added successfully` });
//   } catch (error) {
//     console.error("Entreprise register failed", error);
//     res.status(401).json({ msg: `Entreprise register Failed` });
//   }
// };

// exports.entrepriseLogin = async (req, res) => {
//   const { email, password } = req.body;
//   const entreprise = await Entreprise.findOne({ email });
//   if (!entreprise) return res.status(401).json({ msg: "Wrong email" });
//   const isMatch = await bcrypt.compare(password, entreprise.password);
//   if (!isMatch) return res.status(401).json({ msg: "Wrong password" });
//   try {
//     const payload = {
//       _id: entreprise._id,
//       raisonSocial: entreprise.raisonSocial,
//       email: entreprise.email,
//     };
//     const mytoken = await jwt.sign(payload, secretOrKey);
//     return res.status(200).json({ mytoken: `Bearer ${mytoken}`, entreprise : payload});

//   } catch (error) {
//     console.error(error);
//     res.status(404).json({ errors: error });
//   }
// };

