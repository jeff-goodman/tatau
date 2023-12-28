import { TatauOptions } from './options';
import { toNumber } from './to-number';
import { getPrefix, toReo } from './to-reo';

const defaultOptions: TatauOptions = {
    ordinalInput: false,
    ordinalOutput: false,
};

export let selectedOptions: TatauOptions; 

export function tatau(input: number, options?: TatauOptions): string;
export function tatau(input: string, options?: TatauOptions): number;
export function tatau(input: number | string, options: TatauOptions = defaultOptions): number | string {

    selectedOptions = {
        ...selectedOptions,
        ...options,
    };

    if (selectedOptions.ordinalInput) {
        throw new Error('Ordinal input not yet implemented');
    }
    
    if (typeof input === 'number') {
        const prefix = getPrefix(input);
        return `${prefix}${toReo(input)}`;
    }
    return toNumber(input);
}
