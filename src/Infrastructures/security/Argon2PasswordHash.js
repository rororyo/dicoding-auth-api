const PasswordHash = require("../../Applications/security/PasswordHash")

class Argon2PasswordHash extends PasswordHash {
  constructor(argon2){
    super()
    this._argon2 = argon2
  }
  async hash(password){
    return this._argon2.hash(password)
  }
}

module.exports = Argon2PasswordHash