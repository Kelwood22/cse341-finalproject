const User = require("../models/userModel");
// Controller functions for OAuth

// Example: Handle OAuth callback
const callback = (req, res) => {
  res.send('OAuth callback logic goes here');
};

const authController = (req, res) => {
  // #swagger.ignore = true
  //#swagger.tags=['User']
  res.json({
    success: true,
    message: "Authenticated",
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    }
  });
};


module.exports = {
  callback,
  authController
};
