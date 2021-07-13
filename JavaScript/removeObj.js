/* 
    数组相同对象去重
*/

function removeObj(arr) {
    // 准备一个新对象
    let newObj = {}
    let arr2 = []

    for(let i in arr) {
        // 查找到如果没有这个id的值 就往新数组中添加这个id值
        if(!obj[arr[i].id]) {
            arr2.push(arr[i])
            // 使用对象访问属性的特质查看到是否会存在相同的id值 
            obj[arr[i].id] = true
            console.log(obj);
            console.log(arr2);
        }
    }
    return arr2
}

let arr = [{id : 3},{id : 1},{id : 2},{id : 3},{id : 2},{id : 1}]
console.log(removeObj(arr));