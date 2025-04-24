import { Usuario } from './clases/usuario'

describe('Registro de usuarios', () => {
    test('deberia crear el usuario correctamente', () => {
        let usuario = new Usuario('Ana', 1234, 'pass1234');
        expect(usuario).toEqual({name: 'Ana', v_id: 1234, password: 'pass1234'});
    });
});
