class RangeValidationBase {
    constructor(private start: number, private end: number) {}

    protected RangeCheck(value: number): boolean {
        return value >= this.start && value <= this.end;
    }

    protected GetNumber(value: string): number {
        return Number(value).valueOf();
    }
}

export class UnionRangeValidation extends RangeValidationBase {
    IsInRange(value: string | number): boolean {
        if (typeof value === 'number') {
            return this.RangeCheck(value);
        }
        return this.RangeCheck(this.GetNumber(value));
    }
}
