import { GoogleGenAI } from "@google/genai"
import express from "express"

const chat = express.Router()
chat.use(express.json())
chat.post("/chat", async (req, res) => {
  const { key } = req.body
  const { message } = req.body || "Hello"
  if (!key) {
    res.status(400).json({ statusCode: 400, message: "Missing key Parameter" })
  }
  const ai = new GoogleGenAI({
    apiKey: key
  })
  try {
    const respo = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message
    })
    res.status(200).json({ statusCode: 200, message: respo.text})
  } catch(error) {
    res.status(429).json(error.message)
  }
})
export default chat