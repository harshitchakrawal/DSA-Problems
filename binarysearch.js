let arr = [-2, 2, 5, 8, 12, 21, 32, 47]
const target = 5

function binarySearch() {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        
        if (arr[mid] === target) {
            return `${target} is found at index ${mid}`
        }
        else if (arr[mid] < target) {  
            left = mid + 1
        }
        else {  
            right = mid - 1
        }
    }
    
    return `${target} not found, insert at index ${left}`
}

console.log(binarySearch())

