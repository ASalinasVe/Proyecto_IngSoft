import { User } from "../clases/user";

describe('Registro de usuarios', () => {
    test('deberia crear el usuario correctamente', () => {
        let usuario = new User('Ana', 1234, 'pass1234');
        expect(usuario).toEqual({name: 'Ana', v_id: 1234, password: 'pass1234'});
    });
    test('deberia registrar al usuario creado', () => {
        let registro = [];
        let usuario = new User('Ana', 1234, 'pass1234');
        registro.push(usuario);
        expect(registro[0]).toEqual(usuario);
    });
});
