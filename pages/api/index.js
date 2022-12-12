// import fs from 'fs'
// import path from 'path'
import { MongoClient } from "mongodb"

export default async function handler(req, res) {

    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db('events')

    if (req.method === 'POST') {
        const fetchEmail = req.body
        await db.collection('emails').insertOne({email: fetchEmail})
        client.close()
        res.status(200).json({email: 'signed up'})
    }

    if (req.method === 'GET') {
        const featuredEvents = await db.collection('events detail').find({ isFeatured: "true" }).toArray()
        client.close()
        res.status(200).json({filteredEvents: featuredEvents})
    }
  }