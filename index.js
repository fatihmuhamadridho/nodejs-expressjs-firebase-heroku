const express = require('express');
const userRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(loginRouter)

app.listen(8000, () => console.log('Server is running'));