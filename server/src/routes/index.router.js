const indexRouter = require('express').Router()

const authRouter = require('./userRouter')
const oceanRouter = require('./ocean.router')


indexRouter.use('/user', authRouter)
indexRouter.use('/ocean', oceanRouter)

// indexRouter.use((req, res) => {
//   res.status(404).send('Страница не найдена');
// });

module.exports = indexRouter;