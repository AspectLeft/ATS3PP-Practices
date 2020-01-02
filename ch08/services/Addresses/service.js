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
var SaveAddressRouting_1 = require("./Routing/SaveAddressRouting");
var GetAddressRouting_1 = require("./Routing/GetAddressRouting");
var AddressesServer = (function (_super) {
    __extends(AddressesServer, _super);
    function AddressesServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddressesServer.prototype.AddRouting = function (router) {
        this.routingEngine.Add(GetAddressRouting_1.GetAddressRouting, router);
        this.routingEngine.Add(SaveAddressRouting_1.SaveAddressRouting, router);
    };
    return AddressesServer;
}(Server_1.Server));
exports.AddressesServer = AddressesServer;
new AddressesServer()
    .WithCorsSupport()
    .WithDatabase().Start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkNBQTBDO0FBQzFDLG1FQUFrRTtBQUNsRSxpRUFBZ0U7QUFFaEU7SUFBcUMsbUNBQU07SUFBM0M7O0lBS0EsQ0FBQztJQUpXLG9DQUFVLEdBQXBCLFVBQXFCLE1BQWM7UUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMscUNBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsdUNBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQUxELENBQXFDLGVBQU0sR0FLMUM7QUFMWSwwQ0FBZTtBQU81QixJQUFJLGVBQWUsRUFBRTtLQUNsQixlQUFlLEVBQUU7S0FDakIsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMifQ==