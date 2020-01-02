"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoutingEngine = (function () {
    function RoutingEngine(routing) {
        if (routing === void 0) { routing = new Array(); }
        this.routing = routing;
    }
    RoutingEngine.prototype.Add = function (routing, route) {
        var routed = new routing();
        routed.AddRoute(route);
        this.routing.push(routed);
    };
    return RoutingEngine;
}());
exports.RoutingEngine = RoutingEngine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGluZ0VuZ2luZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJvdXRpbmdFbmdpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtJQUNFLHVCQUFvQixPQUF5QztRQUF6Qyx3QkFBQSxFQUFBLGNBQXlCLEtBQUssRUFBVztRQUF6QyxZQUFPLEdBQVAsT0FBTyxDQUFrQztJQUM3RCxDQUFDO0lBQ00sMkJBQUcsR0FBVixVQUErQixPQUF1QixFQUFFLEtBQVU7UUFDaEUsSUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM3QixNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksc0NBQWEifQ==