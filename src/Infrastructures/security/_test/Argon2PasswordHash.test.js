const argon2 = require('argon2');
const Argon2PasswordHash = require('../Argon2PasswordHash');


describe('Argon2PasswordHash', () => { 
  describe('hash function', () => { 
    it('should encrypyt password correctly', async() => {
    // Arrange
    const spyHash = jest.spyOn(argon2,'hash')
    const argon2PasswordHash = new Argon2PasswordHash(argon2);
    
    // Action
    const hashedPassword = await argon2PasswordHash.hash('plain_password');

    // Assert
    expect(typeof hashedPassword).toEqual('string');
    expect(hashedPassword).not.toEqual('plain_password');
    expect(spyHash).toBeCalledWith('plain_password');
    })

   })
 })