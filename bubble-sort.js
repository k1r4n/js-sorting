const bubbleSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let isSwapped = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j ++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return arr;
};

console.log(bubbleSort([4, 2, 1, 3, 7, 6, 5, 3, 2, 10, 9]));
console.log(bubbleSort([4]));
console.log(bubbleSort([]));