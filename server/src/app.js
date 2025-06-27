require('dotenv').config();
const express = require('express');
const indexRouter = require('./routes/index.router');
const serverConfig = require('./configs/server.config');
const { PORT } = process.env;
const app = express();
serverConfig(app);
// app.use('/api', (req, res, next) => {
//   // Здесь можно добавить логику для всех запросов к /api
//   next();  //! не забыть поменять!
// });
app.use('/api', indexRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});