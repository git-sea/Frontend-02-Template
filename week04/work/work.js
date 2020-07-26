// 在一个字符串中，找到字符”a”
const find1 = function(s) {
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (c === 'a') {
            return true
        }
    }
    return false
}

find1('allen')

// 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“ab”

const find2 = function(s) {
    for (let i = 0; i < s.length; i++) {
        let c = s.slice(i, i + 2)
        if (c === 'ab') {
            return true
        }
    }
    return false
}

find2('abort')

// 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“abcdef”

const find3 = function(s) {
    for (let i = 0; i < s.length; i++) {
        let c = s.slice(i, i + 6)
        if (c === 'abcdef') {
            return true
        }
    }
    return false
}

find3('abcdefg')
