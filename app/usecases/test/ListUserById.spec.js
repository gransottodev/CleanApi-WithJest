import UserRepository from "../../../external/persistence/UserRepository.js";

test("Returns user by id", () => {
  const id = "85fsda575218"; // id for fixed user
  const userRepository = new UserRepository();
  const getUser = userRepository.getUserById(id);

  expect(getUser.id).toEqual(id);
});
