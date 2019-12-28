"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var DataAccessBase_1 = require("./DataAccessBase");
exports.MessageSchema = new mongoose_1.Schema({
    room: String,
    messageText: String,
    received: Date
});
exports.MessageModel = mongoose_1.default.model('message', exports.MessageSchema, 'messages', false);
var MessageDataAccess = (function (_super) {
    __extends(MessageDataAccess, _super);
    function MessageDataAccess() {
        return _super.call(this, exports.MessageModel) || this;
    }
    return MessageDataAccess;
}(DataAccessBase_1.DataAccessBase));
exports.MessageDataAccess = MessageDataAccess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9EYXRhYmFzZS9EYXRhQWNjZXNzL01lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBMEM7QUFDMUMsbURBQWdEO0FBUW5DLFFBQUEsYUFBYSxHQUFHLElBQUksaUJBQU0sQ0FBQztJQUN0QyxJQUFJLEVBQUUsTUFBTTtJQUNaLFdBQVcsRUFBRSxNQUFNO0lBQ25CLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQyxDQUFDO0FBRVUsUUFBQSxZQUFZLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQWlCLFNBQVMsRUFBRSxxQkFBYSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUV4RztJQUF1QyxxQ0FBOEI7SUFDbkU7ZUFDRSxrQkFBTSxvQkFBWSxDQUFDO0lBQ3JCLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFKRCxDQUF1QywrQkFBYyxHQUlwRDtBQUpZLDhDQUFpQiJ9