"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const faker_1 = tslib_1.__importDefault(require("faker"));
const userList = [
    {
        id: 0,
        username: 'admin',
        password: 'any',
        name: 'Super Admin',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        introduction: 'I am a super administrator',
        email: 'admin@test.com',
        phone: '1234567890',
        roles: ['admin'],
    },
    {
        id: 1,
        username: 'editor',
        password: 'any',
        name: 'Normal Editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        introduction: 'I am an editor',
        email: 'editor@test.com',
        phone: '1234567890',
        roles: ['editor'],
    }
];
const userCount = 100;
for (let i = 2; i < userCount; i++) {
    userList.push({
        id: i,
        username: 'user_' + faker_1.default.random.alphaNumeric(9),
        password: faker_1.default.random.alphaNumeric(20),
        name: faker_1.default.name.findName(),
        avatar: faker_1.default.image.imageUrl(),
        introduction: faker_1.default.lorem.sentence(20),
        email: faker_1.default.internet.email(),
        phone: faker_1.default.phone.phoneNumber(),
        roles: ['visitor']
    });
}
exports.register = (req, res) => {
    return res.json({
        code: 20000
    });
};
exports.login = (req, res) => {
    const { username } = req.body;
    for (const user of userList) {
        if (user.username === username) {
            return res.json({
                code: 20000,
                data: {
                    accessToken: username + '-token'
                }
            });
        }
    }
    return res.status(400).json({
        code: 50004,
        messaege: 'Invalid User'
    });
};
exports.logout = (req, res) => {
    return res.json({
        code: 20000
    });
};
exports.getUsers = (req, res) => {
    const { name } = req.query;
    const users = userList.filter(user => {
        const lowerCaseName = user.name.toLowerCase();
        return !(name && lowerCaseName.indexOf(name.toLowerCase()) < 0);
    });
    return res.json({
        code: 20000,
        data: {
            items: users
        }
    });
};
exports.getUserInfo = (req, res) => {
    // Mock data based on access token
    return res.json({
        code: 20000,
        data: {
            user: req.header('X-Access-Token') == 'admin-token' ? userList[0] : userList[1]
        }
    });
};
exports.getUserByName = (req, res) => {
    const { username } = req.params;
    for (const user of userList) {
        if (user.username === username) {
            return res.json({
                code: 20000,
                data: {
                    user
                }
            });
        }
    }
    return res.status(400).json({
        code: 50004,
        messaege: 'Invalid User'
    });
};
exports.updateUser = (req, res) => {
    const { username } = req.params;
    const { user } = req.body;
    for (const v of userList) {
        if (v.username === username) {
            return res.json({
                code: 20000,
                data: {
                    user
                }
            });
        }
    }
    return res.status(400).json({
        code: 50004,
        messaege: 'Invalid User'
    });
};
exports.deleteUser = (req, res) => {
    return res.json({
        code: 20000
    });
};
