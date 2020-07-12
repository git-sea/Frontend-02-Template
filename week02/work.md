# work

## 编写带括号的四则运算产生式

```
<BracketsExpression>::="("<AddtiveExpression>"
                         +"<AddtiveExpression>
                         "-"<AddtiveExpression>")"

<MultiplicativeExpression>::=<Nmber>|<MultiplicativeExpression>|<BracketsExpression>
                          "*"<Nmber>|<MultiplicativeExpression>|<BracketsExpression>
                          "/"<Nmber>|<MultiplicativeExpression>|<BracketsExpression>

<AddtiveExpression>::=<MultiplicativeExpression>|<AddtiveExpression>
                   "+"<MultiplicativeExpression>|<AddtiveExpression>
                   "-"<MultiplicativeExpression>|<AddtiveExpression>
```

## 尽可能寻找你知道的计算机语言，尝试把它们分类

形式语言--按用途分类用途
- 数据描述语言
    - HTML, XML, CSS, JSON, SQL
- 编程语言
    - Basic, C, C++, C#, Clojure, Dart, Erlang, Go, Haskell, Java, JavaScript, Julia, Kotlin,
    - Lisp, Lua, Objective-C, Perl, PHP, Python, R, Ruby, Rust, Scala, Swift, Shell, TypeScript, Verilog

形式语言--按表达方式分类
- 声明式语言
  - HTML, XML, CSS, JSON, SQL, Clojure, Haskell, Lisp
- 命令型语言
  - Basic, C, C++, C#, Dart, Erlang, Go, Java, JavaScript, Julia, Kotlin,
  - Lua, Objective-C, Perl, PHP, Python, R, Ruby, Rust, Scala, Swift, Shell, TypeScript, Verilog

## 写一段 JS 的函数，把一个 string 它代表的字节给它转换出来，用 UTF8 对 string 进行遍码。

```JavaScript
const encode = function (s) {
  const encoder = new TextEncoder()
  return encoder.encode(s)
}

console.log('a utf8 is', encode('a'))
```

# 用 JavaScript 去设计狗咬人的代码

```JavaScript
class Animal {
    constructor(hp) {
        this.hp = hp
    }
}

class Dog extends Animal {
    constructor(hp, attack) {
        super(hp)
        this.attack = attack
    }
}

class Human extends Animal {
    constructor(hp) {
        super(hp)
    }

    hurt(damage) {
        this.hp -= damage
    }
}

const bite = function (human, dog) {
    human.hurt(dog.attack)
}

const human = new Human(100)
const dog = new Dog(200, 20)

bite(human, dog)
```

## 找出 JavaScript 标准里面所有具有特殊行为的对象

###  基本对象

Function
- call
Boolean
Symbol

### 错误对象

Error
- message 属性
ReferenceError
SyntaxError
TypeError

## 数字和日期对象

Number
- EPSILON, EPSILON 属性，
BigInt
- asIntN, asUintN 静态方法
Math
- 不是构造器，所有属性与方法都是静态，用于 Number 类型
Date
- now, parse, UTC 方法，

## 字符串

String
- 字符串构造函数，fromCharCode
RegExp
- global，ignoreCase 等属性

## 可索引的集合对象

Array
- length
Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
Float32Array
Float64Array
BigInt64Array
BigUint64Array

## 使用键的集合对象

Map
- 记录原始插入顺序
Set
- 元素只会出现一次
WeakMap
- key 为 Object 类型
WeakSet
- 对象的集合，弱引用

## 结构化数据

ArrayBuffer
- 指定格式与方法
SharedArrayBuffer
Atomics
- 提供了一组静态方法用来对 SharedArrayBuffer 对象进行原子操作
DataView
- 是一个可以从 ArrayBuffer 对象中读写多种数值类型的底层接口
JSON
- parse stringify

## 控制抽象对象

Promise
- 多个属性和方法
Generator
- next, throw
AsyncFunction
- 生成新的 async function

## 反射

Reflect
- 不是构造函数
Proxy
- 定义基本操作的自定义行为

## 其他

Intl
- Collator，NumberFormat 和 DateTimeFormat 对象的构造函数是 Intl 对象的属性
WebAssembly
- 不是构造函数
