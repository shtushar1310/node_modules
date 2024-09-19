const express = require('express')
const app = express()
const db=require('./db')
const bodyParser=require('body-parser')
app.use(bodyParser.json())


// const Person=require('./models/person');
// const menuItems=require('./models/menu')
const Page=require('./models/home')






const personRoutes=require('./routesPerson/personRoutes')
app.use('/person',personRoutes)
const menuRoutes=require('./routesPerson/menuRoutes')
app.use('/menu',menuRoutes)
const homePage=require('./routesPerson/homeRoutes')
app.use('/',homePage)

app.listen(3000)

