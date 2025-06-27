const { User } = require("../db/models");

class UserService {
  
  static async register({ email, name, password }) {
   
    const [user, created] = await User.findOrCreate({
      where: { email }, 
      defaults: { name, password }, 
    }); 
    return { user, created };
  } 
  static async getUserByEmail({ email }) {
    return await User.findOne({ where: { email } }); 
  }
}

module.exports = UserService;
