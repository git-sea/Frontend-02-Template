const log = console.log.bind(console)

const ensure = (condition, message) => {
    if (!condition) {
        log('测试失败', message)
    } else {
        log('测试成功')
    }
}

const equals = function(a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
}

// 1 完成 StringToNumber 函数
// 备注：Number 有 4 种进制的定义, 需要全部支持
const StringToNumber = function(s) {
    let n = 0
    // 进制标识转换
    let radixMap = {
        '0b': 2,
        '0o': 8,
        '0x': 16,
    }
    // 16 进制转换表
    let hexMap = {
        'A': 10,
        'B': 11,
        'C': 12,
        'D': 13,
        'E': 14,
        'F': 15,
    }
    let start = s.slice(0, 2)
    // 默认 10 进制
    let radix = 10
    if (start in radixMap) {
        radix = radixMap[start]
        s = s.slice(2)
    }
    let l = s.length
    for (let i = 0; i < l; i++) {
        let ex = l - i - 1
        let v = s[i]
        if (v in hexMap) {
            v = hexMap[v]
        }
        n += radix ** ex * v
    }
    return n
}

const testStringToNumber = function() {
    ensure(equals(StringToNumber('12'), 12), 'test StringToNumber 1')
    ensure(equals(StringToNumber('0b111'), 0b111), 'test StringToNumber 2')
    ensure(equals(StringToNumber('0o10'), 0o10), 'test StringToNumber 3')
    ensure(equals(StringToNumber('0xFF'), 0xFF), 'test StringToNumber 4')
}

testStringToNumber()

// 2 完成 NumberToString 函数
// 备注：Number 有 4 种进制的定义, 传一个进制来指定需要转换成几进制的字符串
const NumberToString = function(n, radix = 10) {
    let s = ''
    // 进制标识转换
    let radixMap = {
        2: '0b',
        8: '0o',
        16: '0x',
        10: '',
    }
    // 16 进制转换表
    let hexMap = {
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F',
    }
    let start = ''
    if (radix in radixMap) {
        start += radixMap[radix]
    }
    // 不能整除
    if (n % radix > 0) {
        while (n % radix > 0) {
            let c = n % radix
            if (c > 9) {
                s = hexMap[c] + s
            } else {
                s = String(c) + s
            }
            n = parseInt(n / radix)
        }
    } else {
        // 可以整除
        s += String(n / radix) + '0'
    }

    let r = start + s
    // log('r is ', r)
    return r
}


const testNumberToString = function() {
    ensure(equals(NumberToString(12), '12'), 'test NumberToString 1')
    ensure(equals(NumberToString(0b111, 2), '0b111'), 'test NumberToString 2')
    ensure(equals(NumberToString(0o10, 8), '0o10'), 'test NumberToString 3')
    ensure(equals(NumberToString(0xFF, 16), '0xFF'), 'test NumberToString 4')
}

testNumberToString()
