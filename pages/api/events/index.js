import { MongoClient } from 'mongodb'

export default async function handler(req, res) {
    const client = await MongoClient.connect('mongodb+srv://saurabh:saurabh@eventsdb.0cxryy0.mongodb.net/?retryWrites=true&w=majority')
    
    if(req.method === 'GET') {
 
        const db = client.db('events')
        const allEvents = await db.collection('events detail').find().toArray()
        res.status(200).json({allEvents: allEvents})
    }
 
}