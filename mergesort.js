function split(wholeArray) {
    if(wholeArray.length == 1) {
        return wholeArray;
    }
    let midpoint = Math.floor(wholeArray.length / 2)
    let firstHalf = wholeArray.slice(0, midpoint);
    let secondHalf = wholeArray.slice(midpoint);
    console.log(firstHalf, secondHalf);
    return [firstHalf, secondHalf];
  }
  
  function merge (arr1, arr2) {
    console.log("arr1", arr1);
    console.log("arr2", arr2);
    let mergedArr = [];
    let mergedArrLen = arr1.length + arr2.length;
    let arr1Index = 0;
    let arr2Index = 0;
    for(let i = 0; i < mergedArrLen; i++) {
        if(arr1Index >= arr1.length ) {
            if(arr2Index < arr2.length) {
                mergedArr[i] = arr2[arr2Index++];
            }
        }
        else if(arr2Index >= arr2.length) {
            if(arr1Index < arr1.length) {
                mergedArr[i] = arr1[arr1Index++];
            }
        }
        else if(arr1[arr1Index] > arr2[arr2Index]) {
            mergedArr[i] = arr2[arr2Index++];
        }
        else {
            mergedArr[i] = arr1[arr1Index++];
        }
    }    
    //console.log(mergedArr);
    return mergedArr;
  }

  function mergeSort(array) {
    let splitArray = split(array);
      if(array.length > 1) {
        return merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]));
      }
      else {
          return array;
      }
    }

  console.log("FINAL RESULT", mergeSort([5, 10, 100, 0, 121, 21, 2, 321, 1]));