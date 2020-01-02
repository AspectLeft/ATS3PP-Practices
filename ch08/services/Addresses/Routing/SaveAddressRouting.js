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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2ZUFkZHJlc3NSb3V0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2F2ZUFkZHJlc3NSb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQSxtRUFBa0U7QUFDbEU7SUFBQTtJQVFBLENBQUM7SUFQQyxxQ0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLE9BQWdCLEVBQUUsUUFBa0I7WUFDdkQsSUFBTSxNQUFNLEdBQWEsYUFBYyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckQsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxnREFBa0IifQ==