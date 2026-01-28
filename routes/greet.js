import express from "express"

const greet = express.Router()
greet.use(express.json())
greet.post("/greet", (req, res) => {
  const { name } = req.body || "Qaraidar"
  res.status(200).json({ statusCode: 200, message: `Hello ${name}!`})
})
export default greet
