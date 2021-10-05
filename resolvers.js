const friendDatabase = [
  {
    firstName: "Ayaan",
    lastName: "Siddiqui",
    gender: "male",
    email: "moahammedayaan.dev@gmail.com",
  },
]

class Friend {
  constructor(id, { firstName, lastName, gender, email }) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.email = email
  }
}

const resolvers = {
  getFriend: ({ id }) => {
    return new Friend(id, friendDatabase[id - 1])
  },
  createFriend: ({ input }) => {
    const id = require("crypto").randomBytes(10).toString("hex")
    friendDatabase[id] = input
    return new Friend(id, input)
  },
}

export default resolvers
