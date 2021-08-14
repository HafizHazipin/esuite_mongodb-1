const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const ejs = require("ejs")
const expressLayouts = require("express-ejs-layouts")
const connectDB = require("./config/db")

// Load config
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//setting the views engine and getting the .ejs files from the 'views' folder
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(expressLayouts);
app.set("layout", "layouts/main");
//app.use(express.static('public'))

app.set("dashboard", "/dashboard");
//static folder for css, scripts & img
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/', require('./routes/index'))
app.use('/booking', require('./routes/booking'))

const PORT = process.env.PORT || 5000

app. listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
