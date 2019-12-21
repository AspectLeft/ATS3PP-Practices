"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor(port = 3000, app = express_1.default()) {
        this.port = port;
        this.app = app;
    }
    WithCorsSupport() {
        this.app.use(cors_1.default());
        return this;
    }
    Start() {
        this.app.use(body_parser_1.default.json({ limit: '100mb' }));
        this.app.use(body_parser_1.default.urlencoded({ limit: '100mb', extended: true }));
        this.OnStart();
        this.app.listen(this.port, () => console.log(`Express server running on port ${this.port}`));
    }
    OnStart() {
        this.app.get('/', (req, res) => res.send('Hello from the server'));
    }
}
exports.Server = Server;
