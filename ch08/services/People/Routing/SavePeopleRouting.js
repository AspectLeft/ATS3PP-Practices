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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2ZVBlb3BsZVJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTYXZlUGVvcGxlUm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsNkRBQTREO0FBQzVEO0lBQUE7SUFRQSxDQUFDO0lBUEMsb0NBQVEsR0FBUixVQUFTLEtBQVU7UUFDakIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxPQUFnQixFQUFFLFFBQWtCO1lBQ3ZELElBQU0sTUFBTSxHQUFZLGFBQWEsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ELElBQUksNkJBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSw4Q0FBaUIifQ==