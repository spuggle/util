/**
 * Calculate the sum of 2 `number`s.
 *
 * @example
 * ```
 * sum(1, 1) === 2;
 * ```
 *
 * @param a - First summand
 * @param b - Second summand
 *
 * @returns The sum of `a` and `b`
 */
export function sum(a: number, b: number): number;
/**
 * Calculate the sum of 2 `bigint`s.
 *
 * @example
 * ```
 * sum(1n, 1n) === 2n;
 * ```
 *
 * @param a - First summand
 * @param b - Second summand
 *
 * @returns The sum of `a` and `b`
 */
export function sum(a: bigint, b: bigint): bigint;
export function sum<T extends number>(a: T, b: T): T {
	return (a + b) as T;
}

/**
 * Meant to be used with `Array.prototype.reduce`.
 *
 * @example
 * ```
 * const array = [1, 2, 3];
 *
 * array.reduce(mean) === 2;
 * ```
 *
 * @param previousValue - Rolling sum of the array
 * @param currentValue - The next value to add to the sum
 * @param currentIndex - The current index of `currentValue` in the array
 * @param array - The source array. Only used for array length.
 *
 * @returns The mean of the array
 */
export function mean(previousValue: number, currentValue: number, currentIndex: number, array: Readonly<{length: number}>): number;
/**
 * Meant to be used with `Array.prototype.reduce`.
 *
 * @example
 * ```
 * const array = [1n, 2n, 3n];
 *
 * array.reduce(mean) === 2n;
 * ```
 *
 * @param previousValue - Rolling sum of the array
 * @param currentValue - The next value to add to the sum
 * @param currentIndex - The current index of `currentValue` in the array
 * @param array - The source array. Only used for array length.
 *
 * @returns The mean of the array
 */
export function mean(previousValue: bigint, currentValue: bigint, currentIndex: number, array: Readonly<{length: number}>): bigint;
export function mean<T extends number>(previousValue: T, currentValue: T, currentIndex: number, array: Readonly<{length: number}>): T {
	if (array.length - 1 === currentIndex) {
		// End of the array, calculate the mean
		return ((previousValue + currentValue) / ((typeof currentValue === 'bigint' ? BigInt(array.length) : array.length) as T)) as T;
	} else {
		return (previousValue + currentValue) as T;
	}
}
