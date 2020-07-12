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
