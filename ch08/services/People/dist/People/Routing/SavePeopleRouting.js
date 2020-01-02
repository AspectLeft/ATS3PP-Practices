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
var PersonService_1 = require("../api/Models/PersonService");
var SavePeopleRouting = (function () {
    function SavePeopleRouting() {
    }
    SavePeopleRouting.prototype.AddRoute = function (route) {
        route.post('/add/', function (request, response) {
            var person = __assign({}, request.body);
            new PersonService_1.PersonService().Save(person);
            response.json(person);
        });
    };
    return SavePeopleRouting;
}());
exports.SavePeopleRouting = SavePeopleRouting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2ZVBlb3BsZVJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9Sb3V0aW5nL1NhdmVQZW9wbGVSb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQSw2REFBNEQ7QUFDNUQ7SUFBQTtJQVFBLENBQUM7SUFQQyxvQ0FBUSxHQUFSLFVBQVMsS0FBVTtRQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLE9BQWdCLEVBQUUsUUFBa0I7WUFDdkQsSUFBTSxNQUFNLEdBQVksYUFBYSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsSUFBSSw2QkFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLDhDQUFpQiJ9