const express = require('express');
const app = express();
const cors = require('cors');
const { log } = require('mercedlogger');
const database = require('./database/main');
const usersRouter = require('./routers/users');
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);

// connect to database
database()
  .then(() => log.magenta('Database Connection: ', 'Success'))
  .catch(err => log.red('Database Connection: ', err));

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);
// global error handler
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message, you: 'done goofed' });
});

app.listen(PORT, () => console.log('listening on port: ' + PORT));
