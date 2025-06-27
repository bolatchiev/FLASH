const indexRouter = require('express').Router()

const userRouter = require('./userRouter')
const oceanRouter = require('./ocean.router')


indexRouter.use('/user', userRouter)
indexRouter.use('/ocean', oceanRouter)

// indexRouter.use((req, res) => {
//   res.status(404).send('Страница не найдена');
// });

module.exports = indexRouter;