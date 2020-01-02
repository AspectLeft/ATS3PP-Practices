"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var AddressesService_1 = require("../api/Models/AddressesService");
var SaveAddressRouting = (function () {
    function SaveAddressRouting() {
    }
    SaveAddressRouting.prototype.AddRoute = function (route) {
        route.post('/add/', function (request, response) {
            var person = __assign({}, request.body);
            new AddressesService_1.AddressesService().Save(person);
            response.json(person);
        });
    };
    return SaveAddressRouting;
}());
exports.SaveAddressRouting = SaveAddressRouting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2ZUFkZHJlc3NSb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vUm91dGluZy9TYXZlQWRkcmVzc1JvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLG1FQUFrRTtBQUNsRTtJQUFBO0lBUUEsQ0FBQztJQVBDLHFDQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsT0FBZ0IsRUFBRSxRQUFrQjtZQUN2RCxJQUFNLE1BQU0sR0FBYSxhQUFjLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRCxJQUFJLG1DQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLGdEQUFrQiJ9