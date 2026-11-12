class Solution {
    twoSum(nums , target) {
        let left = 0;
        let right = nums.length - 1; 
        while(left < right){
            let value = nums[left] + nums[right];
            if(value < target){
                left++;
            }
            else if (value > target){
                right--;
            }
            else{
                return [left + 1 , right + 1]
            }
        }
    }
}
