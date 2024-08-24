const express = require('express');
const app = express();
const univercities = require('./routes/univercities.routes')
const student = require('./routes/student.routes')
const Student_Univercities = require('./routes/student_univercities.routes')
const db = require('./model')
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/univercities', univercities)
app.use('/student', student)
app.use('/Student_Univercities',Student_Univercities)

app.get('/', (req, res) => {
    res.send('Welcome to the .... Test API')
})

db.sequelize.sync({force: false }).then(() => {
    app.listen(port, ()=> {
        console.log(`Server running on ${port}`)
    })
}).catch (err => {
    console.log('Error to sync database', err)
})