const friendDatabase = []
let counter = 0

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
  friend: ({ id }) => {
    return new Friend(id, friendDatabase[id - 1])
  },
  friends: () => friendDatabase.map((friend, i) => new Friend(i, friend)),
  createFriend: ({ input }) => {
    const id = counter++
    friendDatabase[id] = input
    return new Friend(id, input)
  },
}

export default resolvers
