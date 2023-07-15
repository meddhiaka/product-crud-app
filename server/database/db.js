import mongoose, { mongo } from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

export default async function connectDB() {
    try {
        const C = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`mongodb connected ^-^, host: ${C.connection.host}`)
    }
    catch (error) {
        console.log(`error: ${error.message}`)
    }
}