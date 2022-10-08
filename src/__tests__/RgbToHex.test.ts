import { RgbToHex } from '../Color';

describe('RgbToHex', () => {
  test('should return a hex for array rgb', () => {
    const rgbWhiteArray = [255, 255, 255]
    expect(RgbToHex(rgbWhiteArray)).toBe('#ffffff');
  });

  test('should return a hex for string', () => {
    const rgbBlackString = 'rgb(0, 0, 0)'
    expect(RgbToHex(rgbBlackString)).toBe('#000000');
  });

  test('should return a hex for string', () => {
    const rgbRedString = '255, 0, 0'
    expect(RgbToHex(rgbRedString)).toBe('#ff0000');
  });
});
