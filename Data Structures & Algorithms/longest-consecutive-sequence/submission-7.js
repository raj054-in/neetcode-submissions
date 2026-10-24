class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
          if(nums.length==0){
        return 0
    }
    nums.sort((a,b)=>a-b)
    let res=0,
        curr=nums[0],
        streak=0,
        i=0
    
    while(i<nums.length){
        if(curr !== nums[i]){
            curr=nums[i]
            streak=0
        }
        while(i<nums.length&&curr==nums[i]){
            i++
        }
        streak++
        curr++
        res= Math.max(res,streak)


    }
    return res
    }
}
