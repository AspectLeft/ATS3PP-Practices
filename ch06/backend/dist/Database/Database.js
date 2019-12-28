"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
function Mongo(connection) {
    return function (constructor) {
        mongoose_1.default.connect(connection, { useNewUrlParser: true }, function (e) {
            if (e) {
                console.log("Unable to connect " + e);
            }
            else {
                console.log("Connected to the database");
            }
        });
    };
}
exports.Mongo = Mongo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9EYXRhYmFzZS9EYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUFpRDtBQUVqRCxTQUFnQixLQUFLLENBQUMsVUFBa0I7SUFDdEMsT0FBTyxVQUFVLFdBQXFCO1FBQ3BDLGtCQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUMsRUFBRSxVQUFDLENBQVM7WUFDL0QsSUFBSSxDQUFDLEVBQUU7Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDMUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQTtBQUNILENBQUM7QUFWRCxzQkFVQyJ9