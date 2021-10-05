import { buildSchema } from "graphql"

const schema = buildSchema(`
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: String
    email: String
  }

  type Query {
    friend(id: ID): Friend
    friends: [Friend]
  }

  input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: String
    email: String
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
  }
`)

export default schema
