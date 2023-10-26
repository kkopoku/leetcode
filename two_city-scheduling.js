function twoCitySchedCost(costs) {
    let diffs = [];
    for (let i = 0; i < costs.length; i++) {
        let [c1, c2] = costs[i];
        diffs.push([c2 - c1, c1, c2]);
    }
    
    diffs.sort((a, b) => a[0] - b[0]);
    
    let res = 0;
    for (let i = 0; i < diffs.length; i++) {
        if (i < diffs.length / 2) {
            res += diffs[i][2];
        } else {
            res += diffs[i][1];
        }
    }
    
    return res;
}

function twoCitySchedCostOpt(costs){

    // sort costs by B in the first half
    costs.sort((a, b) => (a[1] - a[0]) - (b[1] - b[0]));

    let res = 0;
    const n = costs.length / 2;

    for (let i = 0; i < n; i++) {
        // as you iterate for the first half of the elements, add the A aspect as well
        res += costs[i][1] + costs[i + n][0];
    }

    return res;
}

const data = [[10,20],[30,200],[400,50],[30,20]]
twoCitySchedCostOpt(data)


// keep in mind that the optimization comes where you are doing the addition for the cost


// for the first one, I will have to iterate through the array full length and the second 
// one I would have to iterate only half of the array length

