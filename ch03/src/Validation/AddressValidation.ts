import {IValidation} from "./IValidation";
import {IPersonState} from "../State";
import {MinLengthValidator} from "../Validators/MinLengthValidator";
import {RegularExpressionValidator} from "../Validators/RegularExpressionValidator";

export class AddressValidation implements IValidation{
    private readonly minLengthValidator: MinLengthValidator = new MinLengthValidator(5);
    private readonly zipCodeValidator: RegularExpressionValidator
        = new RegularExpressionValidator("^\\d{5}(?:-\\d{4})?$");

    Validate(state: IPersonState, errors: string[]): void {
        if (!this.minLengthValidator.IsValid(state.Address1)) {
            errors.push("Address 1 must be greater than 5 characters");
        }
        if (!this.minLengthValidator.IsValid(state.Town)) {
            errors.push("Town must be greater than 5 characters");
        }
        if (!this.minLengthValidator.IsValid(state.County)) {
            errors.push("County must be greater than 5 characters");
        }
        if (!this.zipCodeValidator.IsValid(state.Postcode)) {
            errors.push("The postal/zip code is invalid");
        }
    }

}
