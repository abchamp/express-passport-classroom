const passport = require('passport')
const ExtractJwt = require("passport-jwt").ExtractJwt;
const JwtStrategy = require("passport-jwt").Strategy;
const keys = require('./keys')

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    secretOrKey: keys.jwt.secretKey
};
  
const jwtAuth = new JwtStrategy(jwtOptions, (payload, done) => {
    if (payload.sub === "test") done(null, true);
    else done(null, false);
});

passport.use(jwtAuth);