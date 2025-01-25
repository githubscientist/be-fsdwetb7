const testController = {
    testGet: (req, res) => {
        res.json({ message: 'Hello GET!' });
    },

    testPost: (req, res) => {
        res.json({ message: 'Hello POST!' });
    },

    testPut: (req, res) => {
        res.json({ message: 'Hello PUT!' });
    },

    testDelete: (req, res) => {
        res.json({ message: 'Hello DELETE!' });
    }
}

module.exports = testController;