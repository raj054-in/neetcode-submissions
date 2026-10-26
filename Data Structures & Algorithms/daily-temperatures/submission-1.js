class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const l=temperatures.length
      
        const result =new Array(l).fill(0)
        const stack=[]
        for( let i=0;i<l;i++){
            

            while(stack.length!=0&&temperatures[i]>stack.at(-1)[0]){
                const poped=stack.pop()
                result[poped[1]]=i-poped[1]
            }
            stack.push([temperatures[i],i])

    
            
            
        }

           
       

        return result
    }
}
