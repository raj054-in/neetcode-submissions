class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length){
            return false

        }
        let firstString={}
        let secondString={}
        for(const char of s){
            if (char  in firstString ){
                firstString[char]+=1

            }
            else {firstString[char]=1}
        }
        for(const char of t){
            if (char  in secondString ){
                secondString[char]+=1

            }
            else {secondString[char]=1}
        }
        const firstObjArray =Object.keys(firstString)
        for(const value of firstObjArray){
            if(firstString[value]!=secondString[value]){
                return false
            }

        }
        return true
    
}
}
