import { TatauOptions } from './options';
import { toNumber } from './to-number';
import { toReo } from './to-reo';

const defaultOptions: TatauOptions = {
    ordinalInput: false,
    ordinalOutput: false,
};

export let selectedOptions: TatauOptions; 

export function tatau(input: number, options?: TatauOptions): string;
export function tatau(input: string, options?: TatauOptions): number;
export function tatau(input: number | string, options: TatauOptions = defaultOptions): number | string {

    selectedOptions = options;

    if (options.ordinalOutput || options.ordinalInput) {
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
