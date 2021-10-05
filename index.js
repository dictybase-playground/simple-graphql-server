import express from "express"
import schema from "./schema"
import { graphqlHTTP } from "express-graphql"

const app = express()

app.get("/", (req, res) => {
  res.send("GraphQL server")
})

const root = { hello: () => "Hi, I'm Ayaan" }

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
)

const port = 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}: http://localhost:8080/graphql`)
})
