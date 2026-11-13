class Solution {
    maxArea(heights) {
        let left = 0 ;
        let right = heights.length - 1;
        let maxarea = 0 ;

        while(left < right){

            let width = right - left;
            let minheight = Math.min(heights[left] , heights[right]);
            let area = width * minheight ;

            if(area > maxarea){
                maxarea = area;
            }

            if(heights[left] < heights[right]){
                left++;
            }
            else{
                right--;
            }
        }
        return maxarea;
    }
}
