import UserRepository from "../../external/persistence/UserRepository.js";
import User from "../entities/User.js";


class AddUser{
  constructor(name, age){
    this.userRepository = new UserRepository()
    this.name = name
    this.age = age
  }

  execute(){
    const user = new User(this.name, this.age)
    return this.userRepository.addUser(user)
  }
}

export default AddUser