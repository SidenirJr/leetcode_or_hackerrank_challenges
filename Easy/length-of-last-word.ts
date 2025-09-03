// link: https://leetcode.com/problems/length-of-last-word/
function lengthOfLastWord(s: string): number {
    const arrayWord = s.trim().split(' ');
    const lastWord = arrayWord[arrayWord.length - 1]
    
    return lastWord.length;
};