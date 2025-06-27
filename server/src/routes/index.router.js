const indexRouter = require('express').Router()

const userRouter = require('./userRouter')
const oceanRouter = require('./ocean.router')
<<<<<<< HEAD
const jokeRouter = require('./jokes.router')

indexRouter.use('/user', userRouter)
indexRouter.use('/ocean', oceanRouter)
indexRouter.use('/jokes', jokeRouter)
=======
const geographyRouter = require('./geography.router')


indexRouter.use('/user', userRouter)
indexRouter.use('/ocean', oceanRouter)
indexRouter.use('/geography', geographyRouter)

>>>>>>> fcdff7232b219c0795f281c8cb994806be6cba6d
// indexRouter.use((req, res) => {
//   res.status(404).send('Страница не найдена');
// });

module.exports = indexRouter;
