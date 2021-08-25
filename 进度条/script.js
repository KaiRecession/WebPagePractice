const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
// let声明的变量，只在括号里面有效
let currentActive = 1;

next.addEventListener('click', ()=>{
    currentActive++;
    update();
})

prev.addEventListener('click', ()=>{
    currentActive--;
    update();
})

function update() {
    circles.forEach((item, index)=>{
        // 很妙，体会一下
        if (index < currentActive) {
            item.classList.add('active');
        }else {
            item.classList.remove('active');
        }
    })

    // 更新长度（百分比的数值），以多长为一步
    progress.style.width = (currentActive - 1) / (circles.length - 1) * 100 + "%";

    if (currentActive == 1) {
        prev.disabled = true;
    }else if (currentActive == 4) {
        next.disabled = true;
    }else {
        prev.disabled = false;
        next.disabled = false;
    }
}