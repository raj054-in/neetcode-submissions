class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
           const bracMap = new Map([
  ["(", ")"],
  ["[", "]"],
  ["{", "}"]
]);
  let stack=new Array()
  for( const bracket of s){
    if(bracMap.has(bracket)){
        stack.push(bracket)
    }
    else{
        if(bracMap.get(stack.pop())!=bracket) return false
       
    }
  }
  if(stack.length!=0) return false
  return true




    
    }
}
