//test data 1
const testData1 = [[8, 4], [5, 6], [2, 3], [3, 4], [6, 2]]
//test data 2
const testData2 = [[7, 3], [3, 10], [1, 5], [2, 5]]

function findMaximumMarble(param){
    const maxBoughtBox = param[0][0]; // so hop co the mua
    let maxBoughtMable = 0 // so bi co the mua
    const numberOfMarble = []; // cau truc du lieu the hien so bi trong hop
    const onlyMarble = param.slice(1, param.length); // chi lay du lieu ve bi va hop trong input
    onlyMarble.sort(function(a, b){return a[1] - b[1]}); // sap xep theo thu tu tang dan
    for (let i = 0; i < onlyMarble.length; i++){
        for(let j = 1; j <= onlyMarble[i][0]; j++){
            numberOfMarble.push(onlyMarble[i][1])
        }
    }

    // lap de tim ra so bi
    for(let i=numberOfMarble.length-1; i>=0; i--){
        maxBoughtMable = maxBoughtMable + numberOfMarble[i];
        if (numberOfMarble.length-i == maxBoughtBox){
            break;
        }
    }
    console.log(maxBoughtMable);
    return maxBoughtMable;
}

//function call
findMaximumMarble(testData2)