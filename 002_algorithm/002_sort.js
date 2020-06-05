/**
 *  2.2.1 バブルソート
 *
 *  バブルソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */
function bubbleSort (array) {
  let ary = [7, 3,10, 5, 1];
  for(let outer = 0; outer < ary.length -1; outer++){
    for(let i = ary.length-1; i > outer; i--){
      if(ary[i] < ary[i-1]){
        let tmp = ary[i];
        ary[i] = ary[i-1];
        ary[i-1] = tmp;
      }
    }
  }
  return ary
}

/**
 *  2.2.2 挿入ソート
 *
 *  挿入ソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function insertSort (array) {
  let ary = [1, 3, 2, 4, 5];
  for(let i = 0; i < length; i++){
    let tmp = ary[i];
    if(ary[i - 1] > tmp){
      let j = i;
      while(j > 0 && ary[j - 1] > tmp){
        ary[j] = ary[j - 1];
        j--;
      }
      ary[j] = tmp;
    }
    return ary
  }
}

/**
 *  2.2.3 マージソート
 *
 *  マージソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function mergeSort (array) {
  return array
}


/**
 *  2.2.4 クイックソート
 *
 *  クイックソートを実装してください。(入力は数値のみ)
 *
 *  example:
 *    [1, 3, 2, 4, 5] => [1, 2, 3, 4, 5]
 *    [5, 3, 2, 1] => [1, 2, 3, 5]
 */

function quickSort (array, start = 0, end = (array.length -1)) {
  return array
};

