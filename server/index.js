require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors')
const db = require('./models')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth')
const nationalsRouter = require('./routes/nationals')
const districtsRouter = require('./routes/districts')
const healthWorkersRouter = require('./routes/healthWorkers')
const vaccinationCentersRouter = require('./routes/vaccinationCenters')
const vaccinesRouter = require('./routes/vaccines')
const jabsRouter = require('./routes/jabs')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser())

//routes
app.use('/auth/admin', authRouter)
app.use('/nationals', nationalsRouter)
app.use('/districts', districtsRouter)
app.use('/jabs', jabsRouter)
app.use('/vaccines', vaccinesRouter)
app.use('/vaccinationCenters', vaccinationCentersRouter)
app.use('/healthWorkers', healthWorkersRouter)




db.sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log('server started on port 3002')

    })
})
