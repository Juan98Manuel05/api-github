function getOddNumbersUpToLimit(limit){
    const oddNumbers = []
    for(let i = 0; i < limit; i += 2){
        oddNumbers.push(i)
    }
    return oddNumbers
}

const limit = 15;
const oddNumbers = getOddNumbersUpToLimit(limit)
console.log(oddNumbers)