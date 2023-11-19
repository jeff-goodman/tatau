import { toReo } from './tatau';

describe('toReo', () => {
  it('should return "kore" for input 0', () => {
    expect(toReo(0)).toBe('kore');
  });

  it('should return "tahi" for input 1', () => {
    expect(toReo(1)).toBe('tahi');
  });

  it('should return "rua" for input 2', () => {
    expect(toReo(2)).toBe('rua');
  });

  it('should return "toru" for input 3', () => {
    expect(toReo(3)).toBe('toru');
  });

  it('should return "whā" for input 4', () => {
    expect(toReo(4)).toBe('whā');
  });

  it('should return "rima" for input 5', () => {
    expect(toReo(5)).toBe('rima');
  });

  it('should return "ono" for input 6', () => {
    expect(toReo(6)).toBe('ono');
  });

  it('should return "whitu" for input 7', () => {
    expect(toReo(7)).toBe('whitu');
  });

  it('should return "waru" for input 8', () => {
    expect(toReo(8)).toBe('waru');
  });

  it('should return "iwa" for input 9', () => {
    expect(toReo(9)).toBe('iwa');
  });
});