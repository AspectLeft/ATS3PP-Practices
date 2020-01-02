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
var LeadService_1 = require("../api/Models/LeadService");
var SaveLeadsRouting = (function () {
    function SaveLeadsRouting() {
    }
    SaveLeadsRouting.prototype.AddRoute = function (route) {
        route.post('/add/', function (request, response) {
            var person = __assign({}, request.body);
            new LeadService_1.LeadsService().Save(person);
            response.json(person);
        });
    };
    return SaveLeadsRouting;
}());
exports.SaveLeadsRouting = SaveLeadsRouting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2ZUxlYWRzUm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1JvdXRpbmcvU2F2ZUxlYWRzUm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EseURBQXlEO0FBQ3pEO0lBQUE7SUFRQSxDQUFDO0lBUEMsbUNBQVEsR0FBUixVQUFTLEtBQVU7UUFDakIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxPQUFnQixFQUFFLFFBQWtCO1lBQ3ZELElBQU0sTUFBTSxHQUFVLGFBQVcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLElBQUksMEJBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSw0Q0FBZ0IifQ==