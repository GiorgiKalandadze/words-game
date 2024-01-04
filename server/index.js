require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./src/routes');
const {RESULT_CODES, RESULT_STATUSES} = require('./src/constants');
const path = require('path');
const {MongoClient} = require('mongodb');
const DBManager = require('./src/db-manager');

async function connectToMongo() {
    try {
        const client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        DBManager.setClient(client);
        console.log('### Successfully connected to Mongo');
    } catch (error) {
        throw error;
    }
}

connectToMongo().catch((error) => {
    console.error('### Error while connecting to MongoDB client: ');
    console.error(error);
});

if(process.env.NODE_ENV !== 'DEVELOPMENT') {
    app.use(express.static(path.join(__dirname, 'public')));
}

app.use('/api', router);
app.get('/', (req, res) => {
    // return res.sendFile(path.join(__dirname, 'public', 'index.html'));
    return res.status(200).json({
        resultCode: RESULT_CODES.SUCCESS,
        resultStatus: RESULT_STATUSES.SUCCESS,
        message: 'Hello',
        data: null,
    });
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
