import { toNumber } from './to-number';

describe('toNumber', () => {

  it('should return NaN when input is not a valid number', () => {
    // Arrange
    const input = 'rau e rua tekau mā toru';

    // Act
    const result = toNumber(input);

    // Assert
    expect(result).toBeNaN();
  });
});