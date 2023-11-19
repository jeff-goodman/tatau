
export function tatau(input: number): string;
export function tatau(input: string): number;
export function tatau(input: number | string): number | string {
    if (typeof input === 'number') {
        return toReo(input);
    } else if (typeof input === 'string') {
        return toNumber(input);
    } else {
        throw new Error('Invalid input type');
    }
}

export function toReo(input: number): string {
    if (input < 0) {
        return `kore ${toReo(-input)}`;
    }
    if (input < 10) {
        return ones[input];
    }
    return input.toString();
}

export function toNumber(input: string): number {
    // TODO: Implement logic to convert string to number
    return parseInt(input);
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