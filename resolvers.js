const posts = []
let counter = 0

class Post {
  constructor(id, { title, content, published }) {
    this.id = id
    this.title = title
    this.content = content
    this.published = published
  }
}

const resolvers = {
  post: ({ id }) => {
    return posts[id]
  },
  posts: () => posts,
  createPost: ({ input }) => {
    const id = counter++
    const newPost = new Post(id, {
      title: input.title,
      content: input.content,
      published: Date.now().toString(),
    })
    posts[id] = newPost
    return newPost
  },
}

export default resolvers
