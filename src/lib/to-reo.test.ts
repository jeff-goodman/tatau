import { toReo } from './to-reo';

describe('toReo', () => {

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
