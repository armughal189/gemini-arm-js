import cors from "cors"
import express from "express"
import chat from "./routes/chat.js"

const app = express()
app.use(chat)
app.use(cors())

export default app