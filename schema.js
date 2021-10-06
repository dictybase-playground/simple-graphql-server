import { buildSchema } from "graphql"

const schema = buildSchema(`
  type Post {
    id: ID
    title: String
    content: String
    published: String
  }

  type Query {
    post(id: ID): Post
    posts: [Post]
  }

  input PostInput {
    id: ID
    title: String
    content: String
  }

  type Mutation {
    createPost(input: PostInput): Post
  }
`)

export default schema
