const User = require("../models/user");

const getAllUsers = (request, response) => {
  User.find({})
    .then((data) => {
      response.set(200).set("Content-Type", "application/json").send(data);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

const createUser = (request, response) => {
  const data = request.body;
  User.create(data).then((user) => {
    response.status(201).set("Content-Type", "application/json").send(user);
  });
};

module.exports = { getAllUsers, createUser };
