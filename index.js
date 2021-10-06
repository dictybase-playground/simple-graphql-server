import express from "express"
import schema from "./schema"
import { graphqlHTTP } from "express-graphql"
import resolvers from "./resolvers"
import cors from "cors"

const app = express()

app.use(cors())

app.get("/", (_, res) => {
  res.redirect("/graphql")
})

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  }),
)

const port = 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}: http://localhost:8080/graphql`)
})
