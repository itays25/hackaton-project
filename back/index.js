const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { register, login, addVideo, rateVideo, rateQuality } = require('./controller')

mongoose.connect('mongodb+srv://emotiplay:emotiplay@cluster0.mqbcnqd.mongodb.net/test',{})
.then(()=>{console.log('hacked in successfully')})
.catch(error => {console.log('error');
console.log(error)
})
const app = express()
app.use(express.json())
app.use(cors())

// user related
app.post('/register', register)
app.get('/login', login)

// video related
app.post('/addVIdeo', addVideo)
app.put('/addVIdeo/:id', rateVideo)
app.put('/rateVIdeo/:id', rateQuality)


app.listen(8639,()=> console.log('emotions'))
