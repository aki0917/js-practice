
/**
 *  1.1 Hello Worldという文字を出力するメソッドを定義してください
 *
 */
function helloWorld() {
  console.log('Hello World');
}

/**
 *  1.2 const を使って定義した変数を出力するdisplayConstメソッドを実装してください
 *
 */
function displayConst() {
  const name ="yuko";
  console.log(name);
}
/**
 *  1.3 let を使って定義した変数を出力するdisplayLetメソッドを実装してください
 *
 */

function displayLet() {
  let number = 1;
  console.log(number);
}

/**
 *  1.4 引数に渡した変数を表示するメソッドを実装してください
 *
 */
function displayArgument(arg) {
  arg = arg + 10;
  var num = 10;
  displayArgument(num);
  console.log(num);
}

/**
 *  1.5 渡された二つの引数の合計を返却するメソッドを実装してください
 *
 */
function subtractTwoArgs(a, b) {
  return(a + b);
}

/**
 *  1.6 渡された二つの引数の差を返却するメソッドを実装してください
 *
 */
function subtractTwoArgs(a, b) {
  return(a - b);
}

/**
 *  1.7 渡された二つの引数の商を返却するメソッドを実装してください
 *
 */
function quotientTwoArgs(a, b) {
  return(a / b);
}

/**
 *  1.8 渡された二つの引数の積を返却するメソッドを実装してください
 *
 */
function productTwoArgs(a, b) {
  return(a * b);
}

/**
 *  1.9 渡された引数の2で割ったあまりを返却するメソッドを実装してください
 *
 */
function remainderTwoArgs(a) {
  return(a % b);
}

/**
 *  1.10 渡された引数が2の倍数であることを確認するメソッドを実装してください
 *
 */
function isEven(a) {
  
}

/**
 *  1.10 渡された二つの文字列を連結するメソッドを実装してください
 *
 */
function concatString(a, b) {
  console.log("a" + "b");
}
