# 四川文产院 2018 级《WEB 前端实训》试卷答卷

> 答卷说明：
> 1. 本试卷满分 100 分，120 分钟完卷。
> 2. 本次考试为开卷考试。
> 3. 本试卷适用于 2018 级移动专业 1、2 班

## 一、选择题（30 分，共 15 题，每题 2 分，答案包含单选、多选）

1. JavaScript 中声明变量的关键字包括：____ABC_____。
2. 如下属于 JavaScript 原始数据类型的有：___CD________。
3. 在什么时候会出现 undefined?_______ABCD
4. 以下数组方法中，哪一个是用于删除数组中的第一个元素?______C_
5. 定义函数的方式包括：______ABCD____
6. 间接调用函数的方法包括：AB____________
7. 下述有关闭包的叙述，正确的有：____________ADC_。
8. 下面有关纯函数的叙述，正确的有：_________ABC________。
9. 面向对象编程的基本特征包括：_______________BCD____。
10. 在 JavaScript 中创建对象的方式包括：_________ABCD_________。
11. 在 JavaScript 中，执行上下文的创建分为两个阶段，这两个阶段是：CD____________。
12. 变量声明的三种方式中，变量可以提升的方式包括：_______A_。
13. 在 JavaScript 中，有关 this 值的说法，正确的包括：_________AD____。
14. 下面有关 ES6 类的说法，正确的包括：_________AD___。
15. 下面有关 ES6 类的静态方法，正确的包括：________ABC____。

------

## 二、代码填空题（20 分，共 5 题，每题 4 分）

1. 控制台的输出为：`_________Student undefined___________`。

2. 控制台的输出为：`_______1_______________`。

3. 控制台的输出为：`____________I am____outside!______`。

4. 控制台的输出为：`_______________I am____outside!__________`。

5. 控制台的输出为：______小明 
	
	`_______ hi_______`。
-------

## 三、代码题（50 分，共 5 题，每题 10 分）

1. 斐波那契（Fibonacci）数组的计算是一项很耗时的操作，请使用 Memoization 技术对斐波那契数组的计算进行优化。

```js
var fibonacci = function (n) {
    return n < 2 ? n : arguments.callee(n - 1) + arguments.callee(n - 2);
  };
  function memoize(fn) {
    return function () {
      var args = Array.prototype.slice.call(arguments);
      fn.cache = fn.cache || {};
      return fn.cache[args]
        ? fn.cache[args]
        : (fn.cache[args] = fn.apply(this, args));
    };
  }
  const memFib = memoize(fibonacci);
  console.time();
  console.log(memFib(30));
  console.timeEnd();
  console.time();
  console.log(memFib(30));
  console.timeEnd();
```

-------

2. 代码为：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <title>Document</title>
    <style>
        .p1 {
            visibility: hidden;
        }
        li:hover{
            color: red;
        }
    </style>
</head>
<body>
    <ul>
        <li>Java<>
        <li>JavaScript<>
    </ul>
    <input type="text" id="txtItem" />
    <button id="btnAdd">+<tton>
    <button id="btnDel">-<tton>
    <script>
        const oList = document.querySelector('ul')
        document.querySelector('#btnAdd').addEventListener('click',() => {
            let strItem = document.querySelector("#txtItem").value
            let oE = document.createElement('li')
            oE.textContent = strItem
            oList.appendChild(oE)
            document.querySelector("#txtItem").value = ''
            if (oList.childElementCount > 0) {
                document.querySelector('#btnDel').classList.remove('p1')
            }
        })
        document.querySelector('#btnDel').addEventListener('click',() => {
            oList.removeChild(oList.lastElementChild)
            if (oList.childElementCount == 0) {
                document.querySelector('#btnDel').classList.toggle('p1')
            }
        })
    </script>
</body>
<html>
```

-------

3. 代码为：

```js
const oArray = [1, 2, 2, 3, null, null, undefined, undefined, 4, 4];
const b = new Set(oArray);
const c = [...b];
console.log(c);

```

-------

4. 代码：

```js
const oArray = [1, 2, 12, 10, 33, 7, 9, 22];
const a2 = oArray.sort()
const num = (a,b) => a-b;
const a3 = oArray.sort(num);
console.log(a3)
```

-------

5. 代码：

```js
const oArray = [0, 12, 7, 8, 9, 24, 1];
const a2 =  oArray.filter((x)=> x%2 ===0);
console.log(a2);
const a3=a2.reduce((acc,val) => acc + val);
console.log(a3);


```



​        