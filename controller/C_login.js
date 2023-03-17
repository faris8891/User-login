const login = require("../model/M_login");
module.exports = {
  get: (req, res) => {
    res.render("../views/login");
  },

  post: async (req, res) => {
    let userData = req.body;
    // console.log(userData);
    try {
      const showData = await login.find(
        { name: userData.name, password: userData.password },
        { _id: 0 }
      );

      if (showData.length > 0) {
        res.render("../views/user");
        console.log("You are successfully logged");
      } else {
        let failed = "Wrong username or password."
        res.render("../views/login",{failed});
        console.log("login failed");
      }
    } catch (error) {
      console.log(error);
    }
  },
};
