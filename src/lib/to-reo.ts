import { billion, hundred, million, ones, ten, thousand } from './constants';

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
        const tens = Math.floor(input / 10);
        const ones = input % 10;
        if (ones === 0) {
            return `${multiplier(tens, true)} ${ten}`;
        }
        return `${multiplier(tens, true)} ${ten} mā ${toReo(ones)}`;
    }
    if (input < 1_000) {
        const hundreds = Math.floor(input / 100);
        const tens = input % 100;
        if (tens === 0) {
            return `${multiplier(hundreds)} ${hundred}`;
        }
        if (tens < 10) {
            return `${multiplier(hundreds)} ${hundred} mā ${toReo(tens)}`;
        }
        return `${multiplier(hundreds)} ${hundred} e ${toReo(tens)}`;
    }
    if (input < 1_000_000) {
        const thousands = Math.floor(input / 1_000);
        const hundreds = input % 1_000;
        if (hundreds === 0) {
            return `${multiplier(thousands)} ${thousand}`;
        }
        if (hundreds < 10) {
            return `${multiplier(thousands)} ${thousand} mā ${toReo(hundreds)}`;
        }
        return `${multiplier(thousands)} ${thousand} e ${toReo(hundreds)}`;
    }
    if (input < 1_000_000_000) {
        const millions = Math.floor(input / 1_000_000);
        const thousands = input % 1_000_000;
        if (thousands === 0) {
            return `${multiplier(millions)} ${million}`;
        }
        if (thousands < 10) {
            return `${multiplier(millions)} ${million} mā ${toReo(thousands)}`;
        }
        return `${multiplier(millions)} ${million} e ${toReo(thousands)}`;
    }
    if (input < 1_000_000_000_000) {
        const billions = Math.floor(input / 1_000_000_000);
        const millions = input % 1_000_000_000;
        if (millions === 0) {
            return `${multiplier(billions)} ${billion}`;
        }
        if (millions < 10) {
            return `${multiplier(billions)} ${billion} mā ${toReo(millions)}`;
        }
        return `${multiplier(billions)} ${billion} e ${toReo(millions)}`;
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
