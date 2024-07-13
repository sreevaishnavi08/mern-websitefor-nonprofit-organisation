const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const { MongoClient } = require('mongodb');
const path = require('path');
const cors = require('cors');
const verifyToken = require('./verifyToken');
app.use(cors());

const uri = 'mongodb+srv://vivek:vivek@cluster0.vb2z0fr.mongodb.net';
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        const db = client.db('cfg');
        app.set('studentsCollectionObj', db.collection('studentsCollection'));
        app.set('instructorsCollectionObj', db.collection('instructorsCollection'));
        app.set('evaluationsCollectionObj', db.collection('evaluationsCollection'));
        app.set('volunteersCollectionObj', db.collection('volunteersCollection'));
        console.log('DB Connection success');
    })
    .catch(err => {
        console.log('DB Connection error', err);
    });

app.use(express.json());

app.post('/students', async (req, res) => {
    const newUser = req.body;
    const studentsCollectionObj = req.app.get('studentsCollectionObj');
    const dbres = await studentsCollectionObj.findOne({ email: newUser.email });
    if (dbres !== null) {
        res.send({ message: 'user existed' });
    } else {
        const hashedPassword = await bcryptjs.hash(newUser.password, 6);
        newUser.password = hashedPassword;
        const dbres1 = await studentsCollectionObj.insertOne(newUser);
        if (dbres1.acknowledged === true) {
            res.send({ message: 'user created' });
        } else {
            res.send({ message: 'try again, user not created' });
        }
    }
});

app.post('/instructors', async (req, res) => {
    const newUser = req.body;
    const instructorsCollectionObj = req.app.get('instructorsCollectionObj');
    const dbres = await instructorsCollectionObj.findOne({ email: newUser.email });
    if (dbres !== null) {
        res.send({ message: 'user existed' });
    } else {
        const hashedPassword = await bcryptjs.hash(newUser.password, 6);
        newUser.password = hashedPassword;
        const dbres1 = await instructorsCollectionObj.insertOne(newUser);
        if (dbres1.acknowledged === true) {
            res.send({ message: 'user created' });
        } else {
            res.send({ message: 'try again, user not created' });
        }
    }
});

app.post('/students-login', async (req, res) => {
    const userCredObj = req.body;
    const studentsCollectionObj = req.app.get('studentsCollectionObj');
    const dbUser = await studentsCollectionObj.findOne({ email: userCredObj.email });
    if (dbUser === null) {
        res.send({ message: 'invalid email' });
    } else {
        const status = await bcryptjs.compare(userCredObj.password, dbUser.password);
        if (status) {
            const signedToken = jwt.sign({ user: dbUser }, 'abcdefgh', { expiresIn: '1d' });
            res.send({ message: 'login success', token: signedToken, user: dbUser });
        } else {
            res.send({ message: 'invalid password' });
        }
    }
});

app.post('/instructors-login', async (req, res) => {
    const userCredObj = req.body;
    const instructorsCollectionObj = req.app.get('instructorsCollectionObj');
    const dbUser = await instructorsCollectionObj.findOne({ email: userCredObj.email });
    if (dbUser === null) {
        res.send({ message: 'invalid email' });
    } else {
        const status = await bcryptjs.compare(userCredObj.password, dbUser.password);
        if (status) {
            const signedToken = jwt.sign({ user: dbUser }, 'abcdefgh', { expiresIn: '1d' });
            res.send({ message: 'login success', token: signedToken, user: dbUser });
        } else {
            res.send({ message: 'invalid password' });
        }
    }
});

app.get('/students',  async (req, res) => {
    const studentsCollectionObj = req.app.get('studentsCollectionObj');
    const students = await studentsCollectionObj.find().toArray();
    res.send({ students });
});

app.post('/evaluate-student/:email',  async (req, res) => {
    const { email } = req.params;
    const evaluation = req.body;
    const evaluationsCollectionObj = req.app.get('evaluationsCollectionObj');
    evaluation.email = email;
    const dbres = await evaluationsCollectionObj.insertOne(evaluation);
    if (dbres.acknowledged === true) {
        res.send({ message: 'evaluation saved' });
    } else {
        res.send({ message: 'try again, evaluation not saved' });
    }
});

app.get('/evaluations/:email', async (req, res) => {
    const { email } = req.params;
    const evaluationsCollectionObj = req.app.get('evaluationsCollectionObj');
    const evaluations = await evaluationsCollectionObj.find({ email }).toArray();
    res.send({ evaluations });
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use((err, req, res, next) => {
    res.send({ message: 'error', payload: err.message });
});

app.listen(4000, () => console.log('server running on 4000...'));
