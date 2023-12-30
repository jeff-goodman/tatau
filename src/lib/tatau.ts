import { TatauOptions } from './options';
import { toNumber } from './function/to-number';
import { getPrefix, toReo } from './function/to-reo';

const defaultOptions: TatauOptions = {
    ordinalInput: false,
    ordinalOutput: false,
};

export function tatau(input: number, options?: TatauOptions): string;
export function tatau(input: string, options?: TatauOptions): number;
export function tatau(input: number | string, options: TatauOptions = defaultOptions): number | string {

    const selectedOptions = {
        ...defaultOptions,
        ...options,
    };

    if (selectedOptions.ordinalInput) {
        throw new Error('Ordinal input not yet implemented');
    }
    
    if (typeof input === 'number') {
        const prefix = getPrefix(input, selectedOptions);
        return `${prefix}${toReo(input)}`;
    }
    return toNumber(input);
}
