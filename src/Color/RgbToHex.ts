const _rgbToHex = (r: number, g: number, b: number) => '#' + [r, g, b].map(color => {
  const hex = color.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')

const _splitColors = ([r = 0, g = 0, b = 0]: number[]) =>
  _rgbToHex(r,g,b)

export const RgbToHex = (rgb: any[] | string) => {
  if (Array.isArray(rgb)) {
    return _splitColors(rgb)
  }

  if (typeof rgb === 'string') {
    return _splitColors(
      rgb
        .replace('rgb(', '')
        .replace(')', '')
        .split(',')
        .map((color) => Number(color))
    )
  }
};
