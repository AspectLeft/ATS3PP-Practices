"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
class Backend extends server_1.Server {
}
exports.Backend = Backend;
new Backend(3000).WithCorsSupport().Start();
