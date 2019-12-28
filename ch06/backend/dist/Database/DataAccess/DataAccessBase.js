"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataAccessBase = (function () {
    function DataAccessBase(model) {
        this.model = model;
    }
    DataAccessBase.prototype.Add = function (item) {
        var _this = this;
        return new Promise(function (callback, error) {
            _this.model.create(item, function (err, result) {
                if (err) {
                    error(err);
                }
                callback(!result);
            });
        });
    };
    DataAccessBase.prototype.GetAll = function (conditions, fields) {
        var _this = this;
        return new Promise(function (callback, error) {
            _this.model.find(conditions, fields, function (err, result) {
                if (err) {
                    error(err);
                }
                if (result) {
                    callback(result);
                }
            });
        });
    };
    return DataAccessBase;
}());
exports.DataAccessBase = DataAccessBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUFjY2Vzc0Jhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9EYXRhYmFzZS9EYXRhQWNjZXNzL0RhdGFBY2Nlc3NCYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFFRSx3QkFBc0IsS0FBWTtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsNEJBQUcsR0FBSCxVQUFJLElBQU87UUFBWCxpQkFTQztRQVJDLE9BQU8sSUFBSSxPQUFPLENBQVUsVUFBQyxRQUFRLEVBQUUsS0FBSztZQUMxQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFZLEVBQUUsTUFBUztnQkFDOUMsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNaO2dCQUNELFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLFVBQW1CLEVBQUUsTUFBZTtRQUEzQyxpQkFXQztRQVZDLE9BQU8sSUFBSSxPQUFPLENBQU0sVUFBQyxRQUFRLEVBQUUsS0FBSztZQUN0QyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQUMsR0FBWSxFQUFFLE1BQVc7Z0JBQzVELElBQUksR0FBRyxFQUFFO29CQUNQLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDWjtnQkFDRCxJQUFJLE1BQU0sRUFBRTtvQkFDVixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2xCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QnFCLHdDQUFjIn0=