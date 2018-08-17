/**
 * multiplyByThree          Multiplies items in the array by three.
 * @params {array} array    The array that will have its items multiplied by three.
 * @returns {array}
 */
export function multiplyByThree(array) {
    const multiplier = 3;

    // Handle undefined or null inputs
    if (!array) {
        throw new Error('Argument is undefined or null');
    }

    // Handle non-array inputs
    if (!Array.isArray(array)) {
        throw new Error('Argument is not an array');
    }

    const result = array.reduce((all, item) => {
        if (typeof item !== 'number') {
            throw new Error('Array must contain valid integers only');
        } else {
            all.push(item * multiplier);
        }

        return all;
    }, []);

    return result;
}
