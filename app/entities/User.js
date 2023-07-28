import {v4 as uuidv4} from 'uuid'

class User{
  constructor(name, age){
    this.id = uuidv4();
    this.name = name;
    this.age = age;
    this.cretedAt = new Date()
  }
}


export default User