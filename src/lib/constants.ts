export const minInvalidInput = 1_000_000_000_000;

export const ones: Record<number, string> = {
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

export const ten = 'tekau';
export const hundred = 'rau';
export const thousand = 'mano';
export const million = 'miriona';
export const billion = 'piriona';

export const numbers: Record<number, string> = {
    ...ones,
    10: ten,
    100: hundred,
    1_000: thousand,
    1_000_000: million,
    1_000_000_000: billion,
};
