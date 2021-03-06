import { permutations } from '../../..';

describe('permutations', () => {
  it('returns empty when there are no items to permute', () => {
    expect(Array.from(permutations([]))).toEqual([]);
  });

  it('returns empty when permutation size is 0', () => {
    expect(Array.from(permutations(0, [1, 2, 3, 4]))).toEqual([]);
  });

  it('returns permutations', () => {
    expect(Array.from(permutations(2, [1, 2]))).toEqual([[1, 2], [2, 1]]);
  });

  it('can be reused', () => {
    const iter = permutations([1, 2]);
    expect(Array.from(iter)).toEqual([[1, 2], [2, 1]]);
    expect(Array.from(iter)).toEqual([[1, 2], [2, 1]]);
  });

  it('returns permutations', () => {
    const iter = permutations(2, [1, 2, 3, 4]);
    expect(iter.size).toEqual(12);
    const expected = [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 1],
      [2, 3],
      [2, 4],
      [3, 1],
      [3, 2],
      [3, 4],
      [4, 1],
      [4, 2],
      [4, 3],
    ];

    expect(Array.from(iter)).toEqual(expected);
  });

  describe('permutations.size', () => {
    it('is 0 when there is nothing to permute', () => {
      expect(permutations([]).size).toBe(0);
    });

    it('is 0 when permutation size is 0', () => {
      expect(permutations(0, new Array(4)).size).toBe(0);
    });

    it('works in common cases', () => {
      expect(permutations(2, new Array(2)).size).toBe(2);
      expect(permutations(2, new Array(10)).size).toBe(90);
    });

    it('works when intermediate computations would overflow doubles', () => {
      expect(permutations(4, new Array(1000)).size).toBe(994010994000);
    });
  });
});
