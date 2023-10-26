/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    
    let res = [];

    function backtrack(currentNode, currentArray){

        currentArray.push(currentNode);

        if (currentNode === graph.length-1){
            res.push([...currentArray]);
        }

        let neighbours = graph[currentNode];

        for(let n of neighbours){
            backtrack(n, currentArray);
        }

        currentArray.pop();

    }

    backtrack(0, []);

    return res;

};