const _random = (multiplier: number = 1) => Math.random() * multiplier

export const Random = (seed: any, max?: number) => {
  if (Array.isArray(seed)) {
    return seed[Math.floor(_random(seed.length))];
  }

  if (typeof seed === 'string') {
    return seed.charAt(Math.floor(_random(seed.length)));
  }

  if (typeof seed === 'number' && !max) {
    return Math.floor(_random(seed));
  }

  if (typeof seed === 'number' && max) {
    return Math.floor(_random(max - seed)) + seed;
  }

  return _random(1);
};
