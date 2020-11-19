const express = require('express')
const jwt = require('jsonwebtoken');
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')

const db = "mongodb+srv://amir-1:Mombasa781@cluster0.wyzfb.mongodb.net/eventsDB?retryWrites=true&w=majority"


mongoose.connect(db, err=>{
    if(err){
        console.error('Error! ' + err)
    } else {
        console.error('Connected to mongodb Yes!')
    }
})

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}


router.get('/', (req, res) => {
    res.send('Hello from API route !!')
})


router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})

//
// router.get('/user',verifyToken, (req, res) => {
//
// })


router.post('/login', (req, res) => {
    let userData = req.body
    //let user = new User(userData)
    User.findOne({email: userData.email}, (error,user) => {
        if (error) {
            console.log(error )
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else if(user.password !== userData.password){
                res.status(401).send('Invalid password')
            } else {
                let payload = { subject: user._id }
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
    })
})


router.get('/user', (req, res)=> {
    let events =    [
        {"id": 1,"name": "item1","description":"lorem ipsum","date":"2020-04-23T18:25:43.511Z"},
        {"id": 2,"name": "item2","description":"lorem ipsum","date":"2020-04-23T18:25:43.511Z"},
        {"id": 3,"name": "item3","description":"lorem ipsum","date":"2020-05-23T18:25:43.511Z"},
        {"id": 4,"name": "item4","description":"lorem ipsum","date":"2020-06-23T18:25:43.511Z"},
        {"id": 5,"name": "item5","description":"lorem ipsum","date":"2020-07-23T18:25:43.511Z"},
        {"id": 6,"name": "item6","description":"lorem ipsum","date":"2020-08-23T18:25:43.511Z"},
        {"id": 7,"name": "item7","description":"lorem ipsum","date":"2020-09-23T18:25:43.511Z"},
        {"id": 8,"name": "item8","description":"lorem ipsum","date":"2020-11-23T18:25:43.511Z"},
    ]
    res.json(events)
})


router.get('/events', (req, res)=> {
    let events =    [
        {"id": 1,"name": "Andrew","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 2,"name": "Bill","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 3,"name": "Gorge","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 4,"name": "Sam","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 5,"name": "Andrew","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 6,"name": "Bill","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 7,"name": "Gorge","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 8,"name": "Sam","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
    ]
    res.json(events)
})



router.get('/special', (req, res)=> {
    let events =    [
        {"id": 1,"name": "Andrew1","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 2,"name": "Bill","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 3,"name": "Gorge","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 4,"name": "Sam","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 5,"name": "Andrew","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 6,"name": "Bill","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 7,"name": "Gorge","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
        {"id": 8,"name": "Sam","description":"lorem ipsum","date":"2012-04-23T18:25:43.511Z"},
    ]
    res.json(events)
})


module.exports = router
