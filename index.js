import express from 'express';
import router from './routers/router.js';
import cors from 'cors';

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/api/', router)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:3000`)
})