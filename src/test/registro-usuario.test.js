import { User } from './clases/user'
import { Login } from './clases/login';

describe('Registro de usuarios', () => {
    test('deberia crear el usuario correctamente', () => {
        let usuario = new User('Ana', 1234, 'pass1234');
        expect(usuario).toEqual({name: 'Ana', v_id: 1234, password: 'pass1234'});
    });
    test('deberia registrar al usuario creado', () => {
        let registro = new Login();
        let usuario = new User('Ana', 1234, 'pass1234');
        registro.registerUser(usuario);
        expect(registro.users[0]).toEqual(usuario);
    });
});
