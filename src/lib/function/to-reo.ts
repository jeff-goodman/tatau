import { numbers, ones } from '../constants';
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
    if (input > 0 ) {
        input = Math.floor(input);
    } else {
        input = Math.ceil(input);
    }

    return toReoRaw(input).trim();
}

function toReoRaw(input: number): string {
    if (input < 0) {
        return `kore ${toReo(-input)}`;
    }
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
    if (input < 1_000_000_000_000) {
        return converter(input, 1_000_000_000);
    }
    return input.toString();
}

function multiplier(input: number, excludeOne: boolean = false): string {
    if (excludeOne) {
        return input === 1 ? '' : toReo(input);
    } else {
        return input === 1 ? 'kotahi' : toReo(input);
    }  
}

function converter(input: number, denominator: number): string {
    const quotient = Math.floor(input / denominator);
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
