export const Random = (seed: any, max?: number) => {
  if (Array.isArray(seed)) {
    return seed[Math.floor(Math.random() * seed.length)];
  }

  if (typeof seed === 'string') {
    return seed.charAt(Math.floor(Math.random() * seed.length));
  }

  if (typeof seed === 'number' && !max) {
    return Math.floor(Math.random() * seed);
  }

  if (typeof seed === 'number' && max) {
    return Math.floor(Math.random() * (max - seed)) + seed;
  }

  return Math.random();
};
