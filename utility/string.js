/**
 * This sections contains the methods to perform operations on string.
 * Also include realMerge method to merge two objects
 * @param text
 * @returns {}
 */
const toCamelCase = (text) => {
    return toCapitalizedCamelCase(text)
        .replace(/^(.)/, function($1) {
            return $1.toLowerCase();
        });
};

const toCapitalizedCamelCase = (text) => {
    return String(text)
        .replace(/\s(.)/g, function($1) {
            return $1.toUpperCase();
        })
        .replace(/\s/g, "")
        .replace(/^(.)/, function($1) {
            return $1.toUpperCase();
        });
};

const realMerge = function (to, from) {

    for (n in from) {

        if (typeof to[n] != 'object') {
            to[n] = from[n];
        } else if (typeof from[n] == 'object') {
            to[n] = realMerge(to[n], from[n]);
        }
    }
    return to;
};

module.exports = {
    toCamelCase,
    realMerge
};
