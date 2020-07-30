const linearSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(linearSort([4, 2, 1, 3, 7, 6, 5, 3, 2, 10, 9]));
console.log(linearSort([4]));
console.log(linearSort([]));