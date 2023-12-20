# tatau

[tatau](https://maoridictionary.co.nz/word/7653)  
_(verb)_ to count, calculate, add up, enumerate, tally.        

A Javascript / Typescript package which translates between numerals and te Reo Maori text.

## Installation

Add tatau to your project.

```bash
npm install tatau
```

## Usage

Convert numerals to te Reo.  
_Explicit types added for clarity_

```ts
import tatau from 'tatau';

const tuhi = console.log;

const value: number = 51;

const tau: string = tatau(value);

tuhi(tau); // rima tekau mā tahi

```

Convert te Reo to numerals.  
_Explicit types added for clarity_

```ts
import tatau from 'tatau';

const tuhi = console.log;

const tau: string = 'rima tekau mā tahi';

const value: number = tatau(tau);

tuhi(value); // 51

```
