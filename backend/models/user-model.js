const db = require('../config/db');

// Models
class User{
    constructor(email, pseudo, password) {
        this.email = email;
        this.pseudo = pseudo;
        this.password = password;
    }

    async save() {

    }

    static findAll() {

    }

}
