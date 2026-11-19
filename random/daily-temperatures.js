const temperatures = [22,21,20]


function calculateWarmth(){

    let result = []
    let index = 0
    let length = temperatures.length

    for (let x = index; x < length; x++){
        
        let current = temperatures[x]
        if(x === length-1) result.push(0)
        
        for(let y = x+1 ; y < length; y++){
            const pivot = temperatures[y]
            if(current < pivot){
                result.push(y-x)
                break
            }else if (y === length-1) {
                //if y is on the last element and its not greater than the x value return 0
                result.push(0)
            }
            
        }
    }

    console.log(result)
    return result

}

// calculateWarmthOptimized()


function calculateWarmthOptimized(){

    let length = temperatures.length
    let result = new Array(length).fill(0)

    let stack = [] // [temp, index][]

    for (let x = 1; x < length; x++){

        let current = temperatures[x]

        while ((stack.length > 0) && (current>stack.at(-1)) ){
            let index = stack.pop()[0]
            let difference = x - index
            result[index] = difference
        }
        stack.push([current, x])
    }

    console.log(result)

}

calculateWarmthOptimized()