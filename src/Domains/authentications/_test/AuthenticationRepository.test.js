const AuthenticationRepository = require('../AuthenticationRepository')

describe('AuthenticationRepository interface', () => {
  it('should throw error when invoke abstract behavior', async () => {
    // Arrange 
    const authenticationRepository = new AuthenticationRepository();
    // Action and Assert
    await expect (authenticationRepository.addToken('')).rejects.toThrow('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED')
    await expect (authenticationRepository.verifyToken('')).rejects.toThrow('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED')
    await expect (authenticationRepository.deleteToken('')).rejects.toThrow('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED')
  })
})