import {IValidator} from "./IValidator";
import {StringOrNull} from "../Types";

export class MinLengthValidator implements IValidator<StringOrNull> {
    constructor(private minLength: number) {}

    IsValid(input: StringOrNull): boolean {
        if (!input) {
            return false;
        }
        return input.length >= this.minLength;
    }

}
