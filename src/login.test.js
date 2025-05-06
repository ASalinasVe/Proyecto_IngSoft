import { Login } from './clases/login.js';

describe('Login', () => {
  let login;

  beforeEach(() => {
    login = new Login();
  });

  test('inicializa con lista de usuarios vacía', () => {
    expect(login.users).toEqual([]);
  });

  test('puede registrar un nuevo usuario', () => {
    login.registerUser({ username: 'ana', password: '1234' });
    expect(login.users.length).toBe(1);
    expect(login.users[0]).toEqual({ username: 'ana', password: '1234' });
  });

  test('autenticación exitosa con credenciales válidas', () => {
    login.registerUser({ username: 'ana', password: '1234' });
    expect(login.authenticate('ana', '1234')).toBe(true);
  });
  
});