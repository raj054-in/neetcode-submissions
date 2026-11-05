class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
            const l=heights.length
    let maxArea=0
    let stack=[]
    for (let i=0 ;i<l;i++){
        let start=i 

       while(stack.length>0&&stack.at(-1)[1]>heights[i]){
        let [poppedIndex,poppedHeight]=stack.pop()
        let area=poppedHeight* (i-poppedIndex)
        maxArea=Math.max(area,maxArea)
        start=poppedIndex

       }
       stack.push([start,heights[i]])
        
        
    }
    while(stack.length>0){
       let[poppedIndex,poppedHeight]=stack.pop()
       let area=poppedHeight*(l-poppedIndex)
       maxArea=Math.max(area,maxArea)
    }


    console.log(maxArea)
    return maxArea
    }
}
