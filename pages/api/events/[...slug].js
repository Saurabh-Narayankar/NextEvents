import { MongoClient } from 'mongodb'

export default async function handler(req, res) {
    const slug = req.query.slug


    if (req.method === 'GET') {
      const client = await MongoClient.connect(process.env.MONGODB_URI)
      const db = client.db('events')
      const allEvents = await db.collection('events detail').find().toArray()
      client.close()
      res.status(200).json({allevents: allEvents})
    }
}