"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const faker_1 = tslib_1.__importDefault(require("faker"));
const transactionList = [];
const transactionCount = 20;
for (let i = 0; i < transactionCount; i++) {
    transactionList.push({
        orderId: faker_1.default.random.uuid(),
        status: faker_1.default.random.arrayElement(['success', 'pending']),
        timestamp: faker_1.default.date.past().getTime(),
        username: faker_1.default.name.findName(),
        price: parseFloat(faker_1.default.finance.amount(1000, 15000, 2))
    });
}
exports.getTransactions = (req, res) => {
    return res.json({
        code: 20000,
        data: {
            total: transactionList.length,
            items: transactionList
        }
    });
};
//# sourceMappingURL=transactions.js.map