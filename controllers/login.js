const { Users } = require('../config');
let randomToken = require('randomstring')

module.exports = {
    store: async function(req, res) {
        const { email, password } = req.body
        const snapshot = await Users.get();
        const findUser = snapshot.docs.find(user => user.data().email === email && user.data().password === password)
        res.send({
            token: randomToken.generate(36),
            data: {
                email: findUser.data().email,
            },
            meta: {
                message: "Berhasil login!"
            },
            pagination: {
                total_records: 0,
                total_page: 0,
                limit_page: 0,
                current_page: 0
            }
        })
    }
}