function indexOf(str, subStr) {
  let i = 0,
    j = 0
  const strLen = str.length
  const subStrLen = subStr.length
  while (i < strLen && j < subStrLen) {
    if (str[i] === subStr[j]) {
      // 一直比较,直到其中一个串被遍历完,或者两者对应不相等
      i++
      j++
    } else {
      // j值充值为0, i回到与subStr初始对比位置的下一位
      i = i - j + 1
      j = 0
    }
  }
  if (j >= subStrLen) {
    return i - j
  } else {
    return -1
  }
}

console.log(indexOf('aaaaabaaaacaaaadaaaammmm', 'aaam'))
console.log(indexOf('abcdefg', 'aaa'))
console.log(indexOf('000010000111001002002222', '0022'))
console.log(indexOf('ashdqweoahsdiqhwdasdgsdg', 'wda'))
