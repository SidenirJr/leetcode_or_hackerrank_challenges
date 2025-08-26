<?php
// URL: https://leetcode.com/problems/palindrome-number/
class Solution {

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x) {
        $number_string = (string)$x;

        $arrayNumbers = str_split($number_string);

        if ($arrayNumbers == array_reverse($arrayNumbers)) {
            return true;
        }
        return false;
    }
};