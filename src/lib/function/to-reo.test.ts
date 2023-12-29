import { TatauOptions } from '../options';
import { getPrefix, toReo } from './to-reo';

describe('to-reo', () => {

  describe('getPrefix', () => {
    let options: TatauOptions;

    beforeEach(() => {
      options = { 
        ordinalInput: false,
        ordinalOutput: false,
      };

    });


    it('returns no prefix when ordinalOutput is false', () => {
      // arrange
      const input = 1;
  
      // act
      const result = getPrefix(input, options);
  
      // assert
      expect(result).toBe('');
    });
  
    it('returns no prefix when input is negative', () => {
      // arrange
      const input = -1;
      options.ordinalOutput = true;
  
      // act
      const result = getPrefix(input, options);
  
      // assert
      expect(result).toBe('');
    });
  
    it('returns no prefix when input is zero', () => {
      // arrange
      const input = 0;
      options.ordinalOutput = true;
  
      // act
      const result = getPrefix(input, options);
  
      // assert
      expect(result).toBe('');
    });
  
    it('returns "tua" when input is less than 10', () => {
      // arrange
      const input = 9;
      options.ordinalOutput = true;
  
      // act
      const result = getPrefix(input, options);
  
      // assert
      expect(result).toBe('tua');
    });
  
    it('returns "te " when input is greater than or equal to 10', () => {
      // arrange
      const input = 10;
      options.ordinalOutput = true;
  
      // act
      const result = getPrefix(input, options);
  
      // assert
      expect(result).toBe('te ');
    });
  });
  
  describe('toReo', () => {
  
    describe('whole numbers', () => { 
      const testCases = {
        'ones': {
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
        },
        'teens': {
          10: 'tekau',
          11: 'tekau mā tahi',
          12: 'tekau mā rua',
          13: 'tekau mā toru',
          14: 'tekau mā whā',
          15: 'tekau mā rima',
          16: 'tekau mā ono',
          17: 'tekau mā whitu',
          18: 'tekau mā waru',
          19: 'tekau mā iwa',
        },
        'tens': {
          20: 'rua tekau',
          21: 'rua tekau mā tahi',
          22: 'rua tekau mā rua',
          23: 'rua tekau mā toru',
          24: 'rua tekau mā whā',
          25: 'rua tekau mā rima',
          26: 'rua tekau mā ono',
          27: 'rua tekau mā whitu',
          28: 'rua tekau mā waru',
          29: 'rua tekau mā iwa',
          30: 'toru tekau',
          32: 'toru tekau mā rua',
          46: 'whā tekau mā ono',
          51: 'rima tekau mā tahi',
          60: 'ono tekau',
          68: 'ono tekau mā waru',
          77: 'whitu tekau mā whitu',
          89: 'waru tekau mā iwa',
          94: 'iwa tekau mā whā',
        },
        'hundreds': {
          100: 'kotahi rau',
          101: 'kotahi rau mā tahi',
          102: 'kotahi rau mā rua',
          103: 'kotahi rau mā toru',
          104: 'kotahi rau mā whā',
          105: 'kotahi rau mā rima',
          106: 'kotahi rau mā ono',
          107: 'kotahi rau mā whitu',
          108: 'kotahi rau mā waru',
          109: 'kotahi rau mā iwa',
          110: 'kotahi rau e tekau',
          111: 'kotahi rau e tekau mā tahi',
          172: 'kotahi rau e whitu tekau mā rua',
          200: 'rua rau',
          241: 'rua rau e whā tekau mā tahi',
          355: 'toru rau e rima tekau mā rima',
          411: 'whā rau e tekau mā tahi',
          555: 'rima rau e rima tekau mā rima',
          690: 'ono rau e iwa tekau',
          743: 'whitu rau e whā tekau mā toru',
          881: 'waru rau e waru tekau mā tahi',
          906: 'iwa rau mā ono',
        },
        'thousands': {
          1_000: 'kotahi mano',
          1_001: 'kotahi mano mā tahi',
          1_002: 'kotahi mano mā rua',
          1_003: 'kotahi mano mā toru',
          1_004: 'kotahi mano mā whā',
          1_005: 'kotahi mano mā rima',
          1_006: 'kotahi mano mā ono',
          1_007: 'kotahi mano mā whitu',
          1_008: 'kotahi mano mā waru',
          1_009: 'kotahi mano mā iwa',
          1_010: 'kotahi mano e tekau',
          1_011: 'kotahi mano e tekau mā tahi',
          1_012: 'kotahi mano e tekau mā rua',
          1_013: 'kotahi mano e tekau mā toru',
          1_014: 'kotahi mano e tekau mā whā',
          1_015: 'kotahi mano e tekau mā rima',
          1_016: 'kotahi mano e tekau mā ono',
          1_017: 'kotahi mano e tekau mā whitu',
          1_018: 'kotahi mano e tekau mā waru',
          1_019: 'kotahi mano e tekau mā iwa',
          1_020: 'kotahi mano e rua tekau',
          1_021: 'kotahi mano e rua tekau mā tahi',
          1_022: 'kotahi mano e rua tekau mā rua',
          1_023: 'kotahi mano e rua tekau mā toru',
          1_024: 'kotahi mano e rua tekau mā whā',
          1_025: 'kotahi mano e rua tekau mā rima',
          1_026: 'kotahi mano e rua tekau mā ono',
          1_027: 'kotahi mano e rua tekau mā whitu',
        },
        'millions': {
          1_000_000: 'kotahi miriona',
          1_000_001: 'kotahi miriona mā tahi',
          1_000_002: 'kotahi miriona mā rua',
          1_000_003: 'kotahi miriona mā toru',
          1_000_004: 'kotahi miriona mā whā',
          1_000_005: 'kotahi miriona mā rima',
          1_000_006: 'kotahi miriona mā ono',
          1_000_007: 'kotahi miriona mā whitu',
          1_000_008: 'kotahi miriona mā waru',
          1_000_009: 'kotahi miriona mā iwa',
          1_000_010: 'kotahi miriona e tekau',
          1_000_011: 'kotahi miriona e tekau mā tahi',
          1_000_012: 'kotahi miriona e tekau mā rua',
          1_000_013: 'kotahi miriona e tekau mā toru',
          1_000_014: 'kotahi miriona e tekau mā whā',
          1_000_015: 'kotahi miriona e tekau mā rima',
          1_000_016: 'kotahi miriona e tekau mā ono',
          1_000_017: 'kotahi miriona e tekau mā whitu',
          1_000_018: 'kotahi miriona e tekau mā waru',
          1_000_019: 'kotahi miriona e tekau mā iwa',
          1_000_020: 'kotahi miriona e rua tekau',
          1_000_021: 'kotahi miriona e rua tekau mā tahi',
          1_000_022: 'kotahi miriona e rua tekau mā rua',
          1_000_023: 'kotahi miriona e rua tekau mā toru',
        },
        'billions': {
          1_000_000_000: 'kotahi piriona',
          1_000_000_001: 'kotahi piriona mā tahi',
          1_000_000_002: 'kotahi piriona mā rua',
          1_000_000_003: 'kotahi piriona mā toru',
          1_000_000_004: 'kotahi piriona mā whā',
          1_000_000_005: 'kotahi piriona mā rima',
          1_000_000_006: 'kotahi piriona mā ono',
          1_000_000_007: 'kotahi piriona mā whitu',
          1_000_000_008: 'kotahi piriona mā waru',
          1_000_000_009: 'kotahi piriona mā iwa',
          1_000_000_010: 'kotahi piriona e tekau',
          1_000_000_011: 'kotahi piriona e tekau mā tahi',
          1_000_000_012: 'kotahi piriona e tekau mā rua',
          1_000_000_013: 'kotahi piriona e tekau mā toru',
          1_000_000_014: 'kotahi piriona e tekau mā whā',
          1_000_000_015: 'kotahi piriona e tekau mā rima',
          1_000_000_016: 'kotahi piriona e tekau mā ono',
          1_000_000_017: 'kotahi piriona e tekau mā whitu',
          1_000_000_018: 'kotahi piriona e tekau mā waru',
          1_000_000_019: 'kotahi piriona e tekau mā iwa',
          1_000_000_020: 'kotahi piriona e rua tekau',
          1_000_000_021: 'kotahi piriona e rua tekau mā tahi',
        },
      }; 
    
      for (const [description, tests] of Object.entries(testCases)) {
        describe(`testing ${description}`, () => {
          for (const [input, expected] of Object.entries(tests)) {
            it(`should return "${expected}" for input ${input}`, () => {
              expect(toReo(parseInt(input))).toBe(expected);
            });
          }
        });
      }
    });
  
    describe('negative whole numbers', () => {
      const testCases = {
        'ones': {
          '-1': 'kore tahi',
          '-2': 'kore rua',
          '-3': 'kore toru',
          '-4': 'kore whā',
          '-5': 'kore rima',
          '-6': 'kore ono',
          '-7': 'kore whitu',
          '-8': 'kore waru',
          '-9': 'kore iwa',
        },
        'teens': {
          '-10': 'kore tekau',
          '-11': 'kore tekau mā tahi',
          '-12': 'kore tekau mā rua',
          '-13': 'kore tekau mā toru',
          '-14': 'kore tekau mā whā',
          '-15': 'kore tekau mā rima',
          '-16': 'kore tekau mā ono',
          '-17': 'kore tekau mā whitu',
          '-18': 'kore tekau mā waru',
          '-19': 'kore tekau mā iwa',
        },
        'tens': {
          '-20': 'kore rua tekau',
          '-21': 'kore rua tekau mā tahi',
          '-22': 'kore rua tekau mā rua',
          '-23': 'kore rua tekau mā toru',
          '-24': 'kore rua tekau mā whā',
          '-25': 'kore rua tekau mā rima',
          '-26': 'kore rua tekau mā ono',
          '-27': 'kore rua tekau mā whitu',
          '-28': 'kore rua tekau mā waru',
          '-29': 'kore rua tekau mā iwa',
          '-30': 'kore toru tekau',
          '-32': 'kore toru tekau mā rua',
          '-46': 'kore whā tekau mā ono',
          '-51': 'kore rima tekau mā tahi',
          '-60': 'kore ono tekau',
          '-68': 'kore ono tekau mā waru',
          '-77': 'kore whitu tekau mā whitu',
        },
      };
  
      for (const [description, tests] of Object.entries(testCases)) {
        describe(`testing ${description}`, () => {
          for (const [input, expected] of Object.entries(tests)) {
            it(`should return "${expected}" for input ${input}`, () => {
              expect(toReo(parseInt(input))).toBe(expected);
            });
          }
        });
      }
  
    });
  
    describe('decimals', () => {
      const testCases = {
        'positive decimals': {
          '1.99999': 'tahi',
          '2.0': 'rua',
          '3.1415': 'toru',
          '45.678': 'whā tekau mā rima',
        },
        'negative decimals': {
          '-10.2': 'kore tekau',
          '-1.987654321': 'kore tahi',
          '-78.0': 'kore whitu tekau mā waru',
        },
      };
  
      for (const [description, tests] of Object.entries(testCases)) {
        describe(`testing ${description}`, () => {
          for (const [input, expected] of Object.entries(tests)) {
            it(`should return "${expected}" for input ${input}`, () => {
              expect(toReo(parseInt(input))).toBe(expected);
            });
          }
        });
      }
  
    });
  
    describe('out of range', () => {
      it('should return the input as a string', () => {
        const input = 1_000_000_000_000_000_000_000_000_000_000_000_000_000_000_000;
        expect(toReo(input)).toBe(input.toString());
      });
    })
  
  });
});

