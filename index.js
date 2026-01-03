import cors from "cors"
import express from "express"
import chat from "./routes/chat"

const app = express()
app.use(chat)
app.use(cors())

export default app