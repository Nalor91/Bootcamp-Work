function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    const nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
    23, 2, 453, 546, 75, 67, 4342, 32
    ];    

    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }   
    
    return arr;
}

// bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// bubbleSort([1, 2, 3]); // [1, 2, 3]
// bubbleSort([]);

// let nums = [
//     4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
//     23, 2, 453, 546, 75, 67, 4342, 32
// ];

// bubbleSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67,
//                   // 75, 232, 232, 453, 546, 4342]

function merge (arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

// let arr1 = [1,3,4,5];
// let arr2 = [2,4,6,8];
// merge(arr1,arr2) // [1,2,3,4,4,5,6,8]

// arr1 // [1,3,4,5];
// arr2 // [2,4,6,8];

// let arr3 = [-2,-1,0,4,5,6];
// let arr4 = [-3,-2,-1,2,3,5,7,8];

// merge(arr3,arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

// let arr5 = [3,4,5]
// let arr6 = [1,2]

// merge(arr5,arr6) // [1,2,3,4,5]

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

// mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// mergeSort([1, 2, 3]); // [1, 2, 3]
// mergeSort([]);

// let nums = [
//     4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
//     453, 546, 75, 67, 4342, 32
// ];

// mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35,
//                  //  43, 67, 75, 232, 232, 453, 546, 4342]

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i -1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// insertionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// insertionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// insertionSort([1, 2, 3]); // [1, 2, 3]
// insertionSort([]);

// let nums = [
//     4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
//     453, 546, 75, 67, 4342, 32
// ];

// insertionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34,
//                      //  34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = 0; i < arr.length; i++) {
        let lowestNum = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowestNum]) {
                lowestNum = j;
            }
        }
        swap (arr, lowestNum, i);
    }

    return arr;
}

// selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
// selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
// selectionSort([1, 2, 3]); // [1, 2, 3]
// selectionSort([]);

// let nums = [
//     4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
//     453, 546, 75, 67, 4342, 32
// ];

// selectionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34,
//                      //  35, 43, 67, 75, 232, 232, 453, 546, 4342]

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
        }
    }
     swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    return String(num).length;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++) {
        let buckets = Array.from({length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let digit = getDigit(num, k);
            buckets[digit].push(num);
        }
        nums = [].concat(...buckets);
    }
    return nums;
}