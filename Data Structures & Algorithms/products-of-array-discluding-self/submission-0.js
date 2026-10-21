class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
         let output=[]
        let prefix=[]
        let postfix=new Array(nums.length)
        for(let i=0;i<nums.length;i++){
            if(i==0){
                prefix.push(1)
            }else prefix.push(prefix[i-1]*nums[i-1])
        }
        postfix[nums.length-1]=1
        for(let i=nums.length-2;i>=0;i--){
            postfix[i]=postfix[i+1]*nums[i+1]


        }
        for(let i=0;i<nums.length;i++){
          output.push(postfix[i]*prefix[i])
        }
        
        
       
        return output
        
        
       
        
    }
}
