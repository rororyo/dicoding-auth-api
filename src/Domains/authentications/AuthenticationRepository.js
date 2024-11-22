class AuthenticationRepository {
  async addToken(token){
    throw new Error('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED')
  }
  async verifyToken(token){
    throw new Error('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED')
  }
  async deleteToken(token){
    throw new Error('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED')
  }
}

module.exports = AuthenticationRepository