import cors from "cors"
import express from "express"
import chat from "./routes/chat"

const app = express()
app.use(chat)
app.use(cors())

app.listen(3000, () => console.log("The Server is up."))
