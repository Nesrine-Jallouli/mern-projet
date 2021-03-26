const mongoose = require("mongoose");

// const userSchema = mongoose.Schema({
//   name: {type:String,require:true},
//   email: {type:String,require:true},
//   phoneNumber: Number,
//   password: {type:String,require:true},
//   mobileNumber: Number,
//   dateNaissance: Date,
//   adress:String,
//   diplome:String,
//   experience:String,
//   cv:String,
//   profession:String,
//   webside:String,
//   githup:String,
//   twitter:String,
//   instagram:String,
//   facebook:String,

// });



const userSchema = mongoose.Schema({
  name: {type:String},
  phoneNumber: Number,
  mobileNumber: Number,
  dateNaissance: Date,
  adress:String,
  diplome:String,
  experience:String,
  cv:String,
  profession:String,
  webside:String,
  githup:String,
  twitter:String,
  instagram:String,
  facebook:String,
  role: {
    type: String,
    enum: ["candidat", "entreprise"],
    default: "candidat",
  },

  raisonSocial: {type:String},
  email: {type:String,require:true},
  password: {type:String,require:true},
  logo:String,
  nbreEmploye:String,
  description:String,

});





module.exports = User = mongoose.model("user", userSchema);
