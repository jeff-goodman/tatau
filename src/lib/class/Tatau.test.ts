import { TatauOptions } from '../options';
import { Tatau } from './Tatau';

describe('Tatau', () => {
  let tatau: Tatau;

  beforeEach(() => {
    // Initialize Tatau instance with mock options
    const options = {} as TatauOptions;
    tatau = new Tatau(options);
  });

  describe('options', () => {
    it('should update the options when the instance is initialized', () => {
        // Arrange
        const options = {
            ordinalInput: true,
            ordinalOutput: true,
        } as TatauOptions;

        // Act
        const tatau = new Tatau(options);

        // Assert
        expect(tatau.options).toBe(options);
    });

    it('should update the options when the setter is used', () => {
        // Arrange
        const options = {
            ordinalInput: true,
            ordinalOutput: true,
        } as TatauOptions;

        // Act
        tatau.options = options;

        // Assert
        expect(tatau.options).toBe(options);
    });
  });
  
  describe('tatau', () => {
    it('should return a string when input is a number', () => {
      // Arrange
      const input = 123;

      // Act
      const result = tatau.tatau(input);

      // Assert
      expect(typeof result).toBe('string');
    });

    it('should return a number when input is a string', () => {
        // Arrange
        const input = 'rau e rua tekau mā toru';

        // Act
        const result = tatau.tatau(input);

        // Assert
        expect(typeof result).toBe('number');
    });

  });
});