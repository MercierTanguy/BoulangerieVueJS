class Session {
    constructor() {
      this._sessionData = new Map();
    }
  
    getSessionData() {
      return this._sessionData;
    }
  }
  
export default Session;