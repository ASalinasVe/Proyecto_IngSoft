import { Login } from '../src/login.js';

describe('Login', () => {
  let login;

  beforeEach(() => {
    login = new Login();
  });

  test('inicializa con lista de usuarios vacía', () => {
    expect(login.users).toEqual([]);
  });
});