const userService = require("../services/userService");

class UserController {
    async getUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();
            res.json({ users });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
