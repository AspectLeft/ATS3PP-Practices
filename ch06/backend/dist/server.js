"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Database_1 = require("./Database/Database");
var Types_1 = require("./Database/Types");
var socket = require("socket.io");
var Messages_1 = require("./Database/DataAccess/Messages");
var SocketServer = (function () {
    function SocketServer(messageDataAccess) {
        if (messageDataAccess === void 0) { messageDataAccess = new Messages_1.MessageDataAccess(); }
        this.messageDataAccess = messageDataAccess;
    }
    SocketServer.prototype.Start = function () {
        this.OnStarted();
    };
    SocketServer.prototype.OnStarted = function () {
        var appSocket = socket(3000);
        this.OnConnect(appSocket);
    };
    SocketServer.prototype.OnConnect = function (io) {
        var _this = this;
        io.on('connection', function (socket) {
            var lastRoom = '';
            socket.on('joinRoom', function (room) {
                if (lastRoom !== '') {
                    socket.leave(lastRoom);
                }
                if (room !== '') {
                    socket.join(room);
                }
                _this.messageDataAccess.GetAll({ room: room }, { messageText: 1, _id: 0 }).then(function (msgs) {
                    socket.emit('allMessages', msgs);
                });
                lastRoom = room;
            });
            socket.on('message', function (msg) {
                _this.WriteMessage(io, msg, lastRoom);
            });
            socket.on('loggedOn', function (msg) {
                io.sockets.in('secret').emit('userLogOn', { user: msg, time: new Date() });
            });
        });
    };
    SocketServer.prototype.WriteMessage = function (io, message, room) {
        this.SaveToDatabase(message, room).then(function () {
            if (room !== '') {
                io.sockets.in(room).emit('message', message);
                return;
            }
            io.emit('message', message);
        });
    };
    SocketServer.prototype.SaveToDatabase = function (message, room) {
        return __awaiter(this, void 0, void 0, function () {
            var model, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        model = {
                            messageText: message,
                            received: new Date(),
                            room: room
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, this.messageDataAccess.Add(model)];
                    case 2:
                        _a.sent();
                        return [3, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log("Unable to save " + message);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    SocketServer = __decorate([
        Database_1.Mongo(Types_1.SecuredDatabase.connection)
    ], SocketServer);
    return SocketServer;
}());
exports.SocketServer = SocketServer;
new SocketServer().Start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBDO0FBQzFDLDBDQUFpRDtBQUNqRCxrQ0FBcUM7QUFDckMsMkRBQWlGO0FBR2pGO0lBQ0Usc0JBQW9CLGlCQUE4RDtRQUE5RCxrQ0FBQSxFQUFBLHdCQUEyQyw0QkFBaUIsRUFBRTtRQUE5RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTZDO0lBQUcsQ0FBQztJQUMvRSw0QkFBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDUyxnQ0FBUyxHQUFuQjtRQUNJLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTyxnQ0FBUyxHQUFqQixVQUFrQixFQUFpQjtRQUFuQyxpQkF3QkM7UUF2QkMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBQyxNQUFXO1lBQzlCLElBQUksUUFBUSxHQUFXLEVBQUUsQ0FBQztZQUMxQixNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFDLElBQVk7Z0JBQ2pDLElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtvQkFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDeEI7Z0JBQ0QsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO29CQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ25CO2dCQUNELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLEVBQUUsRUFBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQWU7b0JBQ3pGLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFXO2dCQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFDLEdBQVE7Z0JBQzdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUM3RSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLG1DQUFZLEdBQXBCLFVBQXFCLEVBQWlCLEVBQUUsT0FBZSxFQUFFLElBQVk7UUFDbkUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3RDLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtnQkFDZixFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxPQUFPO2FBQ1I7WUFDRCxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFYSxxQ0FBYyxHQUE1QixVQUE2QixPQUFlLEVBQUUsSUFBWTs7Ozs7O3dCQUNsRCxLQUFLLEdBQW1DOzRCQUM1QyxXQUFXLEVBQUUsT0FBTzs0QkFDcEIsUUFBUSxFQUFFLElBQUksSUFBSSxFQUFFOzRCQUNwQixJQUFJLEVBQUUsSUFBSTt5QkFDWCxDQUFDOzs7O3dCQUVBLFdBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXZDLFNBQXVDLENBQUM7Ozs7d0JBRXhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQWtCLE9BQVMsQ0FBQyxDQUFDOzs7Ozs7S0FFNUM7SUF6RFUsWUFBWTtRQUR4QixnQkFBSyxDQUFDLHVCQUFlLENBQUMsVUFBVSxDQUFDO09BQ3JCLFlBQVksQ0EwRHhCO0lBQUQsbUJBQUM7Q0FBQSxBQTFERCxJQTBEQztBQTFEWSxvQ0FBWTtBQTREekIsSUFBSSxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyJ9