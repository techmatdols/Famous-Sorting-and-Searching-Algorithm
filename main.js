  

  function insertionSort(arr){
    const length = arr.length;
    for(let i = 1; i < length; i++){
        let currentValue = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > currentValue){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j +1] = currentValue
    }
    return arr;
  }
//   Example usage
const array = [5,2,8,12,1];
const sortedArray = insertionSort(array);
console.log(sortedArray); 