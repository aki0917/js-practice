/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

function length(str) {
  var str = 'hogehoge';
  return(str.length);
}

/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
  return(str.length % 2==0);
}

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */
function firstChar(str) {
  return 'こねこ'.charAt(0)
}

/**
 *  4.4 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

function substring(str, a, b) {
  str = 'user_ab';
  var result = str.replace( 'user_ab', 'ab' );
  return (result);
}

/**
 *  4.5 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 *
 */

function isInclude(a, b) {
  var str = "Hello, world!";
  var a = str.includes("Hello", 1);
  var b = str.includes("ello", 1);
  console.log(res1)
  console.log(res2)
}

/**
 *  4.6 引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  console.log(str === reversed);
}
