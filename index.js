// code your solution here
function superbowlWin(arr) {
    const winYear = arr.find(function(obj){
        if (obj.result === "W") {
            return obj.year
        }
        else{
            return
        }
    })
    if (winYear) {
        return winYear.year
    }
    return winYear
}

console.log(superbowlWin(record))