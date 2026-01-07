let arr = [2, 4, 5, 5, 5, 5, 8, 12]
const target = 5

function firstoccurence() {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;  

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] == target) {
            result = mid; 
            right = mid - 1;  
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    
    return result !== -1 ? `first occurrence is at index ${result}` : "not found";
}

console.log(firstoccurence());