import { tatau } from './tatau';
import { TatauOptions } from './options';

describe('tatau', () => {
    describe('when input is a number', () => {
        it('should return a string', () => {
        // Arrange
        const input = 123;

        // Act
        const result = tatau(input);

        // Assert
        expect(typeof result).toBe('string');
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
            expect(result).toThrow();
        });

    });

});