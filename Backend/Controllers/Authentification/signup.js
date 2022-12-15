const User = require("../../Models/user.model");

// CREATE USER
exports.createUser = (req, res) => {
  const userOne = User.build({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstname,
    lastName: req.body.lastname
  });

  async function saveNewUser() {
    try {
      await userOne.save();
      const users = await User.findAll();
      users.map((data) => console.log("users:", data.email));
      return res.status(200).json({ message: "user created !" });
    } catch (error) {
      console.log(error)
      return res.status(400).send(error.name);
    }
  }
  saveNewUser();
};
