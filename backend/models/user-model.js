const mysql = require('../connection-mysql');

// peut-on utiliser mysql.schema comme avec mongoose??
const userModel = mysql.schema({
    id: { type: String, require: true },
    email: { type: String, require: true },
    pseudo: { type: String, require: true },
    profile_picture: { type: String },
    id_roles: { type: String, require: true },
    create_at: { type: String, require: true },
    update_at: { type: String, require: true }
});

module.exports = mysql.schema(userModel);