const express = require('express');
const router = express.Router();
const passport = require("passport");
const {authController} = require("../controllers/authController")

// OAuth routes
// router.get('/login', (req, res) => {
//   res.send('OAuth login endpoint is working');
// });


// Redirect to GitHub OAuth
router.get("/login",
  // #swagger.ignore = true
  passport.authenticate("github", { scope: ["user:email"], session: true })
);

//  Callback GitHub
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/",
    session: true
  }),
    authController  
)

// Logout
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Logout failed" });
    }

    req.session?.destroy(() => {
      res.redirect("/");
    });
  });
});

module.exports = router;
