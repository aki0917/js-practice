/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

function printOneToTen() {
  for(let i = -1; i < 10; i++) {
    console.log(i+1);
  }
}

/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 *
 */
function printOneToTenDesc() {
  for(let i = 11; i > 0; i--) {
    console.log(i-1);
  }
}

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */
function printOneToTenWhile() {
  var count = 0; 
  while(count <= 10){
    console.log(count);
    count++;
  }
}

