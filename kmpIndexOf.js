function indexOf(str, subStr) {
  const strLen = str.length
  const subStrLen = subStr.length

  const strNextArr = getStrNextArr(subStr)

  let i = 0
  let j = 0
  while (i < strLen && j < subStrLen) {
    if (j === -1 || str[i] === subStr[j]) {
      // 如果两个相等,或者确定subStr[0]不等于str[i] (即j为-1的时候,主串移下一位,子串下标指向0)
      i++
      j++
    } else {
      // 两个字符不相等,且j指向的仍然是子串的下标,如果strNextArr元素的值为-1,即说明子串第一个元素与主串对比元素不相同
      j = strNextArr[j]
    }
  }

  if (j >= subStrLen) {
    // 说明subStr被遍历完成,即子串能在主串中找到
    return i - j
  } else {
    return -1
  }
}

/*
  子串对应位置为j
  |-- j为0时,对应指向为-1
  |-- Max{k | 0 < k < j}, 满足"s[0]...s[k - 1]" = "s[j - k]...s[j - 1]"
  |-- 其他情况为 0
*/
function getStrNextArr(string) {
  const strNextArr = [-1]
  let i = 0
  let j = -1
  while (i < string.length - 1) {
    if (j === -1 || string[i] === string[j]) {
      // j为-1的时候是边界值;将被赋值到下标为0的位置
      // 若s[i] === s[j],此时i相当于上述说明的j-1号位,j相当于上述说明的k-1号位,把s[i + 1]赋值为j + 1
      i++
      j++
      strNextArr[i] = j
    } else {
      // 回溯
      j = strNextArr[j]
    }
  }
  return strNextArr
}

console.log(indexOf('aaaaabaaaacaaaadaaaammmm', 'aaam'))
console.log(indexOf('abcdefg', 'aaa'))
console.log(indexOf('000010000111001002002222', '0022'))
console.log(indexOf('ashdqweoahsdiqhwdasdgsdg', 'wda'))
