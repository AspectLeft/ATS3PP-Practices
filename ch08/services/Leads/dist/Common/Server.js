"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Environment_1 = require("./Configuration/Environment");
var RoutingEngine_1 = require("./Routing/RoutingEngine");
var cors_1 = __importDefault(require("cors"));
var firebase_1 = __importDefault(require("firebase"));
var bodyParser = require("body-parser");
var Server = (function () {
    function Server(port, app, routingEngine) {
        if (port === void 0) { port = 3000; }
        if (app === void 0) { app = express_1.default(); }
        if (routingEngine === void 0) { routingEngine = new RoutingEngine_1.RoutingEngine(); }
        this.port = port;
        this.app = app;
        this.routingEngine = routingEngine;
    }
    Server.prototype.WithCorsSupport = function () {
        this.app.use(cors_1.default());
        return this;
    };
    Server.prototype.Start = function () {
        var _this = this;
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        var router = express_1.default.Router();
        this.AddRouting(router);
        this.app.use(router);
        this.app.listen(this.port, function () { return console.log("logged onto people server at " + _this.port); });
    };
    Server.prototype.AddRouting = function (router) {
    };
    Server.prototype.WithDatabase = function () {
        firebase_1.default.initializeApp(Environment_1.Environment.fireBase);
        return this;
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQ29tbW9uL1NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUF1RTtBQUN2RSwyREFBMEQ7QUFDMUQseURBQXdEO0FBQ3hELDhDQUF3QjtBQUN4QixzREFBZ0M7QUFDaEMsd0NBQTJDO0FBRTNDO0lBQ0UsZ0JBQW9CLElBQW1CLEVBQVUsR0FBb0IsRUFBWSxhQUFrRDtRQUEvRyxxQkFBQSxFQUFBLFdBQW1CO1FBQVUsb0JBQUEsRUFBQSxNQUFXLGlCQUFPLEVBQUU7UUFBWSw4QkFBQSxFQUFBLG9CQUFtQyw2QkFBYSxFQUFFO1FBQS9HLFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFpQjtRQUFZLGtCQUFhLEdBQWIsYUFBYSxDQUFxQztJQUFHLENBQUM7SUFFaEksZ0NBQWUsR0FBdEI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLHNCQUFLLEdBQVo7UUFBQSxpQkFnQkM7UUFOQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFNLE1BQU0sR0FBVyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxjQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBZ0MsS0FBSSxDQUFDLElBQU0sQ0FBQyxFQUF4RCxDQUF3RCxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVTLDJCQUFVLEdBQXBCLFVBQXFCLE1BQWM7SUFFbkMsQ0FBQztJQUVNLDZCQUFZLEdBQW5CO1FBQ0Usa0JBQVEsQ0FBQyxhQUFhLENBQUMseUJBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFSCxhQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQztBQW5DcUIsd0JBQU0ifQ==