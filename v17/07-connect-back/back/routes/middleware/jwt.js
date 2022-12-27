module.exports = (req, res, next) => {
    console.log('Middleware JWT')
    next()
}
