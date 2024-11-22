class CreateAuth {
  constructor(payload){
    this._verifyPayload(payload);
    this.accessToken = payload.accessToken
    this.refreshToken = payload.refreshToken;
  }

  _verifyPayload(payload){
    const {accessToken, refreshToken} = payload;
    if(!accessToken || !refreshToken){
      throw new Error('CREATE_AUTH.NOT_CONTAIN_NEEDED_PROPERTY')
    }
    if(typeof accessToken !== 'string' || typeof refreshToken !== 'string'){
      throw new Error('CREATE_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION')
    }
  }
}

module.exports = CreateAuth