class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output=[]
        let n=nums.length
        
        
        for(let i=0;i<n;i++){
            if(i==0){
                output.push(1)
            }else output.push(output[i-1]*nums[i-1])
        }
        let postfix=1
        for(let i=n-1;i>=0;i--){
            output[i]*=postfix
            postfix*=nums[i]


        }
        
        
       
        return output
        
        
       
        
    }
}
