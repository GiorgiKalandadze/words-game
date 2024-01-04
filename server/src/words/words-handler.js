const {RESULT_CODES, RESULT_STATUSES, MONGO} = require('../constants');
const DBManager = require('../db-manager');

// TODO: Make it as util function and make more general
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

async function getWordsList(request, response) {
    try {
        let wordsList = await DBManager.getManyDocuments(MONGO.DB_NAME, MONGO.WORDS_COLLECTION);
        shuffleArray(wordsList);
        return response.status(200).json({
            resultCode: RESULT_CODES.SUCCESS,
            resultStatus: RESULT_STATUSES.SUCCESS,
            message: 'Successfully retrieved list of words',
            data: {wordsList},
        });
    } catch (error) {
        console.error('Error retrieving words list: ', error);
        return response.status(500).json({
            resultCode: RESULT_CODES.ERROR,
            resultStatus: RESULT_STATUSES.ERROR,
            message: 'Failed to retrieve words list',
            error: error.message,
        });
    }

}

module.exports = {getWordsList};

const mockWordsList = [
    {
        "type": "adjective",
        "sourceLang": "en",
        "targetLang": "it",
        "sourceWord": "beautiful",
        "targetWord": "bello"
    },
    {
        "type": "adjective",
        "sourceLang": "en",
        "targetLang": "it",
        "sourceWord": "red",
        "targetWord": "rosso"
    },
    {
        "type": "adjective",
        "sourceLang": "en",
        "targetLang": "it",
        "sourceWord": "good",
        "targetWord": "buono"
    },
    {
        "type": "adjective",
        "sourceLang": "en",
        "targetLang": "it",
        "sourceWord": "black",
        "targetWord": "nero"
    }
];