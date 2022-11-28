import { MongoClient } from 'mongodb'
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    const eventId = req.query.eventId
    const client = await MongoClient.connect('mongodb+srv://saurabh:saurabh@eventsdb.0cxryy0.mongodb.net/?retryWrites=true&w=majority')

    if (req.method === 'POST') {
        const fetchEmail = req.body.email
        const fetchName = req.body.name
        const fetchComment = req.body.text

        const newCommentObj = {email: fetchEmail, name: fetchName, text: fetchComment }

        // const filePath = path.join(process.cwd(), 'data', 'comment.json')
        // const fileData = fs.readFileSync(filePath)
        // const data = JSON.parse(fileData)
        // data.push(newEmailObj)
        // fs.writeFileSync(filePath, JSON.stringify(data))
        const db = client.db('events')
        await db.collection('events detail').updateOne({ _id : ObjectId(`${eventId}`) },{ $push: { comments: newCommentObj } })
        client.close()
        res.status(200).json({message: 'comment added successfully', comment: newCommentObj.text})

    } else {

        if (req.method === 'GET') {
            
        } 
        const db = client.db('events')
        const eventDetail = await db.collection('events detail').findOne({ _id:  ObjectId(`${eventId}`) } )
        client.close()
        res.status(200).json({eventDetail})
    }
 
}