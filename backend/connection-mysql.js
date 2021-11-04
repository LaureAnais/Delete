// Connexion mysql ok + création / suppression ok

var mysql = require('mysql');

console.log('Get connection ...');

var conn = mysql.createConnection({
  database: 'groupomania',
  host: "localhost",
  user: "root",
  password: "projetUSER!2021",
  multipleStatements: true
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});  

/*
// créer une procédure stockée
DELIMITER $$

CRÉER LA PROCÉDURE `sp_insert_author` (
  out author_id int,
  dans author_name varchar (25),
  dans author_city varchar (25)
)
COMMENCER
  insérer dans les auteurs (nom, ville)
  valeurs (nom_auteur, ville_auteur);
  set author_id = LAST_INSERT_ID ();
FIN $$

// mysql.escape pour protéger la base de données et eviter les attaques d'injection SQL
con.query (
    `SELECT * FROM auteurs WHERE id = $ {mysql.escape (userSubmittedVariable)}`,
    (err, lignes) => {
      if (err) throw err;
      console.log (lignes);
    }
  );
  */