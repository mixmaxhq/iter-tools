import { apply } from '../../..';

describe('apply', () => {
  it('passes the function the iterable of arguments provided to it', () => {
    const testFn = jest.fn();
    apply(testFn, [2, 3]);
    expect(testFn).toHaveBeenCalledTimes(1);
    expect(testFn).toHaveBeenLastCalledWith(2, 3);
  });

  it('can be curried', () => {
    const testFn = jest.fn();
    apply(testFn)([2, 3]);
    expect(testFn).toHaveBeenCalledTimes(1);
    expect(testFn).toHaveBeenLastCalledWith(2, 3);
  });

  describe('with no arguments', () => {
    let testFn: (...args: any[]) => any;

    beforeEach(() => {
      testFn = jest.fn();
    });

    afterEach(() => {
      expect(testFn).toHaveBeenCalledTimes(1);
      expect(testFn).toHaveBeenLastCalledWith();
    });

    describe('(undefined)', () => {
      it('calls the function if given two arguments', () => {
        apply(testFn, undefined);
      });

      it('can be curried', () => {
        apply(testFn)(undefined);
      });
    });

    describe('(null)', () => {
      it('calls the function if given two arguments', () => {
        apply(testFn, null);
      });

      it('can be curried', () => {
        apply(testFn)(null);
      });
    });
  });
});
