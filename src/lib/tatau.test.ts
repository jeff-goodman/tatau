import { tatau } from './tatau';
import { TatauOptions } from './options';
import { getPrefix } from './function/to-reo';

jest.mock('./function/to-reo', () => ({
    getPrefix: jest.fn(),
    toReo: jest.fn(),
}));

describe('tatau', () => {
    describe('when input is a number', () => {
        it('should return a string', () => {
            // Arrange
            const input = 123;

            // Act
            const result = tatau(input);

            // Assert
            expect(typeof result).toBe('string');
            expect(result.length).toBeGreaterThan(0);
        });
    });

    describe('when input is a string', () => {
        it('should return a number', () => {
            // Arrange
            const input = 'rau e rua tekau mā toru';

            // Act
            const result = tatau(input);

            // Assert
            expect(typeof result).toBe('number');
            expect(result).toBe(NaN);
        });
    });

    describe('options', () => {
        it('should throw an error when ordinalInput is true', () => {
            // Arrange
            const input = 123;
            const options = {
                ordinalInput: true,
            } as TatauOptions;

            // Act
            const result = () => tatau(input, options);

            // Assert
            expect(result).toThrow('Ordinal input not yet implemented');
        });

        it('should use defaults when no options supplied', () => {
            // Arrange
            const input = 123;
            const defaultOptions: TatauOptions = {
                ordinalInput: false,
                ordinalOutput: false,
            };

            // Act
            tatau(input);

            // Assert
            expect(getPrefix).toHaveBeenCalledWith(123, defaultOptions);
        });

        it('should use ordinalOutput when supplied', () => {
            // Arrange
            const input = 123;
            const options: TatauOptions = {
                ordinalOutput: true,
            };
            const expectedOptions: TatauOptions = {
                ordinalInput: false,
                ...options,
            };

            // Act
            tatau(input, options);

            // Assert
            expect(getPrefix).toHaveBeenCalledWith(123, expectedOptions);
        });
    });
});
