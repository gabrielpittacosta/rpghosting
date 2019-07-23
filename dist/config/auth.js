"use strict";

var passport = require('passport');

var Strategy = require('passport-jwt').Strategy;

var ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function (app) {
  var jwtConfig = app.config.jwt;
  var Users = app.datasource.models.users;
  var options = {};
  options.secretOrKey = jwtConfig.secret;
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  var strategy = new Strategy(options, function (payload, done) {
    Users.findOne({
      where: payload.id
    }).then(function (user) {
      if (user) {
        return done(null, {
          id: user.id,
          email: user.email
        });
      }

      return done(null, false);
    })["catch"](function (error) {
      return done(error, null);
    });
  });
  passport.use(strategy);
  return {
    initialize: function initialize() {
      return passport.initialize();
    },
    authenticate: function authenticate() {
      return passport.authenticate('jwt', jwtConfig.session);
    }
  };
};