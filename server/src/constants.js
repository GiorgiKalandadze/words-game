const RESULT_CODES = {
    SUCCESS: 0,
    ERROR: -1,
    WARNING: 1,
};

const RESULT_STATUSES = {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    WARNING: 'WARNING',
};


const ENVIRONMENTS = {
    LOCALHOST: 'LOCALHOST',
    DEVELOPMENT: 'DEVELOPMENT',
    PRODUCTION: 'PRODUCTION',
};

const MONGO = {
    DB_NAME: 'backend-database',
    WORDS_COLLECTION: 'words-italian',
}

module.exports = {
    RESULT_CODES, RESULT_STATUSES, ENVIRONMENTS, MONGO
};