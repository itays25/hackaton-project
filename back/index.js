const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { register, login, addVideo, rateVideo, rateQuality, rateQuality2, rateQuality3, rateQuality4, rateQuality5, correctAnswer, similiarAnswer, randomAnswer, isAppropriate, allVideos } = require('./controller')

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
app.get('/allVIdeos', allVideos)
app.put('/addVIdeo/:id', rateVideo)
app.put('/rateVIdeo/:id', rateQuality)
app.put('/rateVIdeo/:id/2', rateQuality2)
app.put('/rateVIdeo/:id/3', rateQuality3)
app.put('/rateVIdeo/:id/4', rateQuality4)
app.put('/rateVIdeo/:id/5', rateQuality5)
app.put('/answerVIdeo/:id/correct', correctAnswer)
app.put('/answerVIdeo/:id/similiar', similiarAnswer)
app.put('/answerVIdeo/:id/random', randomAnswer)
app.put('/isappropriateVIdeo/:id', isAppropriate)


app.listen(8639,()=> console.log('emotions'))
