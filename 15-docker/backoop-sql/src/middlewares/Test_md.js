class TestMD {
    firstMD(req, res, next) {
        try {
            console.log('Middleware de test !')
            next()
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TestMD;