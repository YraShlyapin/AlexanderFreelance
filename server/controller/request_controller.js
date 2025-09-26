import postgres from '#src/db'

export let getRequests = async (req, res) => {
    try {
        const data = await postgres.query('SELECT * FROM request')
        res.status(200).json(data.rows)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export let getOneRequest = async (req, res) => {
    try {
        const { id } = req.params
        const data = await postgres.query('SELECT * FROM request where id = $1', [id])
        res.status(200).json(data.rows)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export let createRequest = async (req, res) => {
    try {
        const { name, tg, email, text } = req.body
        if (!tg.match(/@[a-z][a-z0-9_]{3,31}/)) throw { message: "asd1" }
        if (!email.match(/[a-z]{2,}@[a-z]{2,}.[a-z]{2,}/)) throw { message: "asd2" }
        const data = await postgres.query('INSERT INTO request (name,tg,email,text) VALUES ($1,$2,$3,$4) RETURNING *', [name, tg, email, text])
        res.status(201).json(data.rows[0])
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}