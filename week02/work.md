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

Function
Array
