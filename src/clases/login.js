export class Login {
    constructor() {
      this.users = [];
    }
    
    registerUser(user) {
        this.users.push(user);
    }
  }