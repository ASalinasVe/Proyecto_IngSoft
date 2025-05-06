import { Login } from './clases/login.js';

describe('Login', () => {
    let login;

    beforeEach(() => {
        login = new Login();
        login.registerUser({ username: 'ana', password: '1234' });
    });

    test('autenticación exitosa con credenciales válidas', () => {
        expect(login.authenticate('ana', '1234')).toBe(true);
    });

    test('fallo al iniciar sesión con contraseña incorrecta', () => {
        expect(login.authenticate('ana', 'wrong')).toBe(false);
    });

    test('fallo al iniciar sesión con usuario inexistente', () => {
        expect(login.authenticate('otro', '1234')).toBe(false);
    });
});