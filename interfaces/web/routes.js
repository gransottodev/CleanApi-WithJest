import express from "express";
import ListUser from "../../app/usecases/listUsers.js";
import ListUserById from "../../app/usecases/listUserById.js";
import AddUser from "../../app/usecases/addUser.js";

const routes = express.Router();

// Return all users
routes.get("/users", (req, res) => {
  const listUser = new ListUser();
  const users = listUser.execute();

  res.send(users);
});

// Return users by id
routes.get("/users/:id", (req, res) => {
  const id = req.params.id;

  const listUserById = new ListUserById(id);
  const userById = listUserById.execute();

  res.send(userById);
});

// Create User
routes.post("/users", (req, res) => {
  const { name, age } = req.body;

  const addUser = new AddUser(name, age);
  const userAdded = addUser.execute();
  res.status(201).send(userAdded);
});

export default routes;
