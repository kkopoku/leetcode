
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    let map = new Map()
    // let array = Array(nums.length).fill(0)
    let array = []
    let result = []

    // populate map with number and occurrence
    for (let num of nums){
        if (map.has(num)){
            let n = map.get(num)
            map.set(num, n+1)
        }else{
            map.set(num, 1)
        }
    }

    map.forEach(function(value, key){
        if(!array[value]){
            array[value] = [key]
        }else{
            array[value].push(key)
        }
    })

    for (let i=array.length-1; i>0; --i){
        if (array[i]){
            for(let item of array[i]){
                result.push(item)
                if (result.length == k) 
                    return console.log(result)
            }
        }
    }

}

let nums = [1,2,3,4,5,6,6,7,]
topKFrequent(nums,2)

