
export function tatau(input: number, ordinal?: boolean): string;
export function tatau(input: string, ordinal?: boolean): number;
export function tatau(input: number | string, ordinal: boolean = false): number | string {
    if (ordinal) {
        throw new Error('Ordinal numbers not yet implemented');
    }
    
    if (typeof input === 'number') {
        return toReo(input);
    } else if (typeof input === 'string') {
        return toNumber(input);
    } else {
        throw new Error('Invalid input type');
    }
}

export function toReo(input: number): string {
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
        return `${multiplier(thousands)} ${thousand} e ${toReo(hundreds)}`;
    }
    if (input < 1_000_000_000) {
        const millions = Math.floor(input / 1_000_000);
        const thousands = input % 1_000_000;
        if (thousands === 0) {
            return `${multiplier(millions)} ${million}`;
        }
        return `${multiplier(millions)} ${million} e ${toReo(thousands)}`;
    }
    if (input < 1_000_000_000_000) {
        const billions = Math.floor(input / 1_000_000_000);
        const millions = input % 1_000_000_000;
        if (millions === 0) {
            return `${multiplier(billions)} ${billion}`;
        }
        return `${multiplier(billions)} ${billion} e ${toReo(millions)}`;
    }
    return input.toString();
}

export function toNumber(input: string): number {
    // TODO: Implement logic to convert string to number
    return parseInt(input);
}

function multiplier(input: number, excludeOne: boolean = false): string {
    if (excludeOne) {
        return input === 1 ? '' : toReo(input);
    } else {
        return input === 1 ? 'kotahi' : toReo(input);
    }
   
}

const ones: Record<number, string> = {
    0: 'kore',
    1: 'tahi',
    2: 'rua',
    3: 'toru',
    4: 'whā',
    5: 'rima',
    6: 'ono',
    7: 'whitu',
    8: 'waru',
    9: 'iwa',
};

const ten = 'tekau';
const hundred = 'rau';
const thousand = 'mano';
const million = 'miriona';
const billion = 'piriona';