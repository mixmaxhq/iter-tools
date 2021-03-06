import assert from 'static-type-assert';
import { when } from '../../..';

declare const Ø: never;

assert<Iterable<number>>(when(Ø as any, Ø as Iterable<number>));

assert<[1, 2, 3] | []>(when(Ø as any, Ø as [1, 2, 3]));

assert<Record<string, any>>(when(Ø as any, Ø as Record<string, any>));

assert<{ test: 'test' } | {}>(when(Ø as any, Ø as { test: 'test' }));

assert<{}>({ ...when(Ø as any, Ø as null) });

assert<Array<never>>([...when(Ø as any, Ø as null)]);
