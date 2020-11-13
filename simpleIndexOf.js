function indexOf(str, subStr) {
  const index = -1
  const strLen = str.length
  const subStrtrLen = subStr.length

  for (let i = 0; i < strLen; i++) {
    if (strLen - i < subStrtrLen) {
      // 子串长度大于母串剩余长度
      return index
    }
    for (let j = 0; j < subStrtrLen; j++) {
      if (str[i + j] !== subStr[j]) {
        // 对比不相等,直接让母串下一位
        break
      } else if (j === subStrtrLen - 1) {
        // 子串遍历完之后,都相等,返回母串开始的下标
        return i
      }
    }
  }
  return index
}

console.log(indexOf('aaaaabaaaacaaaadaaaammmm', 'aaam'))
