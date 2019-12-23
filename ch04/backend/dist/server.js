"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const Database_1 = require("./Database");
const RoutingEngine_1 = require("./Routing/RoutingEngine");
class Server {
    constructor(port = 3000, app = express_1.default(), mongo = new Database_1.Mongo(), routingEngine = new RoutingEngine_1.RoutingEngine()) {
        this.port = port;
        this.app = app;
        this.mongo = mongo;
        this.routingEngine = routingEngine;
    }
    WithCorsSupport() {
        this.app.use(cors_1.default());
        return this;
    }
    Start() {
        this.app.use(body_parser_1.default.json({ limit: '100mb' }));
        this.app.use(body_parser_1.default.urlencoded({ limit: '100mb', extended: true }));
        this.mongo.Connect();
        this.router = express_1.default.Router();
        this.AddRouting(this.routingEngine, this.router);
        this.app.use(this.router);
        this.OnStart();
        this.app.listen(this.port, () => console.log(`Express server running on port ${this.port}`));
    }
    OnStart() {
        this.app.get('/', (req, res) => res.send('Hello???'));
    }
}
exports.Server = Server;
