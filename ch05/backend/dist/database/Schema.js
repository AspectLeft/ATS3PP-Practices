"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
exports.TodoSchema = new mongoose_1.Schema({
    Id: String,
    Title: String,
    Description: String,
    DueDate: Date,
    CreationDate: Date,
    Completed: Boolean,
});
exports.TodoModel = mongoose_1.default.model('todo', exports.TodoSchema, 'todoitems', false);
