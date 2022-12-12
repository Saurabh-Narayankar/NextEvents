import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if(req.method === "POST") {
        const title = req.body.title
        const description = req.body.description
        const location = req.body.location
        const date = req.body.date
        const isFeatured = req.body.isFeatured

        const eventObj = { title, description, location, date, isFeatured, comments: [] }

        const client = await MongoClient.connect(process.env.MONGODB_URI)
        const db = client.db('events')
        await db.collection('events detail').insertOne(eventObj)
        client.close()
        res.status(200).json({message: 'event added successfully'})
    }
}