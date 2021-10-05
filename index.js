import express from "express"
import schema from "./schema"
import { graphqlHTTP } from "express-graphql"

const app = express()

app.get("/", (req, res) => {
  res.send("GraphQL server")
})

const root = {
  friend: () => {
    return {
      id: 1,
      firstName: "Ayaan",
      lastName: "Siddiqui",
      gender: "male",
      email: [
        {
          email: "john-doe@example.com",
        },
        {
          email: "demo-email@gmail.com",
        },
      ],
    }
  },
  message: () => {
    return {
      message: "Hello",
    }
  },
}

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
