class DBManager {
    static setClient(client) {
        DBManager.client = client;
    }

    static getClient() {
        return DBManager.client;
    }

    static async listAllDatabases() {
        try {
            const dbList = await DBManager.client.db().admin().listDatabases();
            console.log("Databases:");
            console.log(dbList);
            return dbList;
        } catch (error) {
            console.error(`Error retrieving databases: ${error}`);
            throw error;
        }
    }

    static async listAllCollections(databaseName) {
        try {
            const collectionsList = await DBManager.client.db(databaseName).listCollections().toArray();
            console.log(`Collections of ${databaseName}:`);
            console.log(collectionsList);
            return collectionsList;
        } catch (error) {
            console.error(`Error retrieving collections: ${error}`);
            throw error;
        }
    }


    static async dropCollection(dbName, collectionName) {
        try {
            await DBManager.client.db(dbName).collection(collectionName).drop();
        } catch (error) {
            console.error(`Error dropping collection '${collectionName}': ${error}`);
            throw error;
        }
    }


    static async insertDocument(dbName, collectionName, newDocument) {
        try {
            const result = await DBManager.client.db(dbName).collection(collectionName).insertOne(newDocument);
            console.log(`Insert one document result: `, result);
            return result;
        } catch (error) {
            console.error(`Error inserting document in collection '${collectionName}': ${error}`);
            throw error;
        }
    }

    static async insertManyDocuments(dbName, collectionName, newDocumentsList) {
        try {
            const result = await DBManager.client.db(dbName).collection(collectionName).insertMany(newDocumentsList);
            console.log(`Insert many documents result: `, result);
            return result;
        } catch (error) {
            console.error(`Error inserting many document in collection '${collectionName}': ${error}`);
            throw error;
        }
    }

    static async getManyDocuments(dbName, collectionName, filter = {}, skip = 0, limit = 20) {
        try {
            const cursor = await DBManager.client.db(dbName).collection(collectionName).find(filter).skip(skip).limit(limit);
            return cursor.toArray();
        } catch (error) {
            console.error(`Error getting documents from collection '${collectionName}': ${error}`);
            throw error;
        }
    }

    static async getDocument(dbName, collectionName, filter) {
        try {
            return await DBManager.client.db(dbName).collection(collectionName).findOne(filter);
        } catch (error) {
            console.error(`Error getting document from collection '${collectionName}': ${error}`);
            throw error;
        }
    }

    static async updateDocument(dbName, collectionName, filter, newDocument) {
        try {
            const result = await DBManager.client.db(dbName).collection(collectionName).updateOne(filter, {$set: newDocument});
            console.log(`Updated: `, result);
            return result;
        } catch (error) {
            console.error(`Error getting updating document in collection '${collectionName}': ${error}`);
            throw error;
        }
    }

    static async removeDocument(dbName, collectionName, filter) {
        try {
            const result = await DBManager.client.db(dbName).collection(collectionName).deleteOne(filter);
            console.log(`Removed: `, result);
            return result;
        } catch (error) {
            console.error(`Error removing document from collection '${collectionName}': ${error}`);
            throw error;
        }
    }

    static async getCountOfDocuments(dbName, collectionName, filter) {
        try {
            return await DBManager.client.db(dbName).collection(collectionName).countDocuments();
        } catch (error) {
            console.error(`Error getting count of documents in collection '${collectionName}': ${error}`);
            throw error;
        }
    }
}

module.exports = DBManager;