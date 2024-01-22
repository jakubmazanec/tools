import {type Primitive} from './Primitive.js';

/**
 * Creates union type by combining primitve types and literal types while allowing auto-completion in IDEs.
 * This type is a workaround for [Microsoft/TypeScript#29729](https://github.com/Microsoft/TypeScript/issues/29729).
 *
 * ```TypeScript
 * type Animal = 'cat' | 'dog' | string;
 *
 * const: animal: Animal = ''; // No auto-completion here...
 * ```
 *
 * ```TypeScript
 * type Animal = LiteralUnion<'cat' | 'dog', string>;
 *
 * const: animal: Animal = ''; // Auto-completion works: 'cat' and 'dog' is suggested!
 * ```
 *
 * @typeParam L Union of literal types
 * @typeParam T Primitive type
 */
export type LiteralUnion<L, T extends Primitive> = L | (Record<never, never> & T);
