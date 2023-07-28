const users = [{
  id: '85fsda575218',
  name: "Default User",
  age: 21,
}]


class UserRepository{
  constructor(){

  }

  getAllUsers(){
    return users
  }

  getUserById(id){
    return users.find(user => user.id == id ) || null
  }

  addUser(user){
    users.push(user)
    return user
  }

}

export default UserRepository