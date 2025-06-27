require('dotenv').config();
const express = require('express');
const serverConfig = require('./configs/server.config');
const { PORT } = process.env;
const app = express();
const jokesRouter = require('./routes/jokes');
app.use('/api/jokes', jokesRouter);

serverConfig(app);
app.use('/api', (req, res, next) => {
  // Здесь можно добавить логику для всех запросов к /api
  next();  //! не забыть поменять!
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
