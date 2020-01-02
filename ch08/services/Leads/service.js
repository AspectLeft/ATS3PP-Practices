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
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = require("../Common/Server");
var GetLeadsRouting_1 = require("./Routing/GetLeadsRouting");
var SaveLeadsRouting_1 = require("./Routing/SaveLeadsRouting");
var LeadsServer = (function (_super) {
    __extends(LeadsServer, _super);
    function LeadsServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeadsServer.prototype.AddRouting = function (router) {
        this.routingEngine.Add(GetLeadsRouting_1.GetLeadsRouting, router);
        this.routingEngine.Add(SaveLeadsRouting_1.SaveLeadsRouting, router);
    };
    return LeadsServer;
}(Server_1.Server));
exports.LeadsServer = LeadsServer;
new LeadsServer()
    .WithCorsSupport()
    .WithDatabase().Start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQTBDO0FBQzFDLDZEQUE0RDtBQUM1RCwrREFBOEQ7QUFFOUQ7SUFBaUMsK0JBQU07SUFBdkM7O0lBS0EsQ0FBQztJQUpXLGdDQUFVLEdBQXBCLFVBQXFCLE1BQWM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsaUNBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBaUMsZUFBTSxHQUt0QztBQUxZLGtDQUFXO0FBT3hCLElBQUksV0FBVyxFQUFFO0tBQ2QsZUFBZSxFQUFFO0tBQ2pCLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDIn0=