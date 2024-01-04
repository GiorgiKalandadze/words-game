const express = require('express');
const {getWordsList} = require('./words-handler');
const router = express.Router();

router.get('/words', async (request, response) => {
    await getWordsList(request, response);
});

module.exports = {wordsRoutes: router};