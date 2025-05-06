export class Register {
    constructor() {
        this.list = []
    }
    registerUser(user) {
        this.list.push(user);
    }
    authenticate(username, password) {
        const found = this.users.find(
          (u) => u.username === username && u.password === password
        );
        return !!found;
      }
}