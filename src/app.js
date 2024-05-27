const express = require('express')
const app = express()

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(express.json())

// routes
app.use('/api/github', require('./routes/popularReposGitHub'))

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})