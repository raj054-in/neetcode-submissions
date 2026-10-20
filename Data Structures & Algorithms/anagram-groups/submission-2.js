class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
          let strFreqMap={}
         let outPut =[]
        for (const str of strs){
            const key =str.split('').sort().join('')
           
            if (key in strFreqMap){
                strFreqMap[str.split('').sort().join('')].push(str)

            }else{
                strFreqMap[key]=[str]
            }
        }
        for(const subAnagram in strFreqMap){
            
            outPut.push(strFreqMap[subAnagram])
        }
        return outPut
    }
}
