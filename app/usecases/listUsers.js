import UserRepository from "../../external/persistence/UserRepository.js";

class ListUser {
  constructor(){
    this.userRepository = new UserRepository()
  }

  execute(){
    return this.userRepository.getAllUsers()
  }
}

export default ListUser