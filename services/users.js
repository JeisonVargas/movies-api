const MongoLib = require('../lib/mongo');
const bcrypt = require('bcrypt');

class UsersService {
  constructor() {
    this.collection = 'users';
    this.mongoDB = new MongoLib();
  }

  async getUser({ email }) {
    const [user] = await this.mongoDB.getAll(this.collection, { email });
    return user;
  }

  async createUser({ user }) {
    const { email, password } = user;

    const validateEmailExists = await this.getUser({ email });
    if (validateEmailExists) {
      throw `"email" is already registered`;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createUserId = await this.mongoDB.create(this.collection, {
      email,
      password: hashedPassword
    });

    return createUserId;
  }
}

module.exports = UsersService;
