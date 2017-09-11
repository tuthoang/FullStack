const {User} = require('../models') //now can use user model in callback

module.exports = {
  async register (req, res) {
    try{
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Email already in use.'
      })
    }
  }
}
