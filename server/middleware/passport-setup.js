const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");

require("dotenv").config({ path: "../config/.env" });

const secretOrKey = process.env.secretOrKey;
const User = require("../models/User");
const Entreprise = require("../models/Entreprise");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

passport.initialize();


passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    const {id } = jwt_payload;
    try {
      const user = await User.findById(id);
      // const entreprise = await Entreprise.findById(id);
     
      // if ( user) {
      //   return done(null , user)
      // }else 
      // if ( entreprise) {
      //   return done(null , entreprise)
      // }else {
      //   return done(null , false)
      // }
        user ? done(null, user) : done(null, false);
    } catch (error) {
      console.error(error);
    }
  })
);

module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false });
