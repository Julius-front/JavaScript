/* 
    ES6新特性汇总
    let 和 var 的区别
*/

// let声明的变量存在块级作用域  不存在变量提升（只能先声明再使用，否则就会报错）
// 块级作用域的好处就是 防止内层变量覆盖外层变量

// 暂时性死区
// var tmp = 23;
// if(true) {
//     console.log(temp);
//     let temp = 20;
// }

var arr = [];
for (var i = 0; i < 2; i++) {
    console.log('@',i);
    arr[i] = function () {
        console.log(i);   //当i的值为2时，不满足条件，才会跳出循环，输出2
    }
}
// 输出2的原因是因为 i是全局的，函数执行时输出的都是全局作用域下的i值
// 关键点：使用的是同一个i

arr[0]();
arr[1]();

let arr = [];
for (let i = 0; i < 2; i++) {
    console.log('@',i);
    arr[i] = function () {
        console.log(i);   // 循环结束后产生了两个块级作用域，且产生的两个i处于不同的块级作用域中，互不影响
        // 关键点：使用的是分别作用域中的i
    }
}

// 总结：var存在变量提升 声明的是全局变量，没有块级作用域的概念
//      let不存在变量提升 声明的变量存在块级作用域的概念