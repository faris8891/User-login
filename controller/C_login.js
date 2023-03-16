const login = require("../model/M_login");
module.exports = {
  get: (req, res) => {
    res.render("../views/login");
  },
  post: (req, res) => {
    let userData = req.body;

    // ---------------------

    const showData = async () => {
      try {
        const showData = await login.find(
          { name: userData.name, password: userData.password },
          { _id: 0 }
        );

        const check = (element) => {
          // console.log(element);
          // console.log(userData);
          if (
            element.name == userData.name &&
            element.password == userData.password
          ) {
            res.send("You are successfully logged");
            console.log("You are successfully logged");
          } else {
            res.send("Access denied");
          }
        };

        const result = showData.forEach((element) => {
          check(element);
        });

        return showData;
      } catch (error) {
        console.log(error);
      }
    };
    //   ----------------------------

    // -------------------------

    const dbData = showData();
    dbData.then((data) => {
      //   console.log(data);
    });
  },
};
