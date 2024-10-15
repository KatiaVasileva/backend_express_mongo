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
  User.create(data)
    .then((user) => {
      response.status(201).set("Content-Type", "application/json").send(user);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

const getUserById = (request, response) => {
  const { user_id } = request.params;
  User.findById(user_id)
    .then((user) => {
      response.status(200).set("Content-Type", "application/json").send(user);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

const updateUserById = (request, response) => {
  const { user_id } = request.params;
  const data = request.body;
  User.findByIdAndUpdate(user_id, data, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      response.status(201).set("Content-Type", "application/json").send(user);
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

const deleteUserById = (request, response) => {
  const { user_id } = request.params;
  User.findByIdAndDelete(user_id)
    .then((user) => {
      response.status(200).send("Done");
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
};

module.exports = { getAllUsers, createUser, getUserById, updateUserById, deleteUserById};
