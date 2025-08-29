interface Array<T> {
    last(): T | -1;
}

// If uses Array refer the variable using `this`
Array.prototype.last = function() {
    if (this.length === 0) {
        return -1
    } else {
        return this.at(-1)
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
