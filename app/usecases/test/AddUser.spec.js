import UserRepository from "../../../external/persistence/UserRepository.js";

test("Check user creation", () => {
  const userRepository = new UserRepository();

  const user = { name: "TestCreation", age: 21 };

  userRepository.addUser(user);

  expect(userRepository.getAllUsers()).toContain(user);
});
