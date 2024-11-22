const CreateAuth = require('../CreateAuth')

describe('CreateAuth entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 'dicoding',
      password: 'secret'
    }
    expect(() => new CreateAuth(payload)).toThrow('CREATE_AUTH.NOT_CONTAIN_NEEDED_PROPERTY')
  })
  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      accessToken: 'dicoding',
      refreshToken: 1234,
    }
    // Action and Assert
    expect(() => new CreateAuth(payload)).toThrow('CREATE_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION')
  })
  it('should create CreateAuth entities correctly', () => {
    // Arrange
    const payload = {
      accessToken: 'dicoding',
      refreshToken: 'secret',
    }
    /// Action & Assert
    const createAuth = new CreateAuth(payload)
    expect(createAuth).toBeInstanceOf(CreateAuth)
    expect(createAuth.accessToken).toEqual(payload.accessToken)
    expect(createAuth.refreshToken).toEqual(payload.refreshToken)
  })
})