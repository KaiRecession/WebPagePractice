// 返回一个数组
const panels = document.querySelectorAll('.panel');
// forEeach函数里面写回调函数，回调函数可以用三个参数，value、index、和数组array本身
// 为数组里面的元素都执行一次回调函数
// （item，i）=>就相当于function(item(数字里面的元素)，index（元素的索引）){}
panels.forEach((item, i)=>{
    item.addEventListener('click',()=>{
        panels.forEach((items)=>{
            // 移除class属性
            items.classList.remove('active');
        })
        // 添加class属性
        item.classList.add('active');
    })
})