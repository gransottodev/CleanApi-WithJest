import UserRepository from "../../external/persistence/UserRepository.js";


class ListUserById{
  constructor(id){
    this.userRepository = new UserRepository()
    this.id = id
  }


  execute(){
    return this.userRepository.getUserById(this.id)
  }
}

export default ListUserById