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
var GetPeopleRouting_1 = require("./Routing/GetPeopleRouting");
var SavePeopleRouting_1 = require("./Routing/SavePeopleRouting");
var PeopleServer = (function (_super) {
    __extends(PeopleServer, _super);
    function PeopleServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PeopleServer.prototype.AddRouting = function (router) {
        this.routingEngine.Add(GetPeopleRouting_1.GetPeopleRouting, router);
        this.routingEngine.Add(SavePeopleRouting_1.SavePeopleRouting, router);
    };
    return PeopleServer;
}(Server_1.Server));
exports.PeopleServer = PeopleServer;
new PeopleServer()
    .WithCorsSupport()
    .WithDatabase().Start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUEwQztBQUMxQywrREFBOEQ7QUFDOUQsaUVBQWdFO0FBRWhFO0lBQWtDLGdDQUFNO0lBQXhDOztJQUtBLENBQUM7SUFKVyxpQ0FBVSxHQUFwQixVQUFxQixNQUFjO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLG1DQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLHFDQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFMRCxDQUFrQyxlQUFNLEdBS3ZDO0FBTFksb0NBQVk7QUFPekIsSUFBSSxZQUFZLEVBQUU7S0FDZixlQUFlLEVBQUU7S0FDakIsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMifQ==