const db = require('../config')

exports.getHero = (response) => {
    //query data
    const sql = "SELECT * FROM `hero`"

    //execute data
    db.query(sql, (error, result) => {
        if (error) return console.log('error: ', error)

            //response data
        const heroes = {
            title: "MOBILE-LEGEND-HERO-LIST",
            data: JSON.parse(JSON.stringify(result))
        }
        response.render('index', { heroes })
        response.end()
    })
}

exports.getHeroById = (id, response) => {
    const sql = `SELECT * FROM hero WHERE id = '${id}'`

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        const hero = {
            title: "DATA HERO BY ID",
            data: JSON.parse(JSON.stringify(result))
        }
        response.render('heroDetail', { hero })
        response.end()
    })
}

exports.updateHeroById = (data, response) => {
    const id = data.id
    const name = data.name
    const role = data.role
    const senjata = data.senjata

    const sql = `UPDATE hero SET name = '${name}', role = '${role}', senjata = '${senjata}'WHERE id = '${id}'`

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        response.redirect('/hero')
        response.end()
    })

}

exports.addHero = (data, response) => {
    const name = data.name
    const role = data.role
    const senjata = data.senjata
    const sql = `INSERT INTO hero (name, role, senjata) VALUES ('${name}', '${role}', '${senjata}')`

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        response.redirect('/hero')
        response.end()
    })

}

exports.removeHero = (id, response) => {
    const sql = `DELETE FROM hero WHERE id='${id}'`

    db.query(sql, (error, result) => {
        if (error) return console.log('error', error)
        response.redirect('/hero')
        response.end()
    })

}