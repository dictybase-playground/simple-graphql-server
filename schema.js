import { buildSchema } from "graphql"

const schema = buildSchema(`
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: String
    email: [Email]!
  }

  type Email {
    email: String
  }

  type Message {
    message: String
  }

  type Query {
    friend: Friend
    message: Message
  }
`)

export default schema
