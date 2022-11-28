import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    await mongoClient.connect()

} catch (error) {
    console.log(error)
}

const db = mongoClient.db("wine-drop");

export const usersCollection = db.collection("users");

export const sessionsCollection = db.collection("sessions");

export const productsCollection = db.collection("products");

export const cartsCollection = db.collection("carts");

export const purchasesCollection = db.collection("purchases");
