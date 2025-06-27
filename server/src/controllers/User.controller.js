
const UserService = require('../services/User.service');
const formatResponse = require('../utils/formatResponse');


class UserController {
  // Регистрация пользователя
  static async signup(req, res) {
    const { email, name, password } = req.body;

    // Проверка на обязательные поля
    if (!email || !name || !password) {
      return res.status(400).json(formatResponse({
        statusCode: 400, message: 'Missing required fields'
      }));
    }
    try {
      // Регистрируем пользователя через сервис
      const { user, created } = await UserService.register({
        email,
        name,
        password,
      });

      // Если пользователь уже существует
      if (!created) {
        return res.status(400).json(formatResponse({
          statusCode: 400, 
          message: 'User already exists'}));
      }

      // Получаем обычный объект пользователя без Sequelize метаданных
      const plainUser = user.get();
      delete plainUser.password; // Удаляем пароль из ответа

      // Сохраняем refreshToken в куку и отправляем успешный ответ
      return res.json(formatResponse({
        statusCode: 201, message: 'Success'
      }));
    } catch (error) {
      console.log(error);
      return res.status(500).json(formatResponse({
        statusCode: 500, error: 'Internal Server Error'
    }));
    }
  }

  // Авторизация пользователя
  static async login(req, res) {
    const { email, password } = req.body;

    // Проверка на обязательные поля
    if (!email || !password) {
      return res.status(400).json(formatResponse({
        statusCode: 400, message: 'Missing required fields'
    }));
    }

    try {
      // Получаем пользователя по email
      const user = await UserService.getUserByEmail({ email });

      if (!user) {
        return res.status(400).json(formatResponse({
          statusCode: 400, message: 'User not found'
        }));
      }


      // Приводим пользователя к обычному объекту и удаляем пароль
      const plainUser = user.get();
      delete plainUser.password;

      res.status(200).json(formatResponse({
        statusCode: 200, 
        data: user
      }))

  }catch(error){
      console.log(error);
      return res.status(500).json(formatResponse({
        statusCode: 500, error: 'Internal Server Error'
    }));
  }
}

}


module.exports = UserController;