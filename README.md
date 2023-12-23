# tatau

[tatau](https://maoridictionary.co.nz/word/7653)  
_(verb)_ to count, calculate, add up, enumerate, tally.        

A Javascript / Typescript package which translates between numerals and te reo Maori text.

Tatau is dependency-less. Installing it will not add any additional dependencies to your project.  

## Installation

Add tatau to your project.

```bash
npm install tatau
```

## Usage

### Convert numerals to te reo Maori  
_Explicit types added for clarity_

```ts
import { tatau } from 'tatau';

const tuhi = console.log;

let value: number = 51;
let tau: string = tatau(value);
tuhi(tau); // rima tekau mā tahi
```
Decimals are rounded down.
```ts
value = 107.924;
tau = tatau(value);
tuhi(tau); // kotahi rau mā whitu
```
Negative decimals are rounded up.
```ts
value = -3.14;
tau = tatau(value);
tuhi(tau); // kore toru
```

### Convert te reo Maori to numerals
_Explicit types added for clarity_  
_NB: Converting te reo to numerals is not yet supported_

```ts
import { tatau } from 'tatau';

const tuhi = console.log;

const tau: string = 'rima tekau mā tahi';

const value: number = tatau(tau);

tuhi(value); // 51
```
