const express = require('express');
const { createUser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/adminController');
const auth = require('../middlewares/auth');

const adminRouter = express.Router();

// route: /admin/users
adminRouter.post('/users', createUser);
adminRouter.get('/users', auth.isAuthenticated, auth.allowRoles(['admin']), getUsers);
adminRouter.get('/users/:id', getUser);
adminRouter.put('/users/:id', updateUser);
adminRouter.delete('/users/:id', deleteUser);

// route: /admin/posts

module.exports = adminRouter;