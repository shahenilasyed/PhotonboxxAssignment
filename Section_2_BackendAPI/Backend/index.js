
const express = require('express');
const app = express();
const studentsRouter = require('./routes/StudentController');
const loginRouter = require('./routes/LogInController');
const bodyParser = require('body-parser');

// Use body-parser to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/students', studentsRouter);
app.use('/auth',loginRouter);

app.listen(5000, () => {
    console.log('Server listening on port 5000');
})