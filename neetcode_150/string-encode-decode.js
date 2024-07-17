class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = ""
        for(let str of strs){
            let strLength = str.length
            encodedString += strLength+"#"+str
        }
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedString = ""
        let strArray = str.split("")
        let strLen = strArray.length
        let cNumCount = 0;
        let isFirst = false
        let res = []
        for(let i=0; i<=strLen; i++){
            if(i == 0){
                cNumCount = strArray[i]
                isFirst = true
            }else if(cNumCount > 0 && isFirst){
                --cNumCount
                isFirst = false
            }else if(cNumCount >= 0){
                decodedString += strArray[i]
                --cNumCount
            }else{
                cNumCount = strArray[i]
                isFirst = true
                res.push(decodedString)
                decodedString = ""
            }
        }
        return res
    }
}
