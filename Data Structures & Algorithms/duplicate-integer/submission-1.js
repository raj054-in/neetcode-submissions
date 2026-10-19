class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
 
    hasDuplicate(nums) {
        let numbers={}
        for (const value of nums){
            if (value in numbers){
                return true
            }
            numbers[value]=value
            
        }
        return false
    }
}
