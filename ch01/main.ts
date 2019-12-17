import { UnionRangeValidation } from "./union-types"

let validator = new UnionRangeValidation(42, 69);
console.log(validator.IsInRange("55"));
console.log(validator.IsInRange(55));
