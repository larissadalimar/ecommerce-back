import MongoClient from 'mongodb'

const mongoClient = new MongoClient(process.env.MONGO_URI)

try {
    await mongoClient.connect()

} catch (error) {
    console.log(error)
}

const db = mongoClient.db("wine-drop")