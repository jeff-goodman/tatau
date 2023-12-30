# tatau

[tatau](https://maoridictionary.co.nz/word/7653)  
_(verb)_ to count, calculate, add up, enumerate, tally.        

A Javascript / Typescript package which translates between numerals and te reo Māori text.

Tatau is dependency-less. Installing it will not add any additional dependencies to your project.  

## Demo

You can see tatau in use on [the demo site](https://jeff-goodman.github.io/tatau-demo/).

## Installation

Add tatau to your project.

```bash
npm install tatau
```

## Usage

### Convert numerals to te reo Māori  
_Explicit types added for clarity_

```ts
import { tatau } from 'tatau';

const tuhi = console.log;

let value: number = 51;
let tau: string = tatau(value);
tuhi(tau); // rima tekau mā tahi
```
Decimals are rounded to their integer part.
```ts
value = 107.924;
tau = tatau(value);
tuhi(tau); // kotahi rau mā whitu  
  
value = -3.14;
tau = tatau(value);
tuhi(tau); // kore toru
```

### Convert te reo Māori to numerals
_Explicit types added for clarity_  
_NB: Converting te reo to numerals is not yet supported_

```ts
import { tatau } from 'tatau';

const tuhi = console.log;

const tau: string = 'rima tekau mā tahi';

const value: number = tatau(tau);

tuhi(value); // 51
```

### Options
Use the `TatauOptions` interface for additional configuration.  

The default values are as follows:
| Option            | Default       | Description           |
|-----------        |---------------|-----------------------|
| `ordinalInput`    | `false`       | Set to `true` when the input being provided is an ordinal number, e.g. `7th` or `tuawhitu`.  The default input is cardinal numbers.  _NB: Ordinal Input is not yet supported._ |
| `ordinalOutput`   | `false`       | Set to `true` when you want the output to be an ordinal number, e.g. `7th` or `tuawhitu`.  The default output is cardinal numbers. |

### Usage as a class
Create a new instance of the `Tatau` class to allow you to define `TatauOptions` once.

The methods available on the `Tatau` class are:
| Method   | Description                             |
|----------|-------------                            |
| options  | Get or set the current `TatauOptions`   |
| tatau    | Convert your value                      |


```ts
import { Tatau, TatauOptions } from 'tatau';

const options: TatauOptions = {
    ordinalOutput: true,
};

const tatau = new Tatau(options);

const value = 3;

const tau = tatau.tatau(value);

console.log({
    tau,                        // tuatoru
    options: tatau.options,     // { ordinalOutput: true }
});

```
