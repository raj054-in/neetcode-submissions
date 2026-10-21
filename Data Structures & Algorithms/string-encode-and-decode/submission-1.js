class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const newString =strs.map((str)=>{
            
            return  `${str.length}`+'#'+str
        })
        
        return newString.join("")

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
       let orgString=str
    const output=[]
    let i=0
    let len=''
    while (i <str.length) {
        while (str[i]!="#") {
          len=len+str[i]

          i++
        }
        len=Number(len)
        i++
        output.push(orgString.slice(i,i+len))
        i+=len
        len=''

        
    }

    return output

    }
}
