class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap = {} # val(n) : index(i)

        for i,n in enumerate(nums):
            diff = target - n #7 - 3 = 4
            if diff in prevMap:
                return [prevMap[diff] , i ]
            prevMap[n] = i
        return