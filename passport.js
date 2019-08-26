import passport from "passport";
import User from "./models/User";

// using strategy
passport.use(User.createStrategy());

// serialize deserialize
passport.serializeUser(User.serializeUser);
passport.deserializeUser(User.deserializeUser);
