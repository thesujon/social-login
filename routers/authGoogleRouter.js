const router = require('express').Router();
const passport = require('passport');
require('../config/authGoogle');

// localhost:3001/auth/google
router.route('/')
    .get(passport.authenticate("google", {scope: ["profile","email"]}));

// localhost:3001/auth/google/redirect
router.route('/redirect')
    .get(passport.authenticate("google", {session: false}), (req, res)=>{
        res.send(req.user);
    })
module.exports = router;
