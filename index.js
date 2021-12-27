const express = require('express');
const userRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(loginRouter)

app.listen(port, () => console.log('Server is running'));