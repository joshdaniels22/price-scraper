const PORT = 8000
const axios = require('axios')
const express = require("express")
const cheerio = require("cheerio")

const app = express()


app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))