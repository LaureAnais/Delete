// Rajouter l'url visée par notre application // api
// l'application frontend va faire une requete à cette api la 
app.post('/api/user-model',(req, res, next) =>{
    // besoin de supprimer l'id? y a t'il création d'un id automatiquement??
    // delete req.body._id;
    const user = new User({
      ...req.body
    });
    user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});

app.get('/api/user-model', (req, res, next) =>{
    User.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
});