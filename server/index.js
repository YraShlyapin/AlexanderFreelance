import express from 'express'
import router from '#src/router'

import 'dotenv/config'

const PORT = process.env.SERV_PORT || 80
const HOST = process.env.SERV_HOST || 'localhost'

const app = express()

app.use('/', router)

app.listen(PORT, HOST, (err) => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log(`restapi start on http://${HOST}:${PORT}/`)
})