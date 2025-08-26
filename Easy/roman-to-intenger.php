<?php
// URL: https://leetcode.com/problems/roman-to-integer/
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s) {
        $romanValues = [
            'I' => 1,
            'V' => 5,
            'X' => 10,
            'L' => 50,
            'C' => 100,
            'D' => 500,
            'M' => 1000,
        ];

        $result = 0;
        $prev = 0;
        $i = 0;

        do {
            $value = $romanValues[$s[$i]];
            $result += $value - ($value > $prev ? $prev * 2 : 0);
            $prev = $value;
            ++$i;
        } while($s[$i]);

        return $result;
    }
}