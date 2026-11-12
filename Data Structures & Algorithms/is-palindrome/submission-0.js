class Solution {
    isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;

        while(left < right){
            if(!/[a-z0-9]/i.test(str[left])){
                left ++ ;
                continue;
            }
            if(!/[a-z0-9]/i.test(str[right])){
                right -- ;
                continue;
            }

            if (str[left].toLowerCase() !== str[right].toLowerCase()){
                return false
            }

            left ++;
            right --;
        }
        return true 
    }
}
