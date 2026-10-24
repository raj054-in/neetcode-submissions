class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
          const numsSet=new Set(nums)
    let longest=0
    console.log(numsSet)
   
    for(let num of nums){
        if(!numsSet.has(num-1)){
            let length=1
            while(numsSet.has(num+1)){
                length++
                num=num+1

                

            }
            longest=Math.max(longest,length)
        }
    }
    return longest
    }
}
