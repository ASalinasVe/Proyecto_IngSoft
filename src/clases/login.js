export class Login {
    constructor() {
      this.users = [];
    }

    registerUser(user) {
        this.users.push(user);
    }

    authenticate(username, password) {
        const found = this.users.find(
          (u) => u.username === username && u.password === password
        );
        return !!found;
    }
  }