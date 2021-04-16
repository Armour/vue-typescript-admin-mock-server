"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = exports.deleteRole = exports.updateRole = exports.createRole = exports.getRoles = void 0;
const tslib_1 = require("tslib");
const faker_1 = tslib_1.__importDefault(require("faker"));
const routes_1 = require("./routes");
const routes = [...routes_1.constantRoutes, ...routes_1.asyncRoutes];
const roles = [
    {
        key: 'admin',
        name: 'admin',
        description: 'Super Administrator. Have access to view all pages.',
        routes: routes
    },
    {
        key: 'editor',
        name: 'editor',
        description: 'Normal Editor. Can see all pages except permission page',
        routes: routes.filter(i => i.path !== '/permission') // Just a mock
    },
    {
        key: 'visitor',
        name: 'visitor',
        description: 'Just a visitor. Can only see the home page and the document page',
        routes: [{
                path: '',
                redirect: 'dashboard',
                children: [
                    {
                        path: 'dashboard',
                        name: 'Dashboard',
                        meta: { title: 'dashboard', icon: 'dashboard' }
                    }
                ]
            }]
    }
];
const getRoles = (req, res) => {
    return res.json({
        code: 20000,
        data: {
            total: roles.length,
            items: roles
        }
    });
};
exports.getRoles = getRoles;
const createRole = (req, res) => {
    return res.json({
        code: 20000,
        data: {
            key: faker_1.default.datatype.number({ min: 3, max: 10000 })
        }
    });
};
exports.createRole = createRole;
const updateRole = (req, res) => {
    const { role } = req.body;
    return res.json({
        code: 20000,
        data: {
            role
        }
    });
};
exports.updateRole = updateRole;
const deleteRole = (req, res) => {
    return res.json({
        code: 20000
    });
};
exports.deleteRole = deleteRole;
const getRoutes = (req, res) => {
    return res.json({
        code: 20000,
        data: {
            routes
        }
    });
};
exports.getRoutes = getRoutes;
