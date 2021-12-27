const { Users } = require("../config")

module.exports = {
    index: async function(req, res) {
        const snapshot = await Users.get();
        const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) )
        res.send(list);
    },
    store: async function(req, res) {
        const data = req.body;
        await Users.add(data);
        res.send({ message: "User added" })
    }
}