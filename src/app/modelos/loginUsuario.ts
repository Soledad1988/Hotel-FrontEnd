export class LoginUsuario {
    login: string;
    clave: string;
    authorities!: String[];

    constructor(login: string, clave: string) {
        this.login = login;
        this.clave = clave;
    }
}