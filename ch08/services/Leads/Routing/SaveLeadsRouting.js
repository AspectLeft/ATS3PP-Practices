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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2ZUxlYWRzUm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNhdmVMZWFkc1JvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLHlEQUF5RDtBQUN6RDtJQUFBO0lBUUEsQ0FBQztJQVBDLG1DQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsT0FBZ0IsRUFBRSxRQUFrQjtZQUN2RCxJQUFNLE1BQU0sR0FBVSxhQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxJQUFJLDBCQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksNENBQWdCIn0=