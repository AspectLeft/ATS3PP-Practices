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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQXVFO0FBQ3ZFLDJEQUEwRDtBQUMxRCx5REFBd0Q7QUFDeEQsOENBQXdCO0FBQ3hCLHNEQUFnQztBQUNoQyx3Q0FBMkM7QUFFM0M7SUFDRSxnQkFBb0IsSUFBbUIsRUFBVSxHQUFvQixFQUFZLGFBQWtEO1FBQS9HLHFCQUFBLEVBQUEsV0FBbUI7UUFBVSxvQkFBQSxFQUFBLE1BQVcsaUJBQU8sRUFBRTtRQUFZLDhCQUFBLEVBQUEsb0JBQW1DLDZCQUFhLEVBQUU7UUFBL0csU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBQVksa0JBQWEsR0FBYixhQUFhLENBQXFDO0lBQUcsQ0FBQztJQUVoSSxnQ0FBZSxHQUF0QjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQUksRUFBRSxDQUFDLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sc0JBQUssR0FBWjtRQUFBLGlCQWdCQztRQU5DLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQU0sTUFBTSxHQUFXLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGNBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFnQyxLQUFJLENBQUMsSUFBTSxDQUFDLEVBQXhELENBQXdELENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRVMsMkJBQVUsR0FBcEIsVUFBcUIsTUFBYztJQUVuQyxDQUFDO0lBRU0sNkJBQVksR0FBbkI7UUFDRSxrQkFBUSxDQUFDLGFBQWEsQ0FBQyx5QkFBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVILGFBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDO0FBbkNxQix3QkFBTSJ9