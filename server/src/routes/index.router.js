const indexRouter = require('express').Router()

const userRouter = require('./userRouter')
const oceanRouter = require('./ocean.router')
const jokeRouter = require('./jokes.router')

indexRouter.use('/user', userRouter)
indexRouter.use('/ocean', oceanRouter)
indexRouter.use('/jokes', jokeRouter)
// indexRouter.use((req, res) => {
//   res.status(404).send('Страница не найдена');
// });

module.exports = indexRouter;
