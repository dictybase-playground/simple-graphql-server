import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("GraphQL server")
})

const port = 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}: http://localhost:8080`)
})
