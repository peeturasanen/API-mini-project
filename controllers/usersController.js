const uuid = require('uuid');
const users = require('../models/users');
  
  // usersController.js
  exports.createUser = (req, res) => {
    const newUser = {
      id: uuid.v4(),
      ...req.body,
    };

    if (!Object.values(newUser).every(Boolean)) {
      return res.status(400).json({ msg: 'Please include all required fields' });
    }
  };
  
  exports.getUser = (req, res) => {
    const found = users.some((user) => user.id === parseInt(req.params.id));

    if (found) {
      res.json(users.filter((user) => user.id === parseInt(req.params.id)));
    } else {
      res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
    }
  };
  
  exports.getAllUsers = (req, res) => {
    res.json(users);
  };

  exports.updateUser = (req, res) => {
    const found = users.some((user) => user.id === parseInt(req.params.id));

    if (found) {
      users.forEach((user, i) => {
        if (user.id === parseInt(req.params.id)) {
          user[i] = { ...user, ...req.body };
          res.json({ msg: 'User updated', user: users[i] });

        }
      });
    } else {
      res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
    }
  };
  
  exports.deleteUser = (req, res) => {
    const found = users.some((user) => user.id === parseInt(req.params.id));

    if (found) {
      const updatedMembers = users.filter((user) => user.id !== parseInt(req.params.id));
      res.json({msg: 'User deleted', users: updatedMembers });
    } else {
      res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
    }
  };
  