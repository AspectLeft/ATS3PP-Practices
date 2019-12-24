"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Mongo {
    constructor(url = "mongodb://localhost:27017/ch05") {
        this.url = url;
    }
    Connect() {
        mongoose_1.default.connect(this.url, { useNewUrlParser: true }, (e) => {
            if (e) {
                console.log(`Unable to connect ` + e);
            }
            else {
                console.log(`Connected to the database`);
            }
        });
    }
}
exports.Mongo = Mongo;
