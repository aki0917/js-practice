/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */
const array = [1, 2, 3];
array.forEach (function printArray(array) {
  console.log(array);
});

/**
 *  5.2 全ての曜日を配列として返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */
function getDays() {
  var Day = [ "Monday","Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return(Day);
}

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num) {
  return(array.includes(num));
}
/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => false
 *    [1, 2, 2, 3], 5 => true
 *    [] => false
 *
 */

myarray.forEach (function isDuplicate(array) {
  var myarray = [1, 2, 3];
  var res1= myarray.includes(5);
  console.log(res1);
});
