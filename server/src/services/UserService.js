const { User } = require("../db/models/user");

class UserService {
  
  static async register({ email, name, password }) {
   
    const [user, created] = await User.findOrCreate({
      where: { email }, 
      defaults: { name, password }, 
    }); 
    return { user, created };
  } 
  static async getUserByEmail({ email }) {
    const user = await User.findOne({ where: { email } }); 
  }
}

module.exports = UserService;
