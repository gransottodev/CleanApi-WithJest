import UserRepository from "../../../external/persistence/UserRepository.js";

test("Returns all users", () => {
  const userRepository = new UserRepository();

  const user1 = { name: "Test1", age: 28 };
  const user2 = { name: "Test2", age: 38 };
  const user3 = { name: "Test3", age: 18 };

  userRepository.addUser(user1);
  userRepository.addUser(user2);
  userRepository.addUser(user3);

  const allUsers = userRepository.getAllUsers();

  expect(allUsers).toContain(user1);
  expect(allUsers).toContain(user2);
  expect(allUsers).toContain(user3);

  expect(allUsers.length).toBe(4); // 1 fixed user, 3 of this test
});
