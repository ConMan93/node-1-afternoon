let messages = [];
let id = 0;

module.exports = {

    getMessage(req, res) {
        res.status(200).send(messages)
    },

    editMessage(req, res) {
        let { id } = req.params
        let { text } = req.body

        for(let i = 0; i < messages.length; i++) {
            if(messages[i].id === Number(id)) {
                messages[i] = {
                    id: messages[i].id,
                    name: messages[i].name,
                    text: text || messages[i].text,
                    time: messages[i].time
                }
            }
        }
        res.status(200).send(messages)
    },

    postMessage(req, res) {
        let { text, time, name } = req.body
        let message = {
            id,
            name,
            text,
            time
        }
        id++
        messages.push(message)
        res.status(200).send(messages)
    },

    deleteMessage(req, res) {
        let { id } = req.params

        for(let i = 0; i < messages.length; i++) {
            if(messages[i].id === Number(id)) {
                messages.splice(i, 1)
            }
        }
        res.status(200).send(messages)
    }
}