let arr = [2, 4, 5, 5, 5, 5, 8, 8, 12]
const target = 8

function countelement() {

    let left = 0;
    let right = arr.length - 1;
    let firstIndex = -1; 

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] == target) {
            firstIndex = mid; 
            right = mid - 1;  
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    left = 0;
    right = arr.length - 1;
    let lastIndex = -1; 

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] == target) {
            lastIndex = mid; 
            left = mid + 1;  
        }
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    let count = lastIndex - firstIndex + 1;
    return count;
}

let result = countelement();
console.log(`No of elements are ${result}`);  