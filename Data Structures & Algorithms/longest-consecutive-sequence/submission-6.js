class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length==0 || nums.length==1){
            return nums.length
        }
        const sortedNums=nums.sort((a,b)=>a-b)
  
    let consecutiveMap=new Map()
    let consecutiveMapKey=1
    
    for(let i=0 ;i<sortedNums.length;i++){
        if(sortedNums[i+1]==sortedNums[i]) continue;
        if(sortedNums[i+1]-sortedNums[i]==1){
            consecutiveMap.set(consecutiveMapKey,                (consecutiveMap.get(consecutiveMapKey)||0)+1)
            
        }
        else{
           
            consecutiveMapKey+=1
            
        }


        
    }
    if(consecutiveMap.size==0) return 1
    const consecutiveMapArray=[...consecutiveMap.entries()].sort((a,b)=>b[1]-a[1])
   
    return (consecutiveMapArray[0][1]+1)
    



    }
}
