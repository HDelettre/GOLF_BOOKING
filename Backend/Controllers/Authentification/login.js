const sequelize = require("../../Config/mysql");
const User = require("../../Models/user.model");

exports.loginUser = (req, res) => {
  console.log('REQ.BODY: ', req.body.email);
  
  async function checkUser() {
    const allusers = await sequelize.query("SELECT * FROM users");
    console.log('ALL USERS: ', allusers);

    try {
      const loginUser = await User.findOne({
        where: {
          email: req.body.email,
          password: req.body.password
        }
      });
      console.log('LOGIN USER REQUEST: User connected !');
      return res.status(200).send(loginUser);
      // console.log('User id: ', loginUser.user_id);
      // return res.status(200).json({message: 'user connected !'})
    } catch (error) {
      return res.status(400).json({message: 'ERROR LOGIN: ', error})
    }
  }
  checkUser();
}