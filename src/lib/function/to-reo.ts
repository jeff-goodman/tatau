import { minInvalidInput, numbers, ones } from '../constants';
import { TatauOptions } from '../options';

export function getPrefix(input: number, options: TatauOptions): string {

    if(!options.ordinalOutput || input < 1) {
        return '';
    } else if (input < 10) {
        return 'tua';
    } else {
        return 'te ';
    }
}


export function toReo(input: number): string {
    // Stryker disable next-line EqualityOperator: The <= mutant results in an equivalent mutant
    if (input > 0 ) {
        input = Math.floor(input);
    } else {
        input = Math.ceil(input);
    }

    return toReoRaw(input).trim();
}

function toReoRaw(input: number): string {
    // Stryker disable ConditionalExpression: if (false) or if(true) mutants in this section result in circular loop timeouts
    // Stryker disable next-line EqualityOperator,ArithmeticOperator: /-1 is equivalent, < is equivalent
    if (input >= minInvalidInput || input <= minInvalidInput * -1) {
        return input.toString();
    }
    if (input < 0) {
        // Stryker disable next-line UnaryOperator: +input results in circular loop timeout
        return `kore ${toReo(-input)}`;
    }
    // Stryker disable EqualityOperator,BlockStatement: circular loop timeouts
    if (input < 10) {
        return ones[input];
    }
    if (input < 100) {
        return converter(input, 10);
    }
    if (input < 1_000) {
        return converter(input, 100);
    }
    if (input < 1_000_000) {
        return converter(input, 1_000);
    }
    if (input < 1_000_000_000) {
        return converter(input, 1_000_000);
    }
    // Stryker disable next-line EqualityOperator: The <= mutant results in an equivalent mutant
    if (input < 1_000_000_000_000) {
        return converter(input, 1_000_000_000);
    }
    /* c8 ignore next 3 : lines are unreachable*/
    return input.toString();
    // Stryker restore ConditionalExpression,EqualityOperator,BlockStatement
}

export function multiplier(input: number, excludeOne: boolean = false): string {
    if (excludeOne) {
        return input === 1 ? '' : toReo(input);
    } else {
        return input === 1 ? 'kotahi' : toReo(input);
    }  
}

function converter(input: number, denominator: number): string {
    const quotient = Math.floor(input / denominator);
    // Stryker disable next-line ArithmeticOperator: Results in circular loop timeout
    const remainder = input % denominator;
    const excludeOne = denominator === 10;
    if (remainder === 0) {
        return `${multiplier(quotient, excludeOne)} ${numbers[denominator]}`;
    }
    if (remainder < 10) {
        return `${multiplier(quotient, excludeOne)} ${numbers[denominator]} mā ${toReo(remainder)}`;
    }
    return `${multiplier(quotient, excludeOne)} ${numbers[denominator]} e ${toReo(remainder)}`;
}
