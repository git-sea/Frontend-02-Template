# 学习笔记

## 泛用语言分类方法

语言按语法分类

- 非形式语言
  - 中文，英文
- 形式语言(乔姆斯基谱系)
  - 0 型，无限制文法
  - 1 型，上下文相关文法
  - 2 型，上下文无关文法
  - 3 型，正则文法

## 产生式(BNF)

用来描述计算机语言语法的符号集，规则：

- 用尖括号括起来的名称表示语法结构名 <>
- 基础结构，也叫终结符，terminal symbol
- 复合结构，也叫非结续符，non-terminal symbol
- 一般都有最上层的非终结符
- 使用引号和中间的字符，表示终结符
- 可以有括号，形式组
- * 表示重复多次
- | 表示或
- + 表示至少一次

## 现代语言的分类

用途：
数据描述语言
- JSON, HTML, XAML，SQL, CSS
编程语言
- javascript, Java, Python, Haskell, Clojure

表达方式
声明式语言 Declaritive
- JSON, HTML, XAML, SQL, CSS, Lisp, Clojure, Haskell

命令式语言 Imperative
- C, C++, Python, Ruby, Perl, Js
