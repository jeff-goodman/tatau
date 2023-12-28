import { TatauOptions } from "../options";
import { tatau } from "../tatau";

export class Tatau {
    private _options: TatauOptions;

    constructor(options: TatauOptions) {
        this._options = options;
    }

    get options(): TatauOptions {
        return this._options;
    }

    set options(options: TatauOptions) {
        this._options = options;
    }

    tatau(input: number): string;
    tatau(input: string): number;
    tatau(input: number | string): number | string {
        if (typeof input === 'number') {
            return tatau(input, this._options);
        } 
        return tatau(input, this._options);
    }
}