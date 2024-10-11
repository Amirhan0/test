const express = require('express')
const mysql = require('mysql2')
const app = express()
const cors = require('cors')
const port = 5000
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'maximum'
})


db.connect((err) => {
    if (err) {
        console.log('Ошибка в подключение к базе', err)
        return
    }
    console.log('Успешное подключение к БД')
})

app.use(cors())
app.use(express.json())

app.post('/api/transactions', (req,res) => {
    const {dateTime, author, sum, category, comment} = req.body

    const query = `INSERT INTO transactions (dateTime, author, sum, category, comment) VALUES (?, ?, ?,?,?)`
    
    db.query(query, [dateTime, author, sum, category, comment], (err, result) => {
        if(err) {
            console.log('Ошибка отправки данных в базу', err)
            return res.status(500).json({message: 'Ошибка отправки данных в базу'})
        }
        res.status(201).json({message: "Успешно отправлены в базу данных" })
    })

})

app.listen(port,() => {
    console.log(`Сервер запущен на порту ${port}`)
})

