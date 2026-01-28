import express from "express"

import chat from "./routes/chat.js"
import greet from "./routes/greet.js"

const app = express()

app.use(chat)

app.use(greet)

app.use(cors())

app.listen(3000, () => {
  console.log("The server is up.")
})

export default app
