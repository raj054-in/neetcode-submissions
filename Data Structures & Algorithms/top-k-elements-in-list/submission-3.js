class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
          const numMap={}
        const output=[]
        for(const num of nums){
           if ( num in numMap){
            numMap[num]+=1
           }else{numMap[num]=1}
        }
        
        const numMapArray=Object.entries(numMap).sort((a,b)=>b[1]-a[1])
        for(let i=0 ;i<k;i++){
            output.push(numMapArray[i][0])
        }
        
        return (output)
        

    }
}
