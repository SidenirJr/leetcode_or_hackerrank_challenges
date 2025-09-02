// Link: https://leetcode.com/problems/integer-to-roman/
function intToRoman(num: number): string {
    // Create a descending array of Roman numeral symbols
    const arrayRomans: [number, string][] = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ]

    // Convert the integer to a Roman numeral
    let ans = "";
    for (const [value, symbol] of arrayRomans) {
        // Determine how many times the Roman numeral can fit into the remaining number,
        // Math.floor works by rounding down to the nearest whole number,
        // so if the remaining number is 3 and the current value is 5,
        // Math.floor(3 / 5) will be 0, meaning we can't use this Roman numeral
        const times = Math.floor(num / value);

        // If times returns a value bigger then 1, will repeat the symbol
        ans += symbol.repeat(times);

        // Take the rest of the amount using %=
        num %= value;

        // If the remaining number is 0, we can stop
        if (num === 0) break;
    }
    return ans;
};