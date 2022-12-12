
const User = require('../../Models/user.model');



// CREATE USER
exports.createUser = (req, res) => {
  //INSERT INTO user (email, password, firstname, lastname)
  const userOne = User.build({
    email: req.body.email,
    password: req.body.password
  })
  userOne.save();
  return res.status(200).json({ message: 'user created !'})
}