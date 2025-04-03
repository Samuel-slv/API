import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


const app = express();
app.use(express.json());
const users = []

//Criar dados / ususarios / fazer requeisição POST
app.post('/users', async (req, res) => {

    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })

    users.push(req.body);
    res.status(201).json(users);
})

//Mostrar /dados / usuarios / fazer requeisição GET

app.get('/users', async (req, res) => {

    const users = prisma.user.findMany();
    res.status(200).json(users);
});

//ip 127.0.0.1:8082
app.listen(8082);









/* import express from 'express';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

const users = []

//Criar dados / ususarios / fazer requeisição POST


app.post('/users', async (req, res) => {

    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email
            age: req.body.age
        }
    })

    users.push(req.body)
    res.status(201).json(users);
})

//Mostrar /dados / usuarios / fazer requeisição GET

app.get('/users', (req, res) => {
    //res.status(200).json(users);
    res.status(200).json(users);
});

//ip 127.0.0.1:8082*/
//app.listen(8082); 