let arr = [2, 4, 5, 5, 5, 5, 8, 12]
const target = 5

function lastoccurence() {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;  

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] == target) {
            result = mid; 
            left = mid + 1;  
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    
    return result !== -1 ? `last occurrence is at index ${result}` : "not found";
}

console.log(lastoccurence());