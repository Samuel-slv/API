import express from 'express';

const app = express();
app.use(express.json());

const users = []

//Criar dados / ususarios / fazer requeisição POST
app.post('/users', (req, res) => {
    console.log(req.body)
    res.status(201).json(users);
})

//Mostrar /dados / usuarios / fazer requeisição GET

app.get('/users', (req, res) => {
    //res.status(200).json(users);
    res.status(200).json(users);
});

//ip 127.0.0.1:8080*/
app.listen(8082);