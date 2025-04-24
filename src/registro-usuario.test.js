import { Usuario } from './clases/usuario'
import { Register } from './clases/register';

describe('Registro de usuarios', () => {
    test('deberia crear el usuario correctamente', () => {
        let usuario = new Usuario('Ana', 1234, 'pass1234');
        expect(usuario).toEqual({name: 'Ana', v_id: 1234, password: 'pass1234'});
    });
    test('deberia registrar al usuario creado', () => {
        let registro = new Register();
        let usuario = new Usuario('Ana', 1234, 'pass1234');
        registro.registerUser(usuario);
        expect(registro.list[0]).toEqual(usuario);
    });
});
