const router = require("express").Router();

const { getAllUsers, createUser, getUserById, updateUserById, deleteUserById } = require("../controllers/users");

router.get("/users", getAllUsers);
router.post("/users", createUser);
router.get("/users/:user_id", getUserById);
router.patch("/users/:user_id", updateUserById);
router.delete("/users/:user_id", deleteUserById);

module.exports = router;
